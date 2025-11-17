import { fetchFeaturedProducts, fetchProductById, fetchProducts, fetchProductsByCategory } from '@/services/api'
import { Product } from '@/types/product'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

// Hook for fetching paginated products with filters
export function useProductsWithFilters(params?: {
  category?: string
  limit?: number
  offset?: number
  search?: string
}) {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => fetchProducts(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Hook for fetching featured products (best sellers and new arrivals)
export function useFeaturedProducts(): UseQueryResult<Product[], Error> {
  return useQuery({
    queryKey: ['products', 'featured'],
    queryFn: fetchFeaturedProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Hook for fetching products by category
export function useProductsByCategory(category: string): UseQueryResult<Product[], Error> {
  return useQuery({
    queryKey: ['products', 'category', category],
    queryFn: () => fetchProductsByCategory(category),
    enabled: !!category,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Hook for fetching a single product by ID
export function useProduct(id: string): UseQueryResult<Product, Error> {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Default export for backward compatibility (returns featured products)
export default function useProducts() {
  const { data: products = [], isLoading, error } = useFeaturedProducts()
  return { products, isLoading, error }
}
