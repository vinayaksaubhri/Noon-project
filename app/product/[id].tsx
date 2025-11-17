import { Ionicons } from '@expo/vector-icons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { mockProducts, searchProducts } from '../../data/mock'
import { useCart } from '../../stores/useCart'

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const router = useRouter()
  const { addToCart, removeFromCart, items } = useCart()

  // Find product from both mock data sources
  const product = [...mockProducts, ...searchProducts].find(p => p.id === id)

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Product not found</Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  const cartItem = items.find(item => item.product.id === product.id)
  const quantityInCart = cartItem?.quantity || 0

  const handleAddToCart = () => {
    addToCart(product)
  }

  const handleRemoveFromCart = () => {
    if (quantityInCart > 0) {
      removeFromCart(product.id)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Product Details</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
        
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.brand}>{product.brand}</Text>
          
          <View style={styles.priceContainer}>
            <Text style={styles.price}>₹{product.price}</Text>
            {product.originalPrice && product.originalPrice > product.price && (
              <Text style={styles.originalPrice}>₹{product.originalPrice}</Text>
            )}
            {product.discount && (
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{product.discount}% OFF</Text>
              </View>
            )}
          </View>

          <Text style={styles.description}>{product.description}</Text>

          {product.rating > 0 && (
            <View style={styles.ratingContainer}>
              <Text style={styles.starIcon}>★</Text>
              <Text style={styles.ratingText}>
                {product.rating.toFixed(1)} ({product.reviewCount} reviews)
              </Text>
            </View>
          )}

          <View style={styles.deliveryInfo}>
            <Ionicons name="car" size={16} color="#00c851" />
            <Text style={styles.deliveryText}>
              {product.hasFreeDelivery ? 'Free Delivery' : 'Paid Delivery'} • {product.deliveryTime}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        {quantityInCart > 0 ? (
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={handleRemoveFromCart} style={styles.quantityButton}>
              <Ionicons name="remove" size={20} color="#007bff" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantityInCart}</Text>
            <TouchableOpacity onPress={handleAddToCart} style={styles.quantityButton}>
              <Ionicons name="add" size={20} color="#007bff" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleAddToCart} style={styles.addToCartButton}>
            <Ionicons name="cart" size={20} color="#fff" />
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  backIcon: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
    color: '#333',
  },
  content: {
    flex: 1,
  },
  productImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#f5f5f5',
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  brand: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  price: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
  },
  originalPrice: {
    fontSize: 18,
    color: '#999',
    textDecorationLine: 'line-through',
    marginLeft: 12,
  },
  discountBadge: {
    backgroundColor: '#ff4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 12,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  starIcon: {
    fontSize: 16,
    color: '#ffa500',
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  deliveryText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  bottomContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  addToCartButton: {
    backgroundColor: '#007bff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButton: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 8,
    padding: 12,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginHorizontal: 24,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  errorText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
  },
  backButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})