import { Story } from "../../code/story-i";

const AA = './books/phonics/Aa.jpg'

export const story: Story = {
    
config: {
    letterSize: 'big'
},
frames: [
    {
        bg: AA,
        d: {
            en: 'A',
            kr: 'a',
            enAudio: new Audio( require('@/assets/books/phonics/001.mp3') ),
            krAudio: new Audio( require('@/assets/books/phonics/001.mp3') )
        }
    },
    {
        bg: './books/phonics/ant.jpg',
        d: {
            en: 'ant artist',
            kr: '개미 예술가',
            enAudio: new Audio( require('@/assets/books/phonics/002e.mp3') ),
            krAudio: new Audio( require('@/assets/books/phonics/002k.mp3') )
        }
    },
    {
        bg: './books/phonics/ape.jpg',
        d: {
            en: 'army ape',
            kr: '육군 원숭이',
            enAudio: new Audio( require('@/assets/books/phonics/003e.mp3') ),
            krAudio: new Audio( require('@/assets/books/phonics/003k.mp3') )
        }
    },
    {
        bg: './books/phonics/archer.jpg',
        d: {
            en: 'aiming archer',
            kr: '조준 궁수',
            enAudio: new Audio( require('@/assets/books/phonics/004e.mp3') ),
            krAudio: new Audio( require('@/assets/books/phonics/004k.mp3') )
        }
    },
    {
        bg: './books/phonics/axe.jpg',
        d: {
            en: 'angry axe',
            kr: '화난 도끼',
            enAudio: new Audio( require('@/assets/books/phonics/005e.mp3') ),
            krAudio: new Audio( require('@/assets/books/phonics/005k.mp3') )
        }
    }
]};