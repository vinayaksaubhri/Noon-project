import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'

type SearchBarProps = {
  searchQuery: string
  onSearchChange: (query: string) => void
  onFocus: () => void
  onBlur: () => void
  onClear: () => void
  isFocused: boolean
}

export default function SearchBar({
  searchQuery,
  onSearchChange,
  onFocus,
  onBlur,
  onClear,
  isFocused,
}: SearchBarProps) {
  return (
    <View style={styles.header}>
      <View style={[styles.searchContainer, isFocused && styles.searchContainerFocused]}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={onSearchChange}
          onFocus={onFocus}
          onBlur={onBlur}
          returnKeyType="search"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={onClear} style={styles.clearButton}>
            <Ionicons name="close-circle" size={20} color="#666" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
})