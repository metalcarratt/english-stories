export enum Effect {
    Flash = 'flash',
    Shake = 'shake'
}

export type Story = {
    config?: {
        letterSize?: string
    }
    frames: StoryFrame[]
};

export type StoryFrame = {
    bg?: string,
    ch?: string,
    d: {
        en: string,
        kr: string,
        enAudio?: HTMLAudioElement,
        krAudio?: HTMLAudioElement
    },
    effect?: Effect,
    bgEffect?: Effect
}