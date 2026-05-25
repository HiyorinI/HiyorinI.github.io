<template>
    <div class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h4>Avalonia Fluent UI</h4>
                <p>基于 Avalonia 的 Fluent Design 风格组件库</p>
            </div>
            <div class="footer-section">
                <h4>链接</h4>
                <ul>
                    <li><a href="/zh/pages/about">简介</a></li>
                    <li><a href="/zh/pages/install">安装</a></li>
                    <li><a href="/zh/pages/components">组件</a></li>
                    <li><a href="https://github.com/HiyorinI/AvaloniaFluentUi">GitHub</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>社区</h4>
                <ul>
                    <li><a href="https://github.com/HiyorinI/AvaloniaFluentUi/issues">问题反馈</a></li>
                    <li><a href="https://github.com/HiyorinI/AvaloniaFluentUi/discussions">讨论区</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; {{ startYear }}-{{ currentYear }} HiyorinI. MIT License</p>
        </div>
    </div>
</template>

<script setup>
const startYear = 2024;
const currentYear = new Date().getFullYear();
</script>

<style>
.footer {
    @apply bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800;
}

.footer-content {
    @apply max-w-7xl mx-auto px-4 py-12 sm:px-6 md:px-8;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
}

.footer-section h4 {
    @apply text-lg font-semibold text-gray-900 dark:text-white mb-4;
}

.footer-section p {
    @apply text-gray-600 dark:text-gray-400;
}

.footer-section ul {
    @apply space-y-2;
}

.footer-section ul li a {
    @apply text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400;
}

.footer-bottom {
    @apply border-t border-gray-200 dark:border-gray-800 px-4 py-6 text-center;
}

.footer-bottom p {
    @apply text-gray-500 dark:text-gray-500 text-sm;
}
</style>
