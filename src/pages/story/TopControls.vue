<template>
    <div class="top">
        <img src="settings.png" @click="modalOpen = true"/>
        <span @click="toLibraryPage" class="icon">H</span>
    </div>
</template>

<script setup>
import { modalOpen } from '../../code/state';
import { toLibraryPage } from '../../code/page-state';
</script>