<template>
  <BaseDrawerMobile v-model:visible="isSearchOpen">
    <TheHeaderOverlaysSearchBar />
  </BaseDrawerMobile>
</template>

<script setup lang="ts">
const store = useInteractivityStore()
const { isSearchOpen } = storeToRefs(store)
</script>

<style scoped></style>
