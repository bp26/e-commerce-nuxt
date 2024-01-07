export default () => {
  const route = useRoute()

  const isActiveLink = (path: string) => {
    return route.path === path
  }

  return isActiveLink
}
