<template>
    <span class="arrows">
        <span @click="prev">
            <img src="left.png" v-if="hasPrev()"/>
        </span>
        <span @click="next">
            <img src="right.png" v-if="hasNext()" />
        </span>
    </span>
</template>

<script setup>
import {
    hasNext, 
    next, 
    hasPrev, 
    prev, 
} from '../../code/play-story';
</script>