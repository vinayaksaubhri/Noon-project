import { Banner } from '@/types/banner'
import { Product } from '@/types/product'

// Mock delay function to simulate network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Mock error simulation

// Mock banner data
const mockBanners: Banner[] = [
  {
    id: '1',
    title: 'Black Friday Sale',
    subtitle: 'Up to 70% off on electronics',
    imageUrl: 'https://picsum.photos/800/300?blackfriday',
    backgroundColor: '#000000',
    textColor: '#ffffff',
    actionText: 'Shop Now',
    actionUrl: '/categories/electronics',
    priority: 1,
    isActive: true,
    startDate: '2024-11-20T00:00:00Z',
    endDate: '2024-11-30T23:59:59Z'
  },
  {
    id: '2',
    title: 'Free Delivery Weekend',
    subtitle: 'Free delivery on all orders above AED 100',
    imageUrl: 'https://picsum.photos/800/300?delivery',
    backgroundColor: '#4CAF50',
    textColor: '#ffffff',
    actionText: 'Order Now',
    actionUrl: '/free-delivery',
    priority: 2,
    isActive: true
  },
  {
    id: '3',
    title: 'Fashion Week Special',
    subtitle: 'Latest trends at unbeatable prices',
    imageUrl: 'https://picsum.photos/800/300?fashion',
    backgroundColor: '#E91E63',
    textColor: '#ffffff',
    actionText: 'Explore',
    actionUrl: '/categories/fashion',
    priority: 3,
    isActive: true
  },
  {
    id: '4',
    title: 'Home & Garden Sale',
    subtitle: 'Transform your space with 40% off',
    imageUrl: 'https://picsum.photos/800/300?home',
    backgroundColor: '#FF9800',
    textColor: '#ffffff',
    actionText: 'Shop Home',
    actionUrl: '/categories/home',
    priority: 4,
    isActive: true
  },
  {
    id: '5',
    title: 'Tech Deals',
    subtitle: 'Latest gadgets at amazing prices',
    imageUrl: 'https://picsum.photos/800/300?tech',
    backgroundColor: '#2196F3',
    textColor: '#ffffff',
    actionText: 'View Deals',
    actionUrl: '/categories/tech',
    priority: 5,
    isActive: true
  }
]

// Mock product data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    description: 'The most advanced iPhone with titanium design and A17 Pro chip',
    price: 4999,
    originalPrice: 5499,
    discount: 9,
    thumbnail: 'https://picsum.photos/300/300?iphone',
    images: [
      'https://picsum.photos/600/600?iphone1',
      'https://picsum.photos/600/600?iphone2',
      'https://picsum.photos/600/600?iphone3'
    ],
    tags: ['Free Delivery', 'Best Seller', 'New Arrival'],
    rating: 4.8,
    reviewCount: 1247,
    category: 'Electronics',
    brand: 'Apple',
    inStock: true,
    stockCount: 15,
    isNew: true,
    isBestSeller: true,
    hasFreeDelivery: true,
    deliveryTime: 'Same day delivery',
    seller: 'Noon'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android smartphone with S Pen and AI features',
    price: 4299,
    originalPrice: 4799,
    discount: 10,
    thumbnail: 'https://picsum.photos/300/300?samsung',
    images: [
      'https://picsum.photos/600/600?samsung1',
      'https://picsum.photos/600/600?samsung2'
    ],
    tags: ['Free Delivery', 'Selling Fast'],
    rating: 4.6,
    reviewCount: 892,
    category: 'Electronics',
    brand: 'Samsung',
    inStock: true,
    stockCount: 8,
    isBestSeller: false,
    hasFreeDelivery: true,
    deliveryTime: '1-2 days',
    seller: 'Noon'
  },
  {
    id: '3',
    name: 'MacBook Air M3',
    description: '13-inch laptop with M3 chip, perfect for work and creativity',
    price: 4599,
    thumbnail: 'https://picsum.photos/300/300?macbook',
    images: [
      'https://picsum.photos/600/600?macbook1',
      'https://picsum.photos/600/600?macbook2'
    ],
    tags: ['Free Delivery', 'Best Seller'],
    rating: 4.9,
    reviewCount: 2156,
    category: 'Electronics',
    brand: 'Apple',
    inStock: true,
    stockCount: 12,
    isNew: false,
    isBestSeller: true,
    hasFreeDelivery: true,
    deliveryTime: 'Same day delivery',
    seller: 'Noon'
  },
  {
    id: '4',
    name: 'Nike Air Max 270',
    description: 'Comfortable running shoes with Max Air cushioning',
    price: 599,
    originalPrice: 799,
    discount: 25,
    thumbnail: 'https://picsum.photos/300/300?nike',
    images: [
      'https://picsum.photos/600/600?nike1',
      'https://picsum.photos/600/600?nike2'
    ],
    tags: ['Free Delivery', 'Limited Offer'],
    rating: 4.4,
    reviewCount: 567,
    category: 'Fashion',
    brand: 'Nike',
    inStock: true,
    stockCount: 25,
    hasFreeDelivery: true,
    deliveryTime: '2-3 days',
    seller: 'Nike Store'
  },
  {
    id: '5',
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling wireless headphones',
    price: 1299,
    thumbnail: 'https://picsum.photos/300/300?sony',
    images: [
      'https://picsum.photos/600/600?sony1',
      'https://picsum.photos/600/600?sony2'
    ],
    tags: ['Free Delivery', 'Best Seller'],
    rating: 4.7,
    reviewCount: 1834,
    category: 'Electronics',
    brand: 'Sony',
    inStock: true,
    stockCount: 18,
    isBestSeller: true,
    hasFreeDelivery: true,
    deliveryTime: '1-2 days',
    seller: 'Noon'
  },
  {
    id: '6',
    name: 'Adidas Ultraboost 22',
    description: 'Premium running shoes with Boost midsole technology',
    price: 749,
    originalPrice: 899,
    discount: 17,
    thumbnail: 'https://picsum.photos/300/300?adidas',
    images: [
      'https://picsum.photos/600/600?adidas1',
      'https://picsum.photos/600/600?adidas2'
    ],
    tags: ['Selling Fast', 'Free Delivery'],
    rating: 4.5,
    reviewCount: 423,
    category: 'Fashion',
    brand: 'Adidas',
    inStock: true,
    stockCount: 6,
    hasFreeDelivery: true,
    deliveryTime: '2-3 days',
    seller: 'Adidas Store'
  },
  {
    id: '7',
    name: 'Dyson V15 Detect',
    description: 'Powerful cordless vacuum with laser dust detection',
    price: 2299,
    thumbnail: 'https://picsum.photos/300/300?dyson',
    images: [
      'https://picsum.photos/600/600?dyson1',
      'https://picsum.photos/600/600?dyson2'
    ],
    tags: ['Free Delivery', 'New Arrival'],
    rating: 4.6,
    reviewCount: 312,
    category: 'Home & Garden',
    brand: 'Dyson',
    inStock: true,
    stockCount: 9,
    isNew: true,
    hasFreeDelivery: true,
    deliveryTime: '1-2 days',
    seller: 'Noon'
  },
  {
    id: '8',
    name: 'KitchenAid Stand Mixer',
    description: 'Professional 5-quart stand mixer for all your baking needs',
    price: 1599,
    originalPrice: 1899,
    discount: 16,
    thumbnail: 'https://picsum.photos/300/300?kitchenaid',
    images: [
      'https://picsum.photos/600/600?kitchenaid1',
      'https://picsum.photos/600/600?kitchenaid2'
    ],
    tags: ['Free Delivery', 'Best Seller'],
    rating: 4.8,
    reviewCount: 756,
    category: 'Home & Garden',
    brand: 'KitchenAid',
    inStock: true,
    stockCount: 14,
    isBestSeller: true,
    hasFreeDelivery: true,
    deliveryTime: '2-3 days',
    seller: 'Noon'
  },
  {
    id: '9',
    name: 'Levi\'s 501 Original Jeans',
    description: 'Classic straight-leg jeans with authentic fit and feel',
    price: 299,
    thumbnail: 'https://picsum.photos/300/300?levis',
    images: [
      'https://picsum.photos/600/600?levis1',
      'https://picsum.photos/600/600?levis2'
    ],
    tags: ['Free Delivery', 'Limited Offer'],
    rating: 4.3,
    reviewCount: 1289,
    category: 'Fashion',
    brand: 'Levi\'s',
    inStock: true,
    stockCount: 32,
    hasFreeDelivery: true,
    deliveryTime: '2-3 days',
    seller: 'Levi\'s Store'
  },
  {
    id: '10',
    name: 'iPad Pro 12.9"',
    description: 'Most advanced iPad with M2 chip and Liquid Retina XDR display',
    price: 3999,
    thumbnail: 'https://picsum.photos/300/300?ipad',
    images: [
      'https://picsum.photos/600/600?ipad1',
      'https://picsum.photos/600/600?ipad2'
    ],
    tags: ['Free Delivery', 'Selling Fast', 'New Arrival'],
    rating: 4.7,
    reviewCount: 543,
    category: 'Electronics',
    brand: 'Apple',
    inStock: true,
    stockCount: 7,
    isNew: true,
    hasFreeDelivery: true,
    deliveryTime: 'Same day delivery',
    seller: 'Noon'
  }
]

// API Functions
export const fetchBanners = async (): Promise<Banner[]> => {
  await delay(Math.random() * 500 + 500) // 500-1000ms delay
  
  if (shouldSimulateError()) {
    throw new Error('Failed to fetch banners. Please try again.')
  }
  
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
  
  if (shouldSimulateError()) {
    throw new Error('Failed to fetch product details. Please try again.')
  }
  
  const product = mockProducts.find(p => p.id === id)
  
  if (!product) {
    throw new Error('Product not found')
  }
  
  return product
}

export const fetchFeaturedProducts = async (): Promise<Product[]> => {
  await delay(Math.random() * 400 + 600) // 600-1000ms delay
  
  if (shouldSimulateError()) {
    throw new Error('Failed to fetch featured products. Please try again.')
  }
  
  return mockProducts
    .filter(product => product.isBestSeller || product.isNew)
    .slice(0, 8)
}

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  await delay(Math.random() * 400 + 600) // 600-1000ms delay
  
  if (shouldSimulateError()) {
    throw new Error(`Failed to fetch ${category} products. Please try again.`)
  }
  
  return mockProducts
    .filter(product => product.category.toLowerCase() === category.toLowerCase())
    .slice(0, 10)
}