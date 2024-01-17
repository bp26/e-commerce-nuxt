import productService from '~/server/service/productService'
import { ProductQuery } from '~/server/types'

export default defineEventHandler((event) => {
  const query = getQuery<ProductQuery>(event)
  const filters = productService.getFilters(query)
  return filters
})
