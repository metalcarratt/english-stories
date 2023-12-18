const SEA = './stormy-sea.jpg';
const CITY = './seaside-city.jpg';
const DOWNTOWN = './downtown.jpg';
const CLOUDS = './clouds.jpg';

const MONSTER = './sea-monster.png';
const MONSTER_CLOSEUP = './sea-monster-closeup.png';
const MAN = './surprised-man.png';
const WOMAN = './surprised-woman.png';
const BOLT = './bolt.png';
const SWORD = './sword.png';

export type StoryFrame = {
    bg?: string,
    ch?: string,
    d: {
        en: string,
        kr: string
    }
}

export const story = [
    {
        bg: SEA,
        ch: MONSTER,
        d: {
            en: 'Roar!',
            kr: '노호!'
        }
    },
    {
        d: {
            en: 'I am Kraken!',
            kr: '나는 크라켄이다!'
        }
    },
    {
        d: {
            en: 'I am from the sea!',
            kr: '나는 바다에서 왔습니다!'
        }
    },
    {
        d: {
            en: 'I am big and scary!',
            kr: '나는 크고 무섭다!'
        }
    },
    {
        d: {
            en: 'And very hungry!',
            kr: '그리고 매우 배고프다!'
        }
    },
    {
        bg: CITY,
        ch: MONSTER_CLOSEUP,
        d: {
            en: 'What is this?',
            kr: '이게 뭔가요?'
        }
    },
    {
        d: {
            en: 'Is it a city?',
            kr: '도시인가요?'
        }
    },
    {
        d: {
            en: 'Hahahaha!',
            kr: '하하하하!'
        }
    },
    {
        bg: DOWNTOWN,
        ch: MAN,
        d: {
            en: 'What? What is that?',
            kr: '무엇? 저게 뭐에요?'
        }
    },
    {
        ch: WOMAN,
        d: {
            en: `It's a monster!`,
            kr: '괴물이다!'
        }
    },
    {
        ch: WOMAN,
        d: {
            en: `It's so scary!`,
            kr: '너무 무섭다!'
        }
    },
    {
        ch: MAN,
        d: {
            en: 'Quick! Run!',
            kr: '빠른! 달리다!'
        }
    },
    {
        ch: MONSTER_CLOSEUP,
        d: {
            en: 'Haha!',
            kr: 'ㅋ!'
        }
    },
    {
        ch: MONSTER_CLOSEUP,
        d: {
            en: 'These people look yummy!',
            kr: '이 사람들 맛있어 보여요!'
        }
    },
    {
        ch: BOLT,
        d: {
            en: 'Stop!',
            kr: '멈추다!'
        }
    },
    {
        ch: MONSTER_CLOSEUP,
        d: {
            en: 'What?',
            kr: '무엇?'
        }
    },
    {
        d: {
            en: 'Who are you?',
            kr: '누구세요?'
        }
    },
    {
        ch: BOLT,
        d: {
            en: 'I am Bolt!',
            kr: '나는 볼트다!'
        }
    },
    {
        d: {
            en: 'You should go away!',
            kr: '당신은 떠나야합니다!'
        }
    },
    {
        ch: MONSTER_CLOSEUP,
        d: {
            en: 'Hahahaha!',
            kr: '하하하하!'
        }
    },
    {
        d: {
            en: 'You are funny.',
            kr: '당신은 재밌어요.'
        }
    },
    {
        d: {
            en: `But I'm very hungry.`,
            kr: '그런데 배가 너무 고파요.'
        }
    },
    {
        d: {
            en: `So I'm not going away.`,
            kr: '그래서 나는 떠나지 않을 것입니다.'
        }
    },
    {
        ch: BOLT,
        d: {
            en: 'Oh?',
            kr: '오?'
        }
    },
    {
        d: {
            en: `Then I'll make you go away!`,
            kr: '그럼 내가 당신을 쫓아내겠어요!'
        }
    },
    {
        bg: CLOUDS,
        d: {
            en: `Lightning Sword, come!`,
            kr: '번개검이여, 오라!'
        }
    },
    {
        ch: SWORD,
        d: {
            en: `Crackle~!`,
            kr: '크랙~!'
        }
    },
    {
        ch: MONSTER_CLOSEUP,
        d: {
            en: `What is that?`,
            kr: '저게 뭐에요?'
        }
    },
    {
        ch: BOLT,
        d: {
            en: `Lightning Sword, attack!`,
            kr: '번개검, 공격하라!'
        }
    },
    {
        ch: SWORD,
        d: {
            en: `Boom!`,
            kr: '팔!'
        }
    },
    {
        d: {
            en: `Crash!`,
            kr: '충돌!'
        }
    },
    {
        ch: MONSTER_CLOSEUP,
        d: {
            en: `Ahhh~~!`,
            kr: '아아아~~!'
        }
    },
    {
        d: {
            en: `Stop! It hurts!`,
            kr: '멈추다! 아파요!'
        }
    },
]