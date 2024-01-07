<template>
  <header class="w-full shadow-md">
    <div
      class="m-auto flex h-16 max-w-screen-2xl items-center justify-between gap-2 px-2 py-5 sm:px-10 lg:h-20 2xl:px-0"
    >
      <TheHeaderLogo />

      <div class="w-2/3 lg:w-2/5">
        <TheHeaderSearch />
      </div>

      <TheHeaderNavigation />
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
