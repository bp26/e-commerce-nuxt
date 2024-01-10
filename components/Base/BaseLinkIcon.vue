<template>
  <NuxtLink :to="to" class="group flex cursor-pointer items-center gap-5">
    <BaseIconInteractive :icon="icon" class="text-2xl" />
    <span class="text-xl group-hover:text-link group-active:text-link">
      <slot></slot>
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>
