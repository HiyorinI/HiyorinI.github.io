<template>
    <div class="author-comment-card">
        <div class="author-info">
            <div class="author-avatar">
                <img :src="authorAvatar" :alt="author.name" />
            </div>
            <div class="author-details">
                <div class="author-name">{{ author.name }}</div>
                <div class="author-job">{{ author.description }}</div>
            </div>
        </div>
        <div class="author-comment" v-html="author.comment"></div>
    </div>
</template>

<script setup>
import { localeConfig } from '../utils/locale';

let author = localeConfig('home').value.author;
let authorAvatar = '/img/shoko.jpg';
</script>

<style>
.author-comment-card {
    @apply max-w-4xl mx-auto px-4 py-16 sm:px-6 md:px-8 md:py-20;
}

.author-info {
    @apply flex items-center gap-4 mb-6;
}

.author-avatar {
    @apply w-16 h-16 rounded-full overflow-hidden;
}

.author-avatar img {
    @apply w-full h-full object-cover;
}

.author-details {
    @apply flex flex-col;
}

.author-name {
    @apply text-lg font-semibold text-gray-900;
}

.dark .author-name {
    @apply text-white;
}

.author-job {
    @apply text-sm text-gray-500;
}

.dark .author-job {
    @apply text-gray-400;
}

.author-comment {
    @apply text-lg text-gray-700 leading-relaxed;
    border-left: 4px solid #3b82f6;
    padding-left: 1.5rem;
}

.dark .author-comment {
    @apply text-gray-300;
}
</style>
