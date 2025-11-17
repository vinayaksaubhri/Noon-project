import { mockBanners, mockProducts } from '@/data/mock'
import { Banner } from '@/types/banner'
import { Product } from '@/types/product'

// Mock delay function to simulate network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// API Functions
export const fetchBanners = async (): Promise<Banner[]> => {
  await delay(Math.random() * 500 + 500) // 500-1000ms delay
  
  return mockBanners.filter(banner => banner.isActive)
    .sort((a, b) => a.priority - b.priority)
}

export const fetchProducts = async (params?: {
  category?: string
  limit?: number
  offset?: number
  search?: string
}): Promise<{ products: Product[], total: number }> => {
  await delay(Math.random() * 500 + 700) // 700-1200ms delay
  
  let filteredProducts = [...mockProducts]
  
  // Filter by category
  if (params?.category) {
    filteredProducts = filteredProducts.filter(
      product => product.category.toLowerCase() === params.category?.toLowerCase()
    )
  }
  
  // Filter by search term
  if (params?.search) {
    const searchTerm = params.search.toLowerCase()
    filteredProducts = filteredProducts.filter(
      product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm)
    )
  }
  
  const total = filteredProducts.length
  const offset = params?.offset || 0
  const limit = params?.limit || 10
  
  const products = filteredProducts.slice(offset, offset + limit)
  
  return { products, total }
}

export const fetchProductById = async (id: string): Promise<Product> => {
  await delay(Math.random() * 300 + 200) // 200-500ms delay
  
  
  const product = mockProducts.find(p => p.id === id)
  
  if (!product) {
    throw new Error('Product not found')
  }
  
  return product
}

export const fetchFeaturedProducts = async (): Promise<Product[]> => {
  await delay(Math.random() * 400 + 600) // 600-1000ms delay
  
  return mockProducts
    .filter(product => product.isBestSeller || product.isNew)
    .slice(0, 8)
}

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  await delay(Math.random() * 400 + 600) // 600-1000ms delay
  
  return mockProducts
    .filter(product => product.category.toLowerCase() === category.toLowerCase())
    .slice(0, 10)
}