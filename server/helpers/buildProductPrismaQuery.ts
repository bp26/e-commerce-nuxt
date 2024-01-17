import { Prisma } from '@prisma/client'
import { merge } from '../utils/merge'
import { ProductQuery } from '~/server/types'

import {
  PRODUCT_DEFAULT_SKIP,
  PRODUCT_DEFAULT_TAKE,
  PRODUCT_SEARCH_PROPERTIES,
  PRODUCT_INCLUSION_PROPERTIES,
  PRODUCT_SORT_REGEXP,
  PRODUCT_COMPARISON_REGEXP
} from '~/server/constants'

export const buildProductPrismaQuery = (queries: ProductQuery): Prisma.ProductFindManyArgs => {
  if (!queries) {
    return {}
  }

  const take = Number(queries.take) || PRODUCT_DEFAULT_TAKE
  const skip = Number(queries.skip) || PRODUCT_DEFAULT_SKIP

  const search = (
    queries.search
      ? {
          OR: [
            ...PRODUCT_SEARCH_PROPERTIES.map((property) => {
              return {
                [property]: {
                  contains: queries.search,
                  mode: 'insensitive'
                }
              }
            })
          ]
        }
      : {}
  ) satisfies Prisma.ProductWhereInput

  const inclusion = {
    ...(PRODUCT_INCLUSION_PROPERTIES as Array<keyof ProductQuery>).reduce((acc, property) => {
      if (property in queries) {
        return {
          ...acc,
          ...{
            [property]: {
              in: (queries[property] as string).split(',')
            }
          }
        }
      } else {
        return acc
      }
    }, {})
  } satisfies Prisma.ProductWhereInput

  const comparison = Object.entries(queries).reduce((acc, entry) => {
    if (PRODUCT_COMPARISON_REGEXP.test(entry[0])) {
      const [property, operator] = entry[0].split('_')

      return merge(acc, {
        [property]: {
          [operator]: Number(entry[1])
        }
      })
    } else {
      return acc
    }
  }, {}) satisfies Prisma.ProductWhereInput

  const sorting = (
    queries.sort && PRODUCT_SORT_REGEXP.test(queries.sort)
      ? {
          [queries.sort.split('_')[0]]: queries.sort.split('_')[1]
        }
      : {}
  ) satisfies Prisma.ProductOrderByWithRelationAndSearchRelevanceInput

  const prismaQuery = {
    take,
    skip,
    where: {
      ...search,
      ...inclusion,
      ...comparison
    },
    orderBy: {
      ...sorting
    },
    include: {
      comments: true
    }
  } satisfies Prisma.ProductFindManyArgs

  return prismaQuery
}
