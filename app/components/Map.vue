<script setup lang="ts">
import { loopsData } from '~/assets/loops';

const loops = ref(loopsData)
</script>

<template>
    <TotalDisplay :loops="loops" />
    <SlopesSvg :loops="loops" />
</template>
