import { currentFrame, emptyFrame, getIndex, index, nextFrame, prevFrame, story, storyLength } from './story';
import { audioPlaybackSpeed } from './state';
import { ref, Ref } from 'vue';
import { Effect, StoryFrame } from './story-i';

export const characterAnimationClass = ref('');
export const backgroundAnimationClass = ref('');

const frame: Ref<StoryFrame> = ref(emptyFrame);

export const background = () => frame.value.bg;
export const character = () => frame.value.ch;
export const dialogEn = () => frame.value.d.en;
export const dialogKr = () => frame.value.d.kr;

export const hasNext = () => storyLength() > getIndex() + 1;
export const hasPrev = () => getIndex() > 0;

export const next = () => {
    nextFrame();
    update();
}

export const prev = () => {
    prevFrame();
    update();
}

const lastFrame = (prop: string) => {
    for (let i = index.value; i >= 0; i--) {
        const prevFrame = story.value.frames[i] as Record<string, unknown>;
        if (prevFrame[prop]) {
            return prevFrame[prop];
        }
    }
    return '';
}

export const update = () => {
    const _currentFrame = currentFrame();
    frame.value.bg = (_currentFrame.bg ?? lastFrame('bg') ?? frame.value.bg) as string;
    frame.value.ch = (_currentFrame.ch ?? lastFrame('ch') ?? frame.value.ch) as string;
    frame.value.d = (_currentFrame.d ?? lastFrame('d') ?? frame.value.d);
    frame.value.effect = _currentFrame.effect;
    frame.value.bgEffect = _currentFrame.bgEffect;
    playEn();
    
}

export const playEn = () => {
    effect();
    playAudio(frame.value.d.enAudio);
}

export const playKr = () => {
    effect();
    playAudio(frame.value.d.krAudio);
}

const playAudio = (audio?: HTMLAudioElement) => {
    if (audio) {
        audio.playbackRate=audioPlaybackSpeed.value;
        audio?.play();
    }
}

const effect = () => {
    if (frame.value.effect === Effect.Flash) {
        characterAnimationClass.value = 'flash';
    } else if (frame.value.effect === Effect.Shake) {
        characterAnimationClass.value = 'shake';
    }
    setTimeout(() => characterAnimationClass.value = '', 200);

    if (frame.value.bgEffect === Effect.Flash) {
        backgroundAnimationClass.value = 'flash';
    } else if (frame.value.bgEffect === Effect.Shake) {
        backgroundAnimationClass.value = 'shake';
    }
    setTimeout(() => backgroundAnimationClass.value = '', 200);
}