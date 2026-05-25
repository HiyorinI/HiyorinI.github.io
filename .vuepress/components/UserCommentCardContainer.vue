<template>
    <div class="user-comment-card-container">
        <div class="comment-columns">
            <div class="comment-column">
                <slot name="column-1"></slot>
            </div>
            <div class="comment-column">
                <slot name="column-2"></slot>
            </div>
            <div class="comment-column">
                <slot name="column-3"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
.user-comment-card-container {
    @apply max-w-7xl mx-auto px-4 py-16 sm:px-6 md:px-8 md:py-20;
}

.comment-columns {
    @apply grid gap-6 md:grid-cols-3;
}

.comment-column {
    @apply flex flex-col gap-6;
}
</style>
