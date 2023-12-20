<template>
    <div :class="['container', props.mode]">
        <img class="background" :src="background()" />
        <img class="character" :src="character()" />
        <div class="dialog">
            <span class="en"  @click="playEn">{{ dialogEn() }}</span>
            <span class="kr" @click="playKr">{{ dialogKr() }}</span>
            <span class="arrows">
                <span @click="prev">
                    <img src="left.png" v-if="hasPrev()"/>
                </span>
                <span @click="next">
                    <img src="right.png" v-if="hasNext()" />
                </span>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { story } from './story';

const props = defineProps(['mode']);

let index = 0;

const frame = ref({bg: '', ch: '', d: { en: '', kr: '', enAudio: new Audio(), krAudio: new Audio()}});

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

const lastFrame = (prop: string) => {
    for (let i = index; i >= 0; i--) {
        const prevFrame = story[i] as Record<string, unknown>;
        if (prevFrame[prop]) {
            return prevFrame[prop];
        }
    }
}

const update = () => {
    frame.value.bg = (story[index].bg ?? lastFrame('bg') ?? frame.value.bg) as string;
    frame.value.ch = (story[index].ch ?? lastFrame('ch') ?? frame.value.ch) as string;
    frame.value.d = (story[index].d ?? lastFrame('d') ?? frame.value.d);
    console.log(`d: ${JSON.stringify(story)}`);
    playEn();
}

const playEn = () => {
    frame.value.d.enAudio?.play();
}

const playKr = () => {
    frame.value.d.krAudio?.play();
}

update();
</script>

<style scoped>
.container {
    display: flex;
    /* width: 384px; */
    margin: 0 auto;
    justify-content: center;
    /* cursor: pointer; */
    position: relative;
    box-sizing: border-box;
}

.container.max-height {
    height: 100%;
    aspect-ratio: 0.75;
}

.container.max-width {
    width: 100%;
    aspect-ratio: 0.75;
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
  /* pointer-events: auto; */
  user-select: none;
}

.en:hover {
    text-shadow:  #EA9DFF 0 0 5px, #EA9DFF 0 0 15px, #EA9DFF 0 0 25px;
    cursor: pointer;
}

.kr {
  color: #230239;
  text-shadow: #cb04ff 0 0 5px, #fff 0 0 15px;
  font-style: italic;
  text-align: center;
  user-select: none;
}

.kr:hover {
    text-shadow:  #EA9DFF 0 0 5px, #EA9DFF 0 0 15px, #EA9DFF 0 0 25px;
    cursor: pointer;
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

.arrows span img {
    padding: 0;
    text-shadow:  black 0 0 1px
}

.arrows span img:hover {
    cursor: pointer;
    filter: drop-shadow(0 0 5px #1e2129);
}
</style>