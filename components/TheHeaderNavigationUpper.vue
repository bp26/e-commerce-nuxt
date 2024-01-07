<template>
  <nav class="hidden lg:block">
    <ul class="flex gap-2 xl:gap-6">
      <li v-for="link in links" :key="link.to" class="flex-1">
        <BaseLink :to="link.to" :active="isActiveLink(link.to)" :icon="link.icon">
          {{ link.text }}
        </BaseLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const isActiveLink = useActiveLink()
defineProps<{
  links: {
    to: string
    text: string
    icon: string
  }[]
}>()
</script>
