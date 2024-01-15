<template>
  <div class="rounded-2xl shadow-xl">
    <img :src="product.thumbnail" class="h-64 w-full rounded-2xl" />
    <div class="flex flex-col gap-4 p-4">
      <div class="flex items-center justify-between">
        <div class="w-2/3">
          <p
            v-tooltip.top="product.title"
            class="overflow-hidden text-ellipsis text-nowrap text-xl font-semibold"
          >
            {{ product.title }}
          </p>
          <p class="text-nowrap font-extralight">{{ product.category }}</p>
        </div>
        <div>
          <Tag
            :severity="product.stock ? 'success' : 'warning'"
            :value="product.stock ? 'in stock' : 'out of stock'"
            class="text-nowrap"
          />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div>
          <p class="text-xl font-semibold text-primary">
            ${{ Math.trunc(product.price - product.discountPercentage) }}
          </p>
          <p class="font-extralight line-through">${{ product.price }}</p>
        </div>
        <Rating :model-value="product.rating" readonly :cancel="false" />
      </div>

      <div class="flex items-center justify-between">
        <Button class="flex justify-center">Add to cart</Button>
        <BaseIconInteractive class="text-2xl" icon="pi-heart" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types'

defineProps<{
  product: Product
}>()
</script>

<style scoped></style>
