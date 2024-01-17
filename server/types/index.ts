export type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export type ProductQuery = {
  skip?: string
  take?: string
  sort?: string
  search?: string
  category?: string
  brand?: string

  price_equals?: string
  price_gt?: string
  price_lt?: string
  price_gte?: string
  price_lte?: string
  stock_equals?: string
  stock_gt?: string
  stock_lt?: string
  stock_gte?: string
  stock_lte?: string
  rating_equals?: string
  rating_gt?: string
  rating_lt?: string
  rating_gte?: string
  rating_lte?: string
  discountPercentage_equals?: string
  discountPercentage_gt?: string
  discountPercentage_lt?: string
  discountPercentage_gte?: string
  discountPercentage_lte?: string
}

export type ProductPropertyGroupable = 'brand' | 'category'
export type ProductGroupedByCount<T extends ProductPropertyGroupable> = Array<
  {
    _count: number
  } & { [Key in T]: string }
>

export type ProductPropertyAggregatable = 'price' | 'stock' | 'rating'
export type ProductAggregatedByMinmax<T extends ProductPropertyAggregatable> = {
  _min: {
    [Key in T]: number
  }
  _max: {
    [Key in T]: number
  }
}
