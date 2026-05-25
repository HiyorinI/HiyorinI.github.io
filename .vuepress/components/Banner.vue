<template>
    <div class="banner">
        <div class="banner-header-container">
            <!-- 背景图像 -->
            <div class="bg-img-container">
                <div class="bg-grid" style="-webkit-mask-image: linear-gradient(transparent, black);"></div>
            </div>

            <!-- 标题和描述 -->
            <div class="banner-header">
                <div class="banner-title">{{ home.title }}</div>
                <p class="banner-description" v-html="home.description"></p>

                <!-- 按钮和搜索框 -->
                <div class="button-container">
                    <!-- 快速开始按钮 -->
                    <div class="started-button" @click="quickStart">{{ home.quickStart.text }}</div>

                    <!-- 搜索框 -->
                    <button type="button" class="search-line-edit">
                        <!-- 图标 -->
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon" aria-hidden="true">
                            <path d="m19 19-3.5-3.5"></path>
                            <circle cx="11" cy="11" r="6"></circle>
                        </svg>

                        <span class="search-hint">{{ home.search.text }}.</span>

                        <!-- 快捷键 -->
                        <kbd class="search-hot-key"><abbr title="Control" class="search-key-text">Ctrl </abbr> K</kbd>
                    </button>
                </div>
            </div>
        </div>

        <!-- 例子 -->
        <div class="banner-example-container">
            <!-- 代码块 -->
            <div class="code-card-container">
                <div class="code-card-wrapper">
                    <CodeCard fileUrl="/code/example.cs" />
                </div>
            </div>

            <!-- 例子卡 -->
            <div class="example-card-container">
                <figure class="example-card">
                    <!-- 左侧图像 -->
                    <img class="example-img" src="/img/SBR.jpg" alt="">

                    <!-- 右侧文本 -->
                    <div class="example-content-container">
                        <p class="quote-content">
                            "优秀的 UI 框架应该像空气一样，存在但不会被注意到。用户关注的是功能，而不是你用了什么框架。"
                        </p>

                        <figcaption>
                            <div class="quote-name">
                                HiyorinI
                            </div>

                            <div class="quote-job">
                                Avalonia Fluent UI
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </div>
    </div>
</template>

<script setup>
import { localeConfig } from '../utils/locale';

let home = localeConfig('home');

let quickStart = () => {
    window.open(home.value.quickStart.url, '_blank');
}
</script>

<style>
.banner {
    @apply relative -mt-16;

    .banner-header-container {
        @apply px-4 sm:px-6 md:px-8;

        .bg-img-container {
            @apply absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120];
            background-image: url(/img/home-background-light.jpg);
            background-size: 150rem;

            .bg-grid {
                @apply absolute inset-0 bg-[bottom_1px_center] dark:bg-bottom dark:border-b dark:border-slate-100/5;
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
            }
        }

        .banner-header {
            @apply relative pt-10 pb-10 text-center sm:pt-16 sm:pb-16 md:pt-20 md:pb-20;

            .banner-title {
                @apply text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl;
                color: #1a1a1a;
            }

            .dark .banner-title {
                color: #f5f5f5;
            }

            .banner-description {
                @apply mt-4 text-base sm:text-lg md:text-xl;
                max-width: 48rem;
                margin: 1.5rem auto 0;
                color: #4b5563;
            }

            .dark .banner-description {
                color: #9ca3af;
            }

            .button-container {
                @apply mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6;

                .started-button {
                    @apply px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-lg cursor-pointer;
                    transition: background-color 0.2s;
                }

                .started-button:hover {
                    background-color: #2563eb;
                }

                .search-line-edit {
                    @apply flex items-center gap-3 px-4 py-3 w-full max-w-xs text-base text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer;
                    transition: all 0.2s;
                }

                .dark .search-line-edit {
                    @apply bg-gray-800 border-gray-700 text-gray-400;
                }

                .search-line-edit:hover {
                    @apply border-gray-300;
                }

                .dark .search-line-edit:hover {
                    @apply border-gray-600;
                }

                .search-icon {
                    @apply flex-shrink-0 w-5 h-5;
                }

                .search-hint {
                    @apply flex-grow text-left;
                }

                .search-hot-key {
                    @apply flex-shrink-0 px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded;
                }

                .dark .search-hot-key {
                    @apply bg-gray-700 text-gray-400;
                }

                .search-key-text {
                    @apply no-underline;
                }
            }
        }
    }

    .banner-example-container {
        @apply grid gap-8 px-4 pb-10 sm:px-6 sm:pb-16 md:gap-12 md:px-8 md:pb-20 lg:grid-cols-2;

        .code-card-container {
            @apply relative;

            .code-card-wrapper {
                @apply sticky top-8;
            }
        }

        .example-card-container {
            @apply relative;

            .example-card {
                @apply relative overflow-hidden rounded-2xl bg-white shadow-lg;
                border: 1px solid rgba(0,0,0,0.1);
            }

            .dark .example-card {
                @apply bg-gray-800;
                border: 1px solid rgba(255,255,255,0.1);
            }

            .example-img {
                @apply w-full h-64 object-cover;
            }

            .example-content-container {
                @apply p-6;
            }

            .quote-content {
                @apply text-lg italic text-gray-700;
            }

            .dark .quote-content {
                @apply text-gray-300;
            }

            .quote-name {
                @apply mt-4 font-semibold text-gray-900;
            }

            .dark .quote-name {
                @apply text-white;
            }

            .quote-job {
                @apply text-sm text-gray-500;
            }

            .dark .quote-job {
                @apply text-gray-400;
            }
        }
    }
}
</style>
