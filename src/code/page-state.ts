import { ref, Ref } from 'vue';

const LIBRARY = 'library';
const START = 'start';
const STORY = 'story';

const pageState: Ref<string> = ref(LIBRARY);

export const isLibraryPage = () => pageState.value === LIBRARY;
export const isStartPage = () => pageState.value === START;
export const isStoryPage = () => pageState.value === STORY;

export const toStartPage = () => pageState.value = START;
export const toStoryPage = () => pageState.value = STORY;
export const toLibraryPage = () => pageState.value = LIBRARY;