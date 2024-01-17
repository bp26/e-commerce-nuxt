import { Prisma } from '@prisma/client'
import prisma from '~/server/db/prisma/prisma'
import {
  Product,
  ProductPropertyGroupable,
  ProductPropertyAggregatable,
  ProductAggregatedByMinmax
} from '~/server/types'

class ProductRepository {
  async getProducts(query: Prisma.ProductFindManyArgs) {
    return await prisma.product.findMany(query)
  }

  async getProductsCount(where?: Prisma.ProductWhereInput) {
    return await prisma.product.count({ ...(where ? { where } : {}) })
  }

  async groupProductsByCount(by: ProductPropertyGroupable, where?: Prisma.ProductWhereInput) {
    return await prisma.product.groupBy({
      by,
      ...(where ? { where } : {}),
      _count: true
    })
  }

  async aggregateProductsByMinMax(
    property: ProductPropertyAggregatable,
    where?: Prisma.ProductWhereInput
  ) {
    return (await prisma.product.aggregate({
      _min: {
        [property]: true
      },
      _max: {
        [property]: true
      },
      ...(where ? { where } : {})
    })) as unknown as ProductAggregatedByMinmax<ProductPropertyAggregatable>
  }

  async addProducts(products: Product[]) {
    await prisma.product.createMany({
      data: products
    })
  }
}

export default new ProductRepository()
