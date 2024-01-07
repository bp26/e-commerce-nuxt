<template>
  <NuxtLink :to="to" class="group flex cursor-pointer flex-col items-center gap-1 p-3">
    <i
      v-if="icon"
      :class="[
        icon ? icon : '',
        active ? 'text-link-active' : 'group-hover:text-link',
        'pi lg:text-xl'
      ]"
    ></i>
    <span :class="[active ? 'text-link-active' : 'group-hover:text-link', 'lg:text-lg']">
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
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>
