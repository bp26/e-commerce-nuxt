<template>
  <Dialog v-model:visible="isSearchOpen" modal class="h-[500px] w-[700px] bg-white">
    <template #header><span></span></template>
    <template #closeicon>
      <IconClose />
    </template>

    <TheHeaderOverlaysSearchBar />
  </Dialog>
</template>

<script setup lang="ts">
const store = useInteractivityStore()
const { isSearchOpen } = storeToRefs(store)
</script>

<style scoped></style>
