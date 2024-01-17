import { ProductAggregatedByMinmax, ProductPropertyAggregatable } from '~/server/types/index'

export const buildMinmaxFilter = <T extends ProductPropertyAggregatable>(
  property: T,
  data: ProductAggregatedByMinmax<T>,
  totalData: ProductAggregatedByMinmax<T>
) => {
  return {
    filtered: {
      min: data._min[property],
      max: data._max[property]
    },
    total: {
      min: totalData._min[property],
      max: totalData._max[property]
    }
  }
}
