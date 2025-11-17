export type Product = {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  thumbnail: string
  images: string[]
  tags: string[]
  rating: number
  reviewCount: number
  category: string
  brand: string
  inStock: boolean
  stockCount?: number
  isNew?: boolean
  isBestSeller?: boolean
  hasFreeDelivery?: boolean
  deliveryTime?: string
  seller?: string
}
