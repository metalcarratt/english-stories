<template>
    <div class="start-page">
        <h1>영어 이야기</h1>
        <p>시작하기 전에 오디오 볼륨을 높여주세요.</p>
        <p>영어문장을 클릭하시면 다시 들으실 수 있습니다.</p>
        <p>한국어 문장을 클릭하시면 해석을 들으실 수 있습니다.</p>
        <button @click="toStoryPage()">시작</button>
    </div>
</template>

<script setup>
import { toStoryPage } from '../../code/page-state';
</script>
