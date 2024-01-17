import { buildProductPrismaQuery } from '~/server/helpers/buildProductPrismaQuery'
import productRepository from '~/server/db/repositories/productRepository'
import { ProductQuery } from '~/server/types'

class ProductService {
  async getProducts(queries: ProductQuery) {
    const productPrismaQuery = buildProductPrismaQuery(queries)
    const products = await productRepository.getProducts(productPrismaQuery)
    const count = await productRepository.getProductsCount(productPrismaQuery.where)

    return { products, count }
  }
}

export default new ProductService()
