<template>
  <i :class="[icon, 'pi cursor-pointer group-hover:text-link group-active:text-link']"></i>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: ''
  }
})
</script>
