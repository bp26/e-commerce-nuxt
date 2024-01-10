<template>
  <nav class="hidden md:block">
    <ul class="flex gap-2 xl:gap-6">
      <li v-for="link in NAVIGATION_LINKS" :key="link.to" class="flex-1">
        <BaseLinkText :to="link.to" :active="isActiveLink(link.to)">
          {{ link.text }}
        </BaseLinkText>
      </li>
    </ul>
  </nav>

  <TheHeaderNavigationDrawer />
</template>

<script setup lang="ts">
import { NAVIGATION_LINKS } from '~/constants'
const isActiveLink = useActiveLink()
</script>

<style scoped></style>
