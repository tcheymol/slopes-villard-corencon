<script setup lang="ts">
import { loopsData } from '~/assets/loops';
import { getColor, getStyles, toggleLoop, addLap, removeLap, type Loop } from '~/services/loops';
import { getTotalLength } from '~/services/loopsComputer';
import { hide, initialTooltip, moveTooltip, show } from '~/services/tooltip';

const tooltip = ref(initialTooltip);
const loops = ref(loopsData)
const isAlertVisible = ref(false)

function showAlert() {
    isAlertVisible.value = true;
    setTimeout(() => {
        isAlertVisible.value = false;
    }, 2000);
}

function addLoop(loop: Loop) {
    showAlert();
    toggleLoop(loop);
}

onMounted(() => {
    loops.value.forEach(loop => {
        const el = document.getElementById(`path-${loop.id}`)
        if (!(el instanceof SVGPathElement)) return;
        const length = el.getTotalLength()
        loop.center = el.getPointAtLength(length / 2)
    })
})
</script>

<template>
    <div>
        <div class="w-full flex flex-col items-center m-2">
            <div class="p-3 bg-base-200 rounded-lg border-yellow-600 border-8 dark:bg-white light:bg-neutral-900 relative top-5 z-10">
                <span class="text-center w-full text-2xl light:text-white dark:text-black my-3">Total : {{
                    getTotalLength(loops) }}km</span>
        </div>
        </div>
    </div>
    <div class="text-center py-4 lg:px-4 fixed z-10 w-screen"
     v-if="isAlertVisible"
     >
        <div class="p-2 bg-yellow-600 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
            <span class="font-semibold mr-2 text-left flex-auto text-3xl">
                🎉 WOW, déjà {{ getTotalLength(loops) }}km
            </span>
            <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
        </div>
    </div>
    <div class="relative w-full">
        <NuxtImg src="/slopes-villard-corencon/pistes.png" />
        <svg viewBox="0 0 937.41876 437.35626" class="absolute top-0 left-0 w-full h-full"
            @mousemove="(e: MouseEvent) => moveTooltip(tooltip, e)">
            <g v-for="loop in loops" :key="loop.id" transform="translate(365.78647,70.24688)">
                <path :id="`path-${loop.id}`" :key="loop.id" :d="loop.path"
                    :class="{ active: loop.selected, [loop.grade]: true }" @click="addLoop(loop)"
                    @mouseenter="show(tooltip, loop)" @mouseleave="hide(tooltip)" :style="getStyles(loop)" />
                <circle :cx="loop.center.x" :cy="loop.center.y" r="6" :class="{ active: loop.selected }"
                    @click="addLoop(loop)" :fill="getColor(loop)" />
                <text :x="loop.center.x" :y="loop.center.y" font-size="6" fill="white" @click="addLoop(loop)"
                    font-weight="bold" text-anchor="middle" dominant-baseline="middle">
                    {{ loop.length }}
                </text>
                <Controls :loop="loop" @addLap="addLap(loop)" @removeLap="removeLap(loop)" v-if="loop.selected"/>
            </g>

        </svg>
        <Tooltip :tooltip="tooltip" />
    </div>
</template>


<style scoped>
path {
    fill: none;
    stroke-width: 4;
    cursor: pointer;
    stroke: var(--path-color);
}

text {
    cursor: pointer;
}

path:after {
    content: attr(data-length);
    position: absolute;
    background: white;
    padding: 2px 4px;
    border: 1px solid black;
    font-size: 12px;
}

path:hover {
    stroke-width: 12;
}

path.active {
    stroke: #FFD700;
}
</style>