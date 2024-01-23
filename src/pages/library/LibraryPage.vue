<template>
    <div id="library">
        <h1>Library</h1>
        <div class="shelf">
            <div
                class="book"
                @click="openBook(book)"
                v-for="(book, index) in books"
                :key="index"
            >
                <img :src="book.cover" />
                <label>{{ book.title }}</label>
        </div>
        </div>
    </div>
</template>

<script setup>
import { toStoryPage } from '../../code/page-state';
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
    toStoryPage();
}
</script>