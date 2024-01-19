<template>
    <span class="arrows">
        <span @click="prev">
            <IconBtn icon="fa-arrow-left" v-if="hasPrev()" />
        </span>
        <span @click="next">
            <IconBtn icon="fa-arrow-right" v-if="hasNext()" />
        </span>
    </span>
</template>

<script setup>
import IconBtn from '../components/IconBtn.vue';
import {
    hasNext, 
    next, 
    hasPrev, 
    prev, 
} from '../../code/play-story';
</script>