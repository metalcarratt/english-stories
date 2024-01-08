<template>
    <div :class="['container', props.mode]">
        <img :class="['background', backgroundAnimationClass]" :src="background()" />
        <img :class="['character', characterAnimationClass]" :src="character()" />
        <TopControls />
        <div :class="['dialog', letterSize()]">
            <span class="en"  @click="playEn">{{ dialogEn() }}</span>
            <span class="kr" @click="playKr">{{ dialogKr() }}</span>
            <NavigationArrows />
        </div>
        <SettingsModal v-if="modalOpen" />
    </div>
</template>

<script setup lang="ts">
import TopControls from './TopControls.vue';
import NavigationArrows from './NavigationArrows.vue';
import SettingsModal from '../../settings/SettingsModal.vue';
import { defineProps } from 'vue';
import { modalOpen } from '../../code/state';
import {
    update, 
    playEn, 
    playKr, 
    dialogEn, 
    dialogKr, 
    background, 
    character, 
    backgroundAnimationClass, 
    characterAnimationClass
} from '../../code/play-story';
import { letterSize } from '../../code/story';

const props = defineProps(['mode']);

update();
</script>
