<template>
  <Sidebar v-model:visible="isNavigationOpen" position="left" class="h-full w-80" dismissable>
    <template #header>
      <IconLogo class="size-20" />
    </template>

    <template #closeicon>
      <IconClose />
    </template>

    <div class="h-full w-full pl-5 pt-5">
      <nav>
        <ul class="flex flex-col items-start">
          <li v-for="link in NAVIGATION_LINKS" :key="link.to" class="flex-1">
            <BaseLinkText :to="link.to" :active="isActiveLink(link.to)" @click="closeNavigation">
              {{ link.text }}
            </BaseLinkText>
          </li>
        </ul>
      </nav>
    </div>
  </Sidebar>
</template>

<script setup lang="ts">
import { NAVIGATION_LINKS } from '~/constants'

const isActiveLink = useActiveLink()

const store = useInteractivityStore()
const { isNavigationOpen } = storeToRefs(store)
const { closeNavigation } = store

const isMobile = useIsMobile()
watch(isMobile, () => {
  if (isMobile.value === false) {
    closeNavigation()
  }
})
</script>

<style scoped></style>
