<template>
  <OverlayPanel ref="panel">
    <ul class="flex w-40 flex-col gap-3">
      <li>
        <BaseLinkIcon icon="pi-user">Account</BaseLinkIcon>
      </li>
      <li>
        <BaseLinkIcon icon="pi-shopping-bag">Orders</BaseLinkIcon>
      </li>
      <li>
        <BaseLinkIcon icon="pi-heart">Wishlist</BaseLinkIcon>
      </li>
      <li>
        <BaseLinkIcon icon="pi-power-off">Log out</BaseLinkIcon>
      </li>
    </ul>
  </OverlayPanel>
</template>

<script setup lang="ts">
import type OverlayPanel from 'primevue/overlaypanel'

const panel = ref<OverlayPanel>()
defineExpose({ panel })
</script>

<style scoped></style>
