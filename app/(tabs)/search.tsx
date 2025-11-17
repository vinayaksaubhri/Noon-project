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