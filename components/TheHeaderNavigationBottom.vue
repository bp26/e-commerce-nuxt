<template>
  <Teleport to="body">
    <aside class="fixed bottom-0 left-0 z-30 min-h-[50px] w-full bg-white shadow-2xl lg:hidden">
      <nav>
        <ul class="flex justify-around">
          <li v-for="link in links" :key="link.to" class="group flex-1">
            <BaseLinkIcon :to="link.to" :active="isActiveLink(link.to)" :icon="link.icon" />
          </li>
        </ul>
      </nav>
    </aside>
  </Teleport>
</template>

<script setup lang="ts">
const isActiveLink = useActiveLink()
defineProps<{
  links: {
    to: string
    icon: string
  }[]
}>()
</script>
