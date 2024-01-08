<template>
    <div id="library">
        <h1>Library</h1>
        <div class="shelf">
            <span
                class="book"
                @click="openBook(book)"
                v-for="(book, index) in books"
                :key="index"
            >
                <img :src="book.cover" />
                {{ book.title }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { toStartPage } from '../../code/page-state';
import { changeToStory } from '@/code/library';

const books = [
    {
        title: 'Bolt',
        cover: 'cover.jpg'
    },
    {
        title: 'Phonics',
        cover: 'books/phonics/cover.jpg'
    }
];

const openBook = (book) => {
    changeToStory(book.title);
    toStartPage();
}
</script>