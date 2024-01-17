import productService from '~/server/service/productService'
import { ProductQuery } from '~/server/types'

export default defineEventHandler(async (event) => {
  const query = getQuery<ProductQuery>(event)
  const data = await productService.getProducts(query)
  return data
})
