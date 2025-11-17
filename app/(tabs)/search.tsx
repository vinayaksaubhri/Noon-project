import { Ionicons } from '@expo/vector-icons'
import React, { useMemo, useState } from 'react'
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import SearchProductCard from '../../components/search/SearchProductCard'
import { Product } from '../../types/product'

// Mock search data - a few sample products
const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    description: 'Latest iPhone with advanced camera system',
    price: 134900,
    originalPrice: 149900,
    discount: 10,
    thumbnail: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
    images: [],
    tags: ['electronics', 'smartphone'],
    rating: 4.8,
    reviewCount: 1250,
    category: 'electronics',
    brand: 'Apple',
    inStock: true,
    stockCount: 25,
    isNew: true,
    isBestSeller: true,
    hasFreeDelivery: true,
    deliveryTime: '1-2 days',
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android smartphone with S Pen',
    price: 124999,
    originalPrice: 134999,
    discount: 7,
    thumbnail: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400',
    images: [],
    tags: ['electronics', 'smartphone'],
    rating: 4.7,
    reviewCount: 890,
    category: 'electronics',
    brand: 'Samsung',
    inStock: true,
    stockCount: 15,
    isNew: false,
    isBestSeller: true,
    hasFreeDelivery: true,
    deliveryTime: '1-2 days',
  },
  {
    id: '3',
    name: 'MacBook Air M3',
    description: 'Ultra-thin laptop with M3 chip',
    price: 114900,
    thumbnail: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400',
    images: [],
    tags: ['electronics', 'laptop'],
    rating: 4.9,
    reviewCount: 567,
    category: 'electronics',
    brand: 'Apple',
    inStock: true,
    stockCount: 8,
    isNew: true,
    isBestSeller: false,
    hasFreeDelivery: true,
    deliveryTime: '2-3 days',
  },
  {
    id: '4',
    name: 'Nike Air Max 270',
    description: 'Comfortable running shoes with air cushioning',
    price: 12995,
    originalPrice: 14995,
    discount: 13,
    thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    images: [],
    tags: ['fashion', 'shoes'],
    rating: 4.5,
    reviewCount: 2340,
    category: 'fashion',
    brand: 'Nike',
    inStock: true,
    stockCount: 45,
    isNew: false,
    isBestSeller: true,
    hasFreeDelivery: true,
    deliveryTime: '1-2 days',
  },
  {
    id: '5',
    name: 'Sony WH-1000XM5',
    description: 'Premium noise-canceling headphones',
    price: 29990,
    originalPrice: 34990,
    discount: 14,
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    images: [],
    tags: ['electronics', 'audio'],
    rating: 4.8,
    reviewCount: 1890,
    category: 'electronics',
    brand: 'Sony',
    inStock: true,
    stockCount: 20,
    isNew: false,
    isBestSeller: true,
    hasFreeDelivery: true,
    deliveryTime: '1-2 days',
  },
  {
    id: '6',
    name: 'Levi\'s 501 Original Jeans',
    description: 'Classic straight-fit denim jeans',
    price: 4999,
    thumbnail: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    images: [],
    tags: ['fashion', 'clothing'],
    rating: 4.3,
    reviewCount: 890,
    category: 'fashion',
    brand: 'Levi\'s',
    inStock: true,
    stockCount: 30,
    isNew: false,
    isBestSeller: false,
    hasFreeDelivery: false,
    deliveryTime: '3-4 days',
  },
  {
    id: '7',
    name: 'IKEA MALM Bed Frame',
    description: 'Modern wooden bed frame with storage',
    price: 15999,
    thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    images: [],
    tags: ['home', 'furniture'],
    rating: 4.4,
    reviewCount: 456,
    category: 'home',
    brand: 'IKEA',
    inStock: true,
    stockCount: 12,
    isNew: false,
    isBestSeller: false,
    hasFreeDelivery: true,
    deliveryTime: '5-7 days',
  },
  {
    id: '8',
    name: 'Instant Pot Duo 7-in-1',
    description: 'Multi-functional electric pressure cooker',
    price: 8999,
    originalPrice: 11999,
    discount: 25,
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    images: [],
    tags: ['home', 'kitchen'],
    rating: 4.6,
    reviewCount: 3450,
    category: 'home',
    brand: 'Instant Pot',
    inStock: true,
    stockCount: 35,
    isNew: false,
    isBestSeller: true,
    hasFreeDelivery: true,
    deliveryTime: '2-3 days',
  },
]

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return []
    }

    const query = searchQuery.toLowerCase().trim()
    return SAMPLE_PRODUCTS.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }, [searchQuery])

  const handleProductPress = (product: Product) => {
    console.log('Product pressed:', product.name)
    // Navigate to product detail screen
    // router.push(`/product/${product.id}`)
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productItem}>
      <SearchProductCard
        item={item}
        onPress={() => handleProductPress(item)}
      />
    </View>
  )

  const renderEmptyState = () => {
    if (!searchQuery.trim()) {
      return (
        <View style={styles.emptyState}>
          <Ionicons name="search" size={64} color="#ccc" />
          <Text style={styles.emptyStateTitle}>Search for products</Text>
          <Text style={styles.emptyStateSubtitle}>
            Try searching for "iPhone", "Nike", "MacBook", or "IKEA"
          </Text>
        </View>
      )
    }

    return (
      <View style={styles.emptyState}>
        <Ionicons name="search" size={64} color="#ccc" />
        <Text style={styles.emptyStateTitle}>No products found</Text>
        <Text style={styles.emptyStateSubtitle}>
          Try searching with different keywords
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.searchContainer, isSearchFocused && styles.searchContainerFocused]}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            returnKeyType="search"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
              <Ionicons name="close-circle" size={20} color="#666" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {filteredProducts.length > 0 ? (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsCount}>
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
          </Text>
          <FlatList
            data={filteredProducts}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        renderEmptyState()
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  searchContainerFocused: {
    borderColor: '#007bff',
    backgroundColor: '#fff',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 4,
  },
  clearButton: {
    padding: 4,
  },
  resultsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  resultsCount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginVertical: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  productItem: {
    flex: 1,
    maxWidth: '48%',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
})