import { Ionicons } from '@expo/vector-icons'
import React, { useMemo, useState } from 'react'
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import SearchBar from '../../components/search/SearchBar'
import SearchProductCard from '../../components/search/SearchProductCard'
import { searchProducts } from '../../data/mock'
import { Product } from '../../types/product'

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return []
    }

    const query = searchQuery.toLowerCase().trim()
    return searchProducts.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }, [searchQuery])


  const clearSearch = () => {
    setSearchQuery('')
  }

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productItem}>
      <SearchProductCard
        item={item}
      />
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onFocus={() => setIsSearchFocused(true)}
        onBlur={() => setIsSearchFocused(false)}
        onClear={clearSearch}
        isFocused={isSearchFocused}
      />

      {/* Early return for empty search query */}
      {!searchQuery.trim() && (
        <View style={styles.emptyState}>
          <Ionicons name="search" size={64} color="#ccc" />
          <Text style={styles.emptyStateTitle}>Search for products</Text>
          <Text style={styles.emptyStateSubtitle}>
            Try searching for "iPhone", "Nike", "MacBook", or "IKEA"
          </Text>
        </View>
      )}

      {/* Early return for no results */}
      {searchQuery.trim() && filteredProducts.length === 0 && (
        <View style={styles.emptyState}>
          <Ionicons name="search" size={64} color="#ccc" />
          <Text style={styles.emptyStateTitle}>No products found</Text>
          <Text style={styles.emptyStateSubtitle}>
            Try searching with different keywords
          </Text>
        </View>
      )}

      {/* Results */}
      {filteredProducts.length > 0 && (
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
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
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