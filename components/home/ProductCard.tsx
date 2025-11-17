import { Product } from '@/types/product'
import { useRouter } from 'expo-router'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
  item: Product
  onPress?: () => void
}

export default function ProductCard({ item, onPress }: Props) {
  const router = useRouter()

  const handlePress = () => {
    if (onPress) {
      onPress()
    } else {
      router.push(`/product/${item.id}`)
    }
  }

  const tags = []
  
  if (item.hasFreeDelivery) tags.push('Free Delivery')
  if (item.isBestSeller) tags.push('Selling Fast')
  if (item.isNew) tags.push('New')
  if (item.discount && item.discount > 0) tags.push(`${item.discount}% OFF`)
  
  const displayTags = tags.slice(0, 2)

  const getTagColor = (tag: string) => {
    if (tag === 'Free Delivery') return '#00c851'
    if (tag === 'Selling Fast') return '#ff8800'
    if (tag === 'New') return '#007bff'
    return '#6c757d'
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
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
      
      <Text style={styles.productName} numberOfLines={2}>
        {item.name}
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

      {displayTags.length > 0 && (
        <View style={styles.tagsContainer}>
          {displayTags.map((tag, index) => (
            <View key={index} style={[styles.tag, { backgroundColor: getTagColor(tag) }]}>
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
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
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
  productName: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    lineHeight: 18,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
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
    marginTop: 8,
    gap: 4,
  },
  tag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  tagText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
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
