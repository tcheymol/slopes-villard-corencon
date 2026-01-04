<script setup lang="ts">
    import { initialTooltip } from '~/services/tooltip';

    const tooltip = ref(initialTooltip);
</script>

<template>
    <div
        v-if="tooltip.visible"
        class="tooltip"
        :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }"
    >
        {{ tooltip.text }}
    </div>
</template>


<style scoped>
    .tooltip {
        position: fixed;
        background: #222;
        color: white;
        padding: 6px 10px;
        border-radius: 6px;
        font-size: 12px;
        pointer-events: none;
    }
</style>