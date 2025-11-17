import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useCart } from '../../stores/useCart'

export default function CartScreen() {
  const { items, addToCart, removeFromCart, clearCart, getTotalItems } = useCart()

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  }

  const renderCartItem = ({ item }: { item: typeof items[0] }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.product.thumbnail }} style={styles.productImage} />
      
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.product.name}
        </Text>
        <Text style={styles.productBrand}>{item.product.brand}</Text>
        <Text style={styles.productPrice}>₹{item.product.price}</Text>
      </View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity 
          onPress={() => removeFromCart(item.product.id)} 
          style={styles.quantityButton}
        >
          <Ionicons name="remove" size={16} color="#007bff" />
        </TouchableOpacity>
        
        <Text style={styles.quantityText}>{item.quantity}</Text>
        
        <TouchableOpacity 
          onPress={() => addToCart(item.product)} 
          style={styles.quantityButton}
        >
          <Ionicons name="add" size={16} color="#007bff" />
        </TouchableOpacity>
      </View>
    </View>
  )

  const renderEmptyCart = () => (
    <View style={styles.emptyContainer}>
      <Ionicons name="cart-outline" size={80} color="#ccc" />
      <Text style={styles.emptyTitle}>Your cart is empty</Text>
      <Text style={styles.emptySubtitle}>Add some products to get started</Text>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cart ({getTotalItems()})</Text>
        {items.length > 0 && (
          <TouchableOpacity onPress={clearCart} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>

      {items.length === 0 ? (
        renderEmptyCart()
      ) : (
        <>
          <FlatList
            data={items}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.product.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />

          <View style={styles.totalContainer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total ({getTotalItems()} items)</Text>
              <Text style={styles.totalPrice}>₹{getTotalPrice()}</Text>
            </View>
            
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => router.push('/checkout')}
            >
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  clearButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#f8f9fa',
  },
  clearButtonText: {
    color: '#dc3545',
    fontSize: 14,
    fontWeight: '600',
  },
  listContainer: {
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  productInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    lineHeight: 20,
  },
  productBrand: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginTop: 4,
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
    borderRadius: 6,
    padding: 8,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginHorizontal: 16,
    minWidth: 20,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  totalContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 16,
    color: '#666',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#007bff',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})