<script setup lang="ts">
const props = defineProps(['loop'])

</script>

<template>
        <g class="button" @click="$emit('addLap')">
            <circle :cx="loop.center.x + 4" :cy="loop.center.y + 7" r="7" fill="black"/>
            <circle :cx="loop.center.x + 4" :cy="loop.center.y + 7" r="6" fill="#FFD700"/>
            <text :x="loop.center.x + 4" :y="loop.center.y + 8" font-size="12" fill="black" font-weight="bold" text-anchor="middle" dominant-baseline="middle">+</text>
        </g>
        <g class="button" @click="$emit('removeLap')">
            <circle :cx="loop.center.x + 4" :cy="loop.center.y - 6" r="7" fill="black"/>
            <circle :cx="loop.center.x + 4" :cy="loop.center.y - 6" r="6" fill="#FFD700"/>
            <text :x="loop.center.x + 4" :y="loop.center.y - 6" font-size="12" fill="black" font-weight="bold" text-anchor="middle" dominant-baseline="middle">-</text>
        </g>
        <g>
            <circle :cx="loop.center.x - 8" :cy="loop.center.y" r="7" fill="black"/>
            <circle :cx="loop.center.x - 8" :cy="loop.center.y" r="6" fill="#FFD700"/>
            <text :x="loop.center.x - 8" :y="loop.center.y + 1" font-size="6" fill="black" font-weight="bold" text-anchor="middle" dominant-baseline="middle">
                X {{ loop.laps || 1 }}
            </text>
        </g>
</template>

<style scoped>
    g {
        cursor: pointer;
    }

    .button:hover circle {
        fill: #ffea73;
    }

    text {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
</style>