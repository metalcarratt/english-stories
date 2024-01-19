<template>
    <LibraryPage v-if="isLibraryPage()" />
    <StartPage v-else-if="isStartPage()"/>
    <DisplayContainer :mode="mode" v-else-if="isStoryPage()" />
</template>

<script setup lang="ts">
import LibraryPage from './pages/library/LibraryPage.vue';
import StartPage from './pages/start/StartPage.vue';
import DisplayContainer from './pages/story/DisplayContainer.vue';
import { isLibraryPage, isStartPage, isStoryPage } from './code/page-state';

const height = window.innerHeight;
const width = window.innerWidth;
const mode = (height > width * 1.33) ? 'max-width' : 'max-height';

</script>

<style lang="scss">
@import './settings/settings.scss';
@import './pages/start/start.scss';
@import './pages/story/story.scss';
@import './pages/library/library.scss';
@import './pages/components/icon.scss';

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
