import { breakpointsTailwind } from '@vueuse/core'

export default () => {
  return useBreakpoints(breakpointsTailwind).smallerOrEqual('md')
}
