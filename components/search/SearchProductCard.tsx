import { Product } from '@/types/product'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
  item: Product
  onPress: () => void
}

export default function SearchProductCard({ item, onPress }: Props) {
  const renderTags = () => {
    const tags = []
    
    if (item.hasFreeDelivery) {
      tags.push('Free Delivery')
    }
    
    if (item.isBestSeller) {
      tags.push('Selling Fast')
    }
    
    if (item.isNew) {
      tags.push('New')
    }
    
    if (item.discount && item.discount > 0) {
      tags.push(`${item.discount}% OFF`)
    }
    
    return tags.slice(0, 1) // Show max 1 tag for grid layout
  }

  const getTagStyle = (tag: string) => {
    const baseStyle = styles.tag
    switch (tag) {
      case 'Free Delivery':
        return [baseStyle, styles.tagFreeDelivery]
      case 'Selling Fast':
        return [baseStyle, styles.tagSellingFast]
      case 'New':
        return [baseStyle, styles.tagNew]
      default:
        return [baseStyle, styles.tagDefault]
    }
  }

  const tags = renderTags()

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.image}
          resizeMode="cover"
        />
        {item.discount && item.discount > 0 && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>
              {item.discount}% OFF
            </Text>
          </View>
        )}
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        
        <Text style={styles.brand} numberOfLines={1}>
          {item.brand}
        </Text>
        
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            ₹{item.price}
          </Text>
          {item.originalPrice && item.originalPrice > item.price && (
            <Text style={styles.originalPrice}>
              ₹{item.originalPrice}
            </Text>
          )}
        </View>

        {tags.length > 0 && (
          <View style={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <View key={index} style={getTagStyle(tag)}>
                <Text style={styles.tagText}>
                  {tag}
                </Text>
              </View>
            ))}
          </View>
        )}

        {item.rating > 0 && (
          <View style={styles.ratingContainer}>
            <Text style={styles.starIcon}>★</Text>
            <Text style={styles.ratingText}>
              {item.rating.toFixed(1)} ({item.reviewCount})
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 140,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#ff4444',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  discountText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  contentContainer: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    lineHeight: 18,
    marginBottom: 4,
  },
  brand: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  originalPrice: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
    marginLeft: 6,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 6,
  },
  tag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    marginRight: 4,
  },
  tagFreeDelivery: {
    backgroundColor: '#00c851',
  },
  tagSellingFast: {
    backgroundColor: '#ff8800',
  },
  tagNew: {
    backgroundColor: '#007bff',
  },
  tagDefault: {
    backgroundColor: '#6c757d',
  },
  tagText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    fontSize: 12,
    color: '#ffa500',
  },
  ratingText: {
    fontSize: 11,
    color: '#666',
    marginLeft: 2,
  },
})