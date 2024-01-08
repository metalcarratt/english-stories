import { Effect, Story } from "@/code/story-i";

const SEA = './books/bolt/stormy-sea.jpg';
const CITY = './books/bolt/seaside-city.jpg';
const DOWNTOWN = './books/bolt/downtown.jpg';
const CLOUDS = './books/bolt/clouds.jpg';

const MONSTER = './books/bolt/sea-monster.png';
const MONSTER_CLOSEUP = './books/bolt/sea-monster-closeup.png';
const MAN = './books/bolt/surprised-man.png';
const WOMAN = './books/bolt/surprised-woman.png';
const BOLT = './books/bolt/bolt.png';
const SWORD = './books/bolt/sword.png';


export const story: Story = { frames: [
    {
        bg: SEA,
        ch: MONSTER,
        d: {
            en: 'Roar!',
            kr: '노호!',
            enAudio: new Audio( require('@/assets/books/bolt/001.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/001k.mp3') )
        },
        effect: Effect.Shake
    },
    {
        d: {
            en: 'I am Kraken!',
            kr: '나는 크라켄이다!',
            enAudio: new Audio( require('@/assets/books/bolt/002.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/002k.mp3') )
        }
    },
    {
        d: {
            en: 'I am from the sea!',
            kr: '나는 바다에서 왔습니다!',
            enAudio: new Audio( require('@/assets/books/bolt/003.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/003k.mp3') )
        }
    },
    {
        d: {
            en: 'I am big and scary!',
            kr: '나는 크고 무섭다!',
            enAudio: new Audio( require('@/assets/books/bolt/004.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/004k.mp3') )
        }
    },
    {
        d: {
            en: 'And very hungry!',
            kr: '그리고 매우 배고프다!',
            enAudio: new Audio( require('@/assets/books/bolt/005.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/005k.mp3') )
        }
    },
    {
        bg: CITY,
        ch: MONSTER_CLOSEUP,
        d: {
            en: 'What is this?',
            kr: '이게 뭔가요?',
            enAudio: new Audio( require('@/assets/books/bolt/006.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/006k.mp3') )
        }
    },
    {
        d: {
            en: 'Is it a city?',
            kr: '도시인가요?',
            enAudio: new Audio( require('@/assets/books/bolt/007.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/007k.mp3') )
        }
    },
    {
        d: {
            en: 'Hahahaha!',
            kr: '하하하하!',
            enAudio: new Audio( require('@/assets/books/bolt/008.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/008k.mp3') )
        },
        effect: Effect.Shake
    },
    {
        bg: DOWNTOWN,
        ch: MAN,
        d: {
            en: 'What? What is that?',
            kr: '무엇? 저게 뭐에요?',
            enAudio: new Audio( require('@/assets/books/bolt/009.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/009k.mp3') )
        },
        effect: Effect.Shake
    },
    {
        ch: WOMAN,
        d: {
            en: `It's a monster!`,
            kr: '괴물이다!',
            enAudio: new Audio( require('@/assets/books/bolt/010.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/010k.mp3') )
        },
        effect: Effect.Shake
    },
    {
        ch: WOMAN,
        d: {
            en: `It's so scary!`,
            kr: '너무 무섭다!',
            enAudio: new Audio( require('@/assets/books/bolt/011.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/011k.mp3') )
        }
    },
    {
        ch: MAN,
        d: {
            en: 'Quick! Run!',
            kr: '빠른! 달리다!',
            enAudio: new Audio( require('@/assets/books/bolt/012.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/012k.mp3') )
        }
    },
    {
        ch: MONSTER_CLOSEUP,
        d: {
            en: 'Haha!',
            kr: 'ㅋ!',
            enAudio: new Audio( require('@/assets/books/bolt/013.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/013k.mp3') )
        },
        effect: Effect.Shake
    },
    {
        ch: MONSTER_CLOSEUP,
        d: {
            en: 'These people look yummy!',
            kr: '이 사람들 맛있어 보여요!',
            enAudio: new Audio( require('@/assets/books/bolt/014.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/014k.mp3') )
        }
    },
    {
        ch: BOLT,
        d: {
            en: 'Stop!',
            kr: '멈추다!',
            enAudio: new Audio( require('@/assets/books/bolt/015.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/015k.mp3') )
        }
    },
    {
        ch: MONSTER_CLOSEUP,
        d: {
            en: 'What?',
            kr: '무엇?',
            enAudio: new Audio( require('@/assets/books/bolt/016.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/016k.mp3') )
        }
    },
    {
        d: {
            en: 'Who are you?',
            kr: '누구세요?',
            enAudio: new Audio( require('@/assets/books/bolt/017.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/017k.mp3') )
        }
    },
    {
        ch: BOLT,
        d: {
            en: 'I am Bolt!',
            kr: '나는 볼트다!',
            enAudio: new Audio( require('@/assets/books/bolt/018.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/018k.mp3') )
        }
    },
    {
        d: {
            en: 'You should go away!',
            kr: '당신은 떠나야합니다!',
            enAudio: new Audio( require('@/assets/books/bolt/019.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/019k.mp3') )
        }
    },
    {
        ch: MONSTER_CLOSEUP,
        d: {
            en: 'Hahahaha!',
            kr: '하하하하!',
            enAudio: new Audio( require('@/assets/books/bolt/020.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/020k.mp3') )
        },
        effect: Effect.Shake
    },
    {
        d: {
            en: 'You are funny.',
            kr: '당신은 재밌어요.',
            enAudio: new Audio( require('@/assets/books/bolt/021.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/021k.mp3') )
        }
    },
    {
        d: {
            en: `But I'm very hungry.`,
            kr: '그런데 배가 너무 고파요.',
            enAudio: new Audio( require('@/assets/books/bolt/022.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/022k.mp3') )
        }
    },
    {
        d: {
            en: `So I'm not going away.`,
            kr: '그래서 나는 떠나지 않을 것입니다.',
            enAudio: new Audio( require('@/assets/books/bolt/023.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/023k.mp3') )
        }
    },
    {
        ch: BOLT,
        d: {
            en: 'Oh?',
            kr: '오?',
            enAudio: new Audio( require('@/assets/books/bolt/024.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/024k.mp3') )
        }
    },
    {
        d: {
            en: `Then I'll make you go away!`,
            kr: '그럼 내가 당신을 쫓아내겠어요!',
            enAudio: new Audio( require('@/assets/books/bolt/025.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/025k.mp3') )
        }
    },
    {
        bg: CLOUDS,
        d: {
            en: `Lightning Sword, come!`,
            kr: '번개검이여, 오라!',
            enAudio: new Audio( require('@/assets/books/bolt/026.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/026k.mp3') )
        }
    },
    {
        ch: SWORD,
        d: {
            en: `Crackle~!`,
            kr: '크랙~!',
            enAudio: new Audio( require('@/assets/books/bolt/027.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/027k.mp3') )
        },
        bgEffect: Effect.Flash
    },
    {
        ch: MONSTER_CLOSEUP,
        d: {
            en: `What is that?`,
            kr: '저게 뭐에요?',
            enAudio: new Audio( require('@/assets/books/bolt/028.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/028k.mp3') )
        }
    },
    {
        ch: BOLT,
        d: {
            en: `Lightning Sword, attack!`,
            kr: '번개검, 공격하라!',
            enAudio: new Audio( require('@/assets/books/bolt/029.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/029k.mp3') )
        }
    },
    {
        ch: SWORD,
        d: {
            en: `Boom!`,
            kr: '팔!',
            enAudio: new Audio( require('@/assets/books/bolt/030.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/030k.mp3') )
        },
        effect: Effect.Shake,
        bgEffect: Effect.Flash
    },
    {
        d: {
            en: `Crash!`,
            kr: '충돌!',
            enAudio: new Audio( require('@/assets/books/bolt/031.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/031k.mp3') )
        },
        effect: Effect.Shake,
        bgEffect: Effect.Flash
    },
    {
        ch: MONSTER_CLOSEUP,
        d: {
            en: `Ahhh~~!`,
            kr: '아아아~~!',
            enAudio: new Audio( require('@/assets/books/bolt/032.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/032k.mp3') )
        },
        effect: Effect.Flash
    },
    {
        d: {
            en: `Stop! It hurts!`,
            kr: '멈추다! 아파요!',
            enAudio: new Audio( require('@/assets/books/bolt/033.mp3') ),
            krAudio: new Audio( require('@/assets/books/bolt/033k.mp3') )
        },
        effect: Effect.Shake
    },
]}