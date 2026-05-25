<template>
    <div class="code-card">
        <div class="code-card-header">
            <div class="code-card-title">示例代码</div>
        </div>
        <div class="code-card-body">
            <pre><code v-html="codeContent"></code></pre>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    fileUrl: String
});

const codeContent = ref('');

onMounted(async () => {
    if (props.fileUrl) {
        try {
            const response = await fetch(props.fileUrl);
            const text = await response.text();
            codeContent.value = text;
        } catch (error) {
            codeContent.value = '// 示例代码加载失败';
        }
    }
});
</script>

<style>
.code-card {
    @apply rounded-xl overflow-hidden bg-white shadow-lg;
    border: 1px solid rgba(0,0,0,0.1);
}

.dark .code-card {
    @apply bg-gray-800;
    border: 1px solid rgba(255,255,255,0.1);
}

.code-card-header {
    @apply px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700;
}

.code-card-title {
    @apply text-sm font-medium text-gray-700 dark:text-gray-300;
}

.code-card-body {
    @apply p-4 overflow-x-auto;
}

.code-card-body pre {
    @apply m-0 p-0 bg-transparent;
}

.code-card-body code {
    @apply font-mono text-sm text-gray-800 dark:text-gray-200;
    line-height: 1.6;
}
</style>
