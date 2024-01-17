import { ProductPropertyGroupable, ProductGroupedByCount } from '~/server/types'

export const buildInclusionFilter = <T extends ProductPropertyGroupable>(
  property: T,
  data: ProductGroupedByCount<T>,
  totalData: ProductGroupedByCount<T>
) => {
  return totalData.reduce<Array<{ name: string; count: number }>>((acc, item) => {
    const filteredItem = data.find((filterItem) => item[property] === filterItem[property])

    if (filteredItem) {
      return [
        ...acc,
        {
          name: item[property],
          count: filteredItem._count
        }
      ]
    } else {
      return [
        ...acc,
        {
          name: item[property],
          count: 0
        }
      ]
    }
  }, [])
}
