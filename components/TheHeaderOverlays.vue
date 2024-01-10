<template>
  <ul class="flex justify-around">
    <li class="group flex-1">
      <BaseIconInteractive icon="pi-search" class="p-4 text-2xl" @click="openSearch" />
      <TheHeaderOverlaysSearchModal v-if="!isMobile" />
      <TheHeaderOverlaysSearchDrawer v-else />
    </li>
    <li class="group flex-1">
      <BaseIconInteractive icon="pi-shopping-cart" class="p-4 text-2xl" @click="toggleCart" />
      <TheHeaderOverlaysCartDrawer v-if="isMobile" />
      <TheHeaderOverlaysCartPanel v-else ref="cart" @hide="closeCart" />
    </li>
    <li class="group flex-1">
      <BaseIconInteractive icon="pi-user" class="p-4 text-2xl" @click="toggleUser" />
      <TheHeaderOverlaysUserPanel ref="user" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import TheHeaderOverlaysUserPanel from './TheHeaderOverlaysUserPanel.vue'
import TheHeaderOverlaysCartPanel from './TheHeaderOverlaysCartPanel.vue'

const { openSearch, openCart, closeCart } = useInteractivityStore()

const isMobile = useIsMobile()

const user = ref<InstanceType<typeof TheHeaderOverlaysUserPanel>>()
const toggleUser = (event: Event) => {
  user.value?.panel?.toggle(event)
}

const cart = ref<InstanceType<typeof TheHeaderOverlaysCartPanel>>()
const toggleCart = (event: Event) => {
  cart.value?.panel?.toggle(event)
  openCart()
}
</script>

<style scoped></style>
