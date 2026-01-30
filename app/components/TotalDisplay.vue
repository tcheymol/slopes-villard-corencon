<script setup lang="ts">
import type { Loop } from '~/services/loops';
import { getTotalLength } from '~/services/loopsComputer';

defineProps<{
    loops: Loop[]
}>();
</script>

<template>
    <div class="fixed top-0 left-0 right-0 flex justify-center z-50 md:relative md:top-auto md:left-auto md:right-auto">
        <div class="w-full flex flex-col items-center">
            <div class="p-3 bg-base-200 rounded-lg border-yellow-600 border-4 dark:bg-white light:bg-neutral-900 z-10">
                <span class="text-center w-full text-2xl light:text-white dark:text-black my-3">Total : {{
                    getTotalLength(loops) }}km</span>
            </div>
        </div>
    </div>
</template>
