<template>
  <BaseDrawerMobile v-model:visible="isCartOpen"></BaseDrawerMobile>
</template>

<script setup lang="ts">
const store = useInteractivityStore()
const { isCartOpen } = storeToRefs(store)
</script>

<style scoped></style>
