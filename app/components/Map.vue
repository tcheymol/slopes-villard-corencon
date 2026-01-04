<script setup lang="ts">
import { loopsData } from '~/assets/loops';
import { getColor, getStyles, toggleLoop, addLap, removeLap } from '~/services/loops';
import { getTotalLength } from '~/services/loopsComputer';
import { hide, initialTooltip, moveTooltip, show } from '~/services/tooltip';

const tooltip = ref(initialTooltip);
const loops = ref(loopsData)

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
    <h1 class="w-full text-3xl m-3">Calculateur d'intinéraire Villard-Corençon</h1>
    <div class="w-full flex flex-col items-center m-2">
        <div class="p-3 bg-base-200 rounded-lg border border-black dark:bg-white light:bg-neutral-900">
            <span class="text-center w-full text-2xl light:text-white dark:text-black my-3">Total : {{
                getTotalLength(loops) }}km</span>
        </div>
    </div>
    <div class="relative w-full">
        <NuxtImg src="/slopes-villard-corencon/pistes.png" />
        <svg viewBox="0 0 937.41876 437.35626" class="absolute top-0 left-0 w-full h-full"
            @mousemove="(e: MouseEvent) => moveTooltip(tooltip, e)">
            <g v-for="loop in loops" :key="loop.id" transform="translate(365.78647,70.24688)">
                <path :id="`path-${loop.id}`" :key="loop.id" :d="loop.path"
                    :class="{ active: loop.selected, [loop.grade]: true }" @click="toggleLoop(loop)"
                    @mouseenter="show(tooltip, loop)" @mouseleave="hide(tooltip)" :style="getStyles(loop)" />
                <circle :cx="loop.center.x" :cy="loop.center.y" r="6" :class="{ active: loop.selected }"
                    @click="toggleLoop(loop)" :fill="getColor(loop)" />
                <text :x="loop.center.x" :y="loop.center.y" font-size="6" fill="white" @click="toggleLoop(loop)"
                    font-weight="bold" text-anchor="middle" dominant-baseline="middle">
                    {{ loop.length }}
                </text>
                <g v-if="loop.selected">
                    <circle :cx="loop.center.x - 15" :cy="loop.center.y" r="6" :class="{ active: loop.selected }"
                        @click="addLap(loop)" fill="#FFD700"/>
                    <text :x="loop.center.x - 15" :y="loop.center.y + 1" font-size="12" fill="black"
                        font-weight="bold" text-anchor="middle" dominant-baseline="middle"  @click="addLap(loop)"
                        >
                        +
                    </text>
                </g>
                <g v-if="loop.selected">
                    <circle :cx="loop.center.x - 15" :cy="loop.center.y - 15" r="6" :class="{ active: loop.selected }"
                        @click="removeLap(loop)" fill="#FFD700"/>
                    <text :x="loop.center.x - 15" :y="loop.center.y - 15" font-size="12" fill="black"
                        font-weight="bold" text-anchor="middle" dominant-baseline="middle"  @click="removeLap(loop)"
                        >
                        -
                    </text>
                </g>
                <g v-if="loop.selected">
                    <circle :cx="loop.center.x - 30" :cy="loop.center.y" r="6" :class="{ active: loop.selected }"
                        fill="#FFD700"/>
                    <text :x="loop.center.x - 30" :y="loop.center.y + 1" font-size="6" fill="black"
                        font-weight="bold" text-anchor="middle" dominant-baseline="middle">
                        X {{ loop.laps || 1 }}
                    </text>
                </g>
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