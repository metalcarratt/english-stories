import { story as BoltStory } from '../books/bolt/bolt-story';
import { story as PhonicsStory } from '../books/phonics/phonics-story';
import { setStory } from './story';

export const changeToStory = (story: string) => {
    if (story === 'Bolt') {
        setStory(BoltStory);
    } else if (story === 'Phonics') {
        setStory(PhonicsStory);
    }
}