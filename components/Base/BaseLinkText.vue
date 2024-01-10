<template>
  <NuxtLink :to="to" class="group flex cursor-pointer flex-col items-center p-4">
    <span
      :class="[
        active
          ? 'text-link-active underline'
          : 'group-hover:text-link group-hover:underline group-active:text-link',
        'text-nowrap text-xl underline-offset-8'
      ]"
    >
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
  active: {
    type: Boolean,
    default: false
  }
})
</script>
