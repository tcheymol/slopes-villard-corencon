<script setup lang="ts">
import { getColor, getStyles, toggleLoop, addLap, removeLap, type Loop } from '~/services/loops';
import { hide, initialTooltip, moveTooltip, show } from '~/services/tooltip';

const props = defineProps<{
    loops: Loop[]
}>();

const tooltip = ref(initialTooltip);

onMounted(() => {
    props.loops.forEach(loop => {
        const el = document.getElementById(`path-${loop.id}`)
        if (!(el instanceof SVGPathElement)) return;
        const length = el.getTotalLength()
        loop.center = el.getPointAtLength(length / 2)
    })
})
</script>

<template>
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
