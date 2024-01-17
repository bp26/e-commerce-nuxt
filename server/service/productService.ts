import { buildMinmaxFilter } from '~/server/helpers/buildMinmaxFilter'
import { buildInclusionFilter } from '~/server/helpers/buildInclusionFilter'
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

  async getFilters(queries: ProductQuery) {
    const productPrismaQuery = buildProductPrismaQuery(queries)

    const [categoryGrouping, totalCategoryGrouping] = await Promise.all([
      productRepository.groupProductsByCount('category', productPrismaQuery.where),
      productRepository.groupProductsByCount('category')
    ])

    const [brandGrouping, totalBrandGrouping] = await Promise.all([
      productRepository.groupProductsByCount('brand', productPrismaQuery.where),
      productRepository.groupProductsByCount('brand')
    ])

    const [priceAggregation, totalPriceAggregation] = await Promise.all([
      productRepository.aggregateProductsByMinMax('price', productPrismaQuery.where),
      productRepository.aggregateProductsByMinMax('price')
    ])

    const [ratingAggregation, totalRatingAggregation] = await Promise.all([
      productRepository.aggregateProductsByMinMax('rating', productPrismaQuery.where),
      productRepository.aggregateProductsByMinMax('rating')
    ])

    return {
      category: buildInclusionFilter('category', categoryGrouping, totalCategoryGrouping),
      brand: buildInclusionFilter('brand', brandGrouping, totalBrandGrouping),
      price: buildMinmaxFilter('price', priceAggregation, totalPriceAggregation),
      rating: buildMinmaxFilter('rating', ratingAggregation, totalRatingAggregation)
    }
  }
}

export default new ProductService()
