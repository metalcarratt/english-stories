<template>
    <div class="top">
        <IconBtn icon="fa-gear" @click="modalOpen = true" />
        <IconBtn icon="fa-house" @click="toLibraryPage" />
    </div>
</template>

<script setup>
import IconBtn from '../components/IconBtn.vue';
import { modalOpen } from '../../code/state';
import { toLibraryPage } from '../../code/page-state';
</script>