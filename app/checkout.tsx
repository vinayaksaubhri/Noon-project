import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useCart } from '../stores/useCart'

type PaymentMethod = 'card' | 'upi' | 'cod'

export default function CheckoutScreen() {
  const { items, getTotalItems } = useCart()
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('card')

  const getSubtotal = () => {
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  }

  const getTax = () => {
    return Math.round(getSubtotal() * 0.18) // 18% GST
  }

  const getTotal = () => {
    return getSubtotal() + getTax()
  }

  const paymentMethods = [
    { id: 'card' as PaymentMethod, name: 'Credit/Debit Card', icon: 'card-outline' },
    { id: 'upi' as PaymentMethod, name: 'UPI Payment', icon: 'phone-portrait-outline' },
    { id: 'cod' as PaymentMethod, name: 'Cash on Delivery', icon: 'cash-outline' },
  ]

  const renderCartItem = ({ item }: { item: typeof items[0] }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.product.thumbnail }} style={styles.productImage} />
      
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.product.name}
        </Text>
        <Text style={styles.productBrand}>{item.product.brand}</Text>
        <Text style={styles.quantityPrice}>
          Qty: {item.quantity} × ₹{item.product.price} = ₹{item.quantity * item.product.price}
        </Text>
      </View>
    </View>
  )

  const handlePlaceOrder = () => {
    router.push('/confirmation')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      <FlatList
        data={items}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.product.id}
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.sectionTitle}>Order Summary ({getTotalItems()} items)</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View>
            {/* Payment Method Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Payment Method</Text>
              {paymentMethods.map((method) => (
                <TouchableOpacity
                  key={method.id}
                  style={[
                    styles.paymentOption,
                    selectedPayment === method.id && styles.selectedPaymentOption
                  ]}
                  onPress={() => setSelectedPayment(method.id)}
                >
                  <View style={styles.paymentInfo}>
                    <Ionicons 
                      name={method.icon as any} 
                      size={24} 
                      color={selectedPayment === method.id ? '#007bff' : '#666'} 
                    />
                    <Text style={[
                      styles.paymentName,
                      selectedPayment === method.id && styles.selectedPaymentName
                    ]}>
                      {method.name}
                    </Text>
                  </View>
                  <View style={[
                    styles.radioButton,
                    selectedPayment === method.id && styles.selectedRadioButton
                  ]}>
                    {selectedPayment === method.id && (
                      <View style={styles.radioButtonInner} />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            {/* Order Total Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Order Total</Text>
              
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Subtotal</Text>
                <Text style={styles.totalValue}>₹{getSubtotal()}</Text>
              </View>
              
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Tax (GST 18%)</Text>
                <Text style={styles.totalValue}>₹{getTax()}</Text>
              </View>
              
              <View style={[styles.totalRow, styles.finalTotalRow]}>
                <Text style={styles.finalTotalLabel}>Total</Text>
                <Text style={styles.finalTotalValue}>₹{getTotal()}</Text>
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Place Order Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
          <Text style={styles.placeOrderButtonText}>Place Order - ₹{getTotal()}</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  listContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
    marginTop: 8,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
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
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  productInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    lineHeight: 18,
  },
  productBrand: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  quantityPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#007bff',
    marginTop: 4,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  paymentOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  selectedPaymentOption: {
    borderColor: '#007bff',
    backgroundColor: '#f8f9ff',
  },
  paymentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentName: {
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
  },
  selectedPaymentName: {
    color: '#007bff',
    fontWeight: '600',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadioButton: {
    borderColor: '#007bff',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  totalLabel: {
    fontSize: 16,
    color: '#666',
  },
  totalValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  finalTotalRow: {
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
    marginTop: 8,
    paddingTop: 12,
  },
  finalTotalLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  finalTotalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  bottomContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  placeOrderButton: {
    backgroundColor: '#007bff',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  placeOrderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})