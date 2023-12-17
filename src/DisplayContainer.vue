<template>
    <div class="container">
        <img class="background" :src="background()" />
        <img class="character" :src="character()" />
        <div class="dialog">
            <span class="en">{{ dialogEn() }}</span>
            <span class="kr">{{ dialogKr() }}</span>
            <span class="arrows">
                <span @click="prev">
                    {{ hasPrev() ? '🡄' : '' }}
                </span>
                <span @click="next">
                    {{ hasNext() ? '🡆' : '' }}
                </span>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { story } from './story';

let index = 0;

const frame = ref(story[0]);

const background = () => frame.value.bg;
const character = () => frame.value.ch;
const dialogEn = () => frame.value.d.en;
const dialogKr = () => frame.value.d.kr;

const hasNext = () => story.length > index + 1;
const hasPrev = () => index > 0;

const next = () => {
    index++;
    update();
}

const prev = () => {
    index--;
    update();
}

const update = () => {
    frame.value.bg = story[index].bg ?? frame.value.bg;
    frame.value.ch = story[index].ch ?? frame.value.ch;
    frame.value.d = story[index].d;
}
</script>

<style scoped>
.container {
    display: flex;
    width: 384px;
    margin: 0 auto;
    justify-content: center;
    cursor: pointer;
    position: relative;
}

@media only screen and (max-width: 384px) {
    .container {
        width: 100%;
        margin: 0;
    }
}

img.background {
  width: 100%;
}

img.character {
  height: 100%;
  position: absolute;
  bottom: 0;
  filter: drop-shadow(0 0 10px #5c188a);
}

.dialog {
  position: absolute;
  width: calc(100% - 30px);
  /* height: 40%; */
  padding: 8px;
  bottom: 0;
  font-family: "Comic Sans MS";
  font-size: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.dialog span {
    padding: 15px;
}

.en {
  /* margin-bottom: 20px; */
  color: white;
  text-shadow: #C900FF 0 0 5px, #FEF8FF 0 0 15px;
  font-style: italic;
  text-align: center;
}

.en:hover {
    text-shadow:  #EA9DFF 0 0 5px, #EA9DFF 0 0 15px, #EA9DFF 0 0 25px;
}

.kr {
  color: #230239;
  text-shadow: #cb04ff 0 0 5px, #fff 0 0 15px;
  font-style: italic;
  text-align: center;
}

.kr:hover {
    text-shadow:  #EA9DFF 0 0 5px, #EA9DFF 0 0 15px, #EA9DFF 0 0 25px;
}

.arrows {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: #d1d141;
  font-size: 40px;
  padding: 5px;
}

.arrows span {
    padding: 0;
    text-shadow:  black 0 0 1px
}
</style>