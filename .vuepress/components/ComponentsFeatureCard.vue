<template>
    <div class="feature-card">
        <div class="feature-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L4 14L24 24L44 14L24 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 34L24 44L44 34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 24L24 34L44 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <h3 class="feature-title">{{ components.title }}</h3>
        <p class="feature-subtitle">{{ components.subTitle }}</p>
        <p class="feature-description">{{ components.description }}</p>
        <a :href="components.url" class="feature-link">{{ home.learnMore }} →</a>
    </div>
</template>

<script setup>
import { localeConfig } from '../utils/locale';

let components = localeConfig('home').value.features.components;
let home = localeConfig('home').value;
</script>

<style>
.feature-card {
    @apply p-8 rounded-2xl bg-white shadow-lg;
    border: 1px solid rgba(0,0,0,0.05);
    transition: all 0.3s ease;
}

.dark .feature-card {
    @apply bg-gray-800;
    border: 1px solid rgba(255,255,255,0.05);
}

.feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}

.feature-icon {
    @apply w-12 h-12 mb-6 text-blue-600;
}

.dark .feature-icon {
    @apply text-blue-400;
}

.feature-title {
    @apply text-2xl font-bold text-gray-900 mb-2;
}

.dark .feature-title {
    @apply text-white;
}

.feature-subtitle {
    @apply text-sm font-semibold text-blue-600 mb-3;
}

.dark .feature-subtitle {
    @apply text-blue-400;
}

.feature-description {
    @apply text-gray-600 leading-relaxed mb-4;
}

.dark .feature-description {
    @apply text-gray-300;
}

.feature-link {
    @apply inline-block text-blue-600 font-medium hover:underline;
}

.dark .feature-link {
    @apply text-blue-400;
}
</style>
