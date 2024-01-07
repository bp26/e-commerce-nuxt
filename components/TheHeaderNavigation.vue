<template>
  <TheHeaderNavigationUpper :links="links" />
  <TheHeaderNavigationBottom :links="links" />
</template>

<script setup lang="ts">
const links = [
  {
    to: '/',
    text: 'Home',
    icon: 'pi-home'
  },
  {
    to: '/about',
    text: 'About',
    icon: 'pi-info-circle'
  },
  {
    to: '/contact',
    text: 'Contact',
    icon: 'pi-id-card'
  },
  {
    to: '/profile',
    text: 'Profile',
    icon: 'pi-user'
  },
  {
    to: '/cart',
    text: 'Cart',
    icon: 'pi-shopping-cart'
  }
]
</script>
