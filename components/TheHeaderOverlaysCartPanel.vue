<template>
  <OverlayPanel ref="panel"><div>cart</div></OverlayPanel>
</template>

<script setup lang="ts">
import type OverlayPanel from 'primevue/overlaypanel'

const panel = ref<OverlayPanel>()
defineExpose({ panel })
</script>

<style scoped></style>
