import { Story, StoryFrame } from './story-i';
import { ref, Ref } from 'vue';

export const story: Ref<Story> = ref({frames: []});
export const index = ref(0);

export const emptyFrame: StoryFrame = {
    bg: '',
    ch: '',
    d: {
        en: '',
        kr: '',
        enAudio: new Audio(),
        krAudio: new Audio()
    }
}

export const setStory = (_story: Story) => {
    story.value = _story;
    index.value = 0;
}

export const storyLength = () => story.value.frames.length;

export const nextFrame = () => index.value++;

export const prevFrame = () => index.value--;

export const getIndex = () => index.value;

export const currentFrame = () => story.value.frames[index.value];

export const letterSize = () => story.value.config?.letterSize;