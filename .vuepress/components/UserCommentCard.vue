<template>
    <div class="user-comment-card">
        <div class="user-header">
            <div class="user-avatar">
                <img :src="avatar" :alt="name" />
            </div>
            <div class="user-info">
                <div class="user-name">{{ name }}</div>
                <div class="user-job">{{ job }}</div>
            </div>
        </div>
        <div class="user-comment">{{ comment }}</div>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    avatar: String,
    job: String,
    comment: String,
});
</script>

<style>
.user-comment-card {
    @apply p-6 rounded-2xl bg-white shadow-md;
    border: 1px solid rgba(0,0,0,0.05);
    transition: all 0.3s ease;
}

.dark .user-comment-card {
    @apply bg-gray-800;
    border: 1px solid rgba(255,255,255,0.05);
}

.user-comment-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.user-header {
    @apply flex items-center gap-3 mb-4;
}

.user-avatar {
    @apply w-12 h-12 rounded-full overflow-hidden;
}

.user-avatar img {
    @apply w-full h-full object-cover;
}

.user-info {
    @apply flex flex-col;
}

.user-name {
    @apply font-semibold text-gray-900;
}

.dark .user-name {
    @apply text-white;
}

.user-job {
    @apply text-sm text-gray-500;
}

.dark .user-job {
    @apply text-gray-400;
}

.user-comment {
    @apply text-gray-700 leading-relaxed;
}

.dark .user-comment {
    @apply text-gray-300;
}
</style>
