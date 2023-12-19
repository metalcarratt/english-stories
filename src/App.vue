<template>
    <StartPage v-if="!started"/>
    <DisplayContainer :mode="mode" v-else />
</template>

<script setup lang="ts">
import StartPage from './StartPage.vue';
import DisplayContainer from './DisplayContainer.vue';
import { started } from './state';

const height = window.innerHeight;
const width = window.innerWidth;
const mode = (height > width * 1.33) ? 'max-width' : 'max-height';

</script>

<style>
html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    background-color: #26265c;
}
</style>
