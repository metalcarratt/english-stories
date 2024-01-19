<template>
    <div :class="['container', props.mode]">
        <img :class="['background', backgroundAnimationClass]" :src="background()" />
        <img :class="['character', characterAnimationClass]" :src="character()" />
        <TopControls />
        <div :class="['dialog', letterSize()]">
            <span class="text" >
                <span>
                    <font-awesome-icon class="arrow" icon="fa-solid fa-arrow-left" v-show="hasPrev()" @click="prev" />
                </span>
                <span class="en">
                    {{ dialogEn() }}
                    <span class="controls">
                        <font-awesome-icon icon="fa-solid fa-repeat" @click="playEn" />
                        <span class="kr" @click="playKr">한국어</span>
                    </span>
                </span>
                <span>
                    <font-awesome-icon class="arrow" icon="fa-solid fa-arrow-right" v-show="hasNext()" @click="next" />
                </span>
            </span>
            <!-- <span class="kr" @click="playKr">{{ dialogKr() }}</span> -->
        </div>
        <SettingsModal v-if="modalOpen" />
    </div>
</template>

<script setup lang="ts">
import TopControls from './TopControls.vue';
import SettingsModal from '../../settings/SettingsModal.vue';
import { defineProps } from 'vue';
import { modalOpen } from '../../code/state';
import {
    update, 
    playEn, 
    playKr, 
    dialogEn, 
    // dialogKr, 
    background, 
    character, 
    backgroundAnimationClass, 
    characterAnimationClass,
    hasNext, 
    next, 
    hasPrev, 
    prev, 
} from '../../code/play-story';

import { letterSize } from '../../code/story';

const props = defineProps(['mode']);

update();
</script>
