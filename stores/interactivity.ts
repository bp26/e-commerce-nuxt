export const useInteractivityStore = defineStore('interactivity', () => {
  const isNavigationOpen = ref(false)
  const closeNavigation = () => {
    isNavigationOpen.value = false
  }
  const openNavigation = () => {
    isNavigationOpen.value = true
  }

  const isSearchOpen = ref(false)
  const closeSearch = () => {
    isSearchOpen.value = false
  }
  const openSearch = () => {
    isSearchOpen.value = true
  }

  const isCartOpen = ref(false)
  const closeCart = () => {
    isCartOpen.value = false
  }
  const openCart = () => {
    isCartOpen.value = true
  }

  return {
    isNavigationOpen,
    isSearchOpen,
    isCartOpen,
    closeNavigation,
    openNavigation,
    closeSearch,
    openSearch,
    openCart,
    closeCart
  }
})
