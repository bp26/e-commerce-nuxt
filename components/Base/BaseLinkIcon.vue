<template>
  <NuxtLink :to="to" class="group block w-full cursor-pointer py-3 text-center sm:py-4">
    <i
      v-if="icon"
      :class="[
        icon ? icon : '',
        active ? 'text-link-active' : ' group-hover:text-link group-active:animate-bounce',
        'pi m-auto text-2xl sm:text-3xl'
      ]"
      s
    ></i>
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
