import { Product } from '@/types/product'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ProductCard from './ProductCard'

type Props = {
  title: string
  products: Product[]
  onPressItem: (item: Product) => void
  subtitle?: string
  showViewAll?: boolean
  onViewAll?: () => void
}

export default function ProductCarousel({ 
  title, 
  products, 
  onPressItem, 
  subtitle,
  showViewAll = true,
  onViewAll 
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>
            {title}
          </Text>
          {subtitle && (
            <Text style={styles.subtitle}>
              {subtitle}
            </Text>
          )}
        </View>
        
        {showViewAll && (
          <TouchableOpacity 
            onPress={onViewAll}
            style={styles.viewAllButton}
          >
            <Text style={styles.viewAllText}>
              View All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        decelerationRate="fast"
        snapToInterval={176} // Card width (160) + margin (16)
        snapToAlignment="start"
        renderItem={({ item }) => (
          <ProductCard item={item} />
        )}
        getItemLayout={(data, index) => ({
          length: 176,
          offset: 176 * index,
          index,
        })}
        initialNumToRender={3}
        maxToRenderPerBatch={5}
        windowSize={10}
        removeClippedSubviews={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    fontWeight: '400',
  },
  viewAllButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#f8f9fa',
  },
  viewAllText: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: '600',
  },
  listContainer: {
    paddingHorizontal: 4,
  },
})
