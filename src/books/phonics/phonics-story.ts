import { Story } from "../../code/story-i";

export const story: Story = {

config: {
    letterSize: 'big'
},
frames: [
    {
        bg: './books/phonics/Aa.jpg',
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
    },
    {
        bg: './books/phonics/Bb.jpg',
        d: {
            en: 'B',
            kr: 'b',
            enAudio: new Audio( require('@/assets/books/phonics/006.mp3') ),
            krAudio: new Audio( require('@/assets/books/phonics/006.mp3') )
        }
    },
    {
        bg: './books/phonics/bear.jpg',
        d: {
            en: 'big bear',
            kr: '큰 곰',
            enAudio: new Audio( require('@/assets/books/phonics/007e.mp3') ),
            krAudio: new Audio( require('@/assets/books/phonics/007k.mp3') )
        }
    },
    {
        bg: './books/phonics/bus.jpg',
        d: {
            en: 'busy bus',
            kr: '바쁜 버스',
            enAudio: new Audio( require('@/assets/books/phonics/008e.mp3') ),
            krAudio: new Audio( require('@/assets/books/phonics/008k.mp3') )
        }
    },
    {
        bg: './books/phonics/bat.jpg',
        d: {
            en: 'bouncing bat',
            kr: '통통 튀는 박쥐',
            enAudio: new Audio( require('@/assets/books/phonics/009e.mp3') ),
            krAudio: new Audio( require('@/assets/books/phonics/009k.mp3') )
        }
    },
    {
        bg: './books/phonics/bricks.jpg',
        d: {
            en: 'blue and brown bricks',
            kr: '파란색과 갈색 벽돌',
            enAudio: new Audio( require('@/assets/books/phonics/010e.mp3') ),
            krAudio: new Audio( require('@/assets/books/phonics/010k.mp3') )
        }
    }
]};