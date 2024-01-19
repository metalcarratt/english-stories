<template>
    <div class="icon-btn">
        <font-awesome-icon :icon="['fa-solid', props.icon]" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['icon']);
</script>