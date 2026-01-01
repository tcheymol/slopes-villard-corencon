<script setup lang="ts">
    const loops = ref([
  {
    id: 1,
    path: 'm -257.69921,-24.391283 5.4011,1.995614 4.95479,0.396383 3.56745,1.783726 2.18011,0.396384 2.18011,2.378301 1.78373,1.981917 3.76564,4.558411 1.98192,5.1529859 1.98191,4.162027 1.38735,1.78372586 -2.18011,4.95479404 1.18915,3.3692599 -0.39639,2.1801093 0.59458,2.180109 2.57649,2.576494 0.39639,3.765643 -2.18011,2.378301 -3.36926,0.990959 -0.99096,2.774685 0.19819,2.3783 1.18915,2.774685 -3.96383,2.180109 -0.1982,2.378302 2.5765,3.963834 3.36926,5.747562 0.39638,2.180109 -6.34214,0.792768 h -4.7566 l -1.18915,3.36926 -1.58553,0.99096 -7.72948,3.963834 -5.15299,7.134905 -4.7566,2.576491 -4.75661,5.549371 -12.68426,8.125862 -2.97288,5.549368 -6.93672,5.945753 -2.18011,2.774686 -1.18915,1.585534 -0.59457,2.576491 -1.18914,2.18011 -1.38734,2.3783 -3.76566,4.7566 -2.18011,5.94576 -0.19818,-0.19819 -3.76565,2.97287 -15.65714,6.93671 3.36925,5.54937 -3.17108,3.56745 7.33311,10.30598 4.7566,1.38734 4.36023,6.93671',
    length: 2.4,
    selected: false
  },
])
    function toggleLoop(loop: { selected: boolean }) {
        loop.selected = !loop.selected
    }
</script>

<template>
    <div class="map-container">
        <NuxtImg src="/pistes.png" />

        <svg viewBox="0 0 937.41876 437.35626" class="map-overlay">
        <g
            id="layer1"
            sodipodi:insensitive="true"
            transform="translate(365.78647,70.24688)"
        ></g>
        <g
            id="layer2"
            transform="translate(365.78647,70.24688)"
        >
            <path
                v-for="loop in loops"
                :key="loop.id"
                :d="loop.path"
                :class="{ active: loop.selected }"
                @click="toggleLoop(loop)"
            />
        </g>
        </svg>
    </div>
</template>


<style scoped>
    .map-container {
        position: relative;
        width: 100%;
    }

    .map-image {
        width: 100%;
        display: block;
    }

    .map-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    path {
        fill: none;
        stroke: rgba(0, 0, 255, 0.6);
        stroke-width: 6;
        cursor: pointer;
    }

    path.active {
        stroke: red;
    }
</style>