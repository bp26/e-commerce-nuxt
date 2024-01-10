<template>
  <header class="w-full border-b-2 border-primary">
    <div
      class="m-auto flex h-16 max-w-screen-2xl items-center justify-between gap-2 px-5 sm:px-10 md:h-20 2xl:px-0"
    >
      <IconBurger class="md:!hidden" @click="openNavigation" />

      <TheHeaderLogo />

      <TheHeaderNavigation />

      <TheHeaderOverlays />
    </div>
  </header>
</template>

<script setup lang="ts">
const { openNavigation } = useInteractivityStore()
</script>

<style scoped></style>
