export const PRODUCT_DEFAULT_SKIP = 0
export const PRODUCT_DEFAULT_TAKE = 20
export const PRODUCT_INCLUSION_PROPERTIES = ['category', 'brand']
export const PRODUCT_SEARCH_PROPERTIES = ['title', 'description', 'brand', 'category']
export const PRODUCT_AGGREGATE_PROPERTIES = ['price', 'rating', 'stock']
export const PRODUCT_SORT_REGEXP = /^(rating|price|discountPercentage|title)_(asc|desc)$/
export const PRODUCT_COMPARISON_REGEXP =
  /^(price|stock|rating|discountPercentage)_(gte|lte|gt|lt|equals)$/
