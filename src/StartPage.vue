<template>
    <div class="start-page">
        <h1>영어 이야기</h1>
        <p>시작하기 전에 오디오 볼륨을 높여주세요.</p>
        <p>영어문장을 클릭하시면 다시 들으실 수 있습니다.</p>
        <p>한국어 문장을 클릭하시면 들으실 수 있습니다.</p>
        <button @click="start">시작</button>
    </div>
</template>

<script setup>
import { started } from './state';

const start = () => {
    started.value = true;
}
</script>

<style scoped>
.start-page {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
}

.start-page h1 {
    color: white;
    font-family: sans-serif;
}

.start-page p {
    color: #d9d8f4;
    font-size: 20px;
}

button {
    padding: 20px 80px;
    font-size: 20px;
}
</style>