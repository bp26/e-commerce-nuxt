<template>
  <Sidebar
    position="bottom"
    class="h-full w-full bg-white"
    :visible="visible"
    @update:visible="$emit('update:visible')"
  >
    <template #header><span></span></template>
    <template #closeicon>
      <IconClose />
    </template>
    <slot></slot>
  </Sidebar>
</template>

<script setup lang="ts">
defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})
defineEmits(['update:visible'])
</script>

<style scoped></style>
