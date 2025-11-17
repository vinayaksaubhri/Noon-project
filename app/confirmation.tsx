import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useCart } from '../contexts/CartContext'

export default function ConfirmationScreen() {
  const { clearCart } = useCart()

  const handleReturnHome = () => {
    clearCart()
    router.push('/(tabs)')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.successIcon}>
          <Ionicons name="checkmark-circle" size={80} color="#28a745" />
        </View>
        
        <Text style={styles.title}>Order Successful!</Text>
        <Text style={styles.subtitle}>
          Your order has been placed successfully.
        </Text>
        
        <TouchableOpacity
          style={styles.returnButton}
          onPress={handleReturnHome}
        >
          <Text style={styles.returnButtonText}>Return to Home Screen</Text>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  successIcon: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  returnButton: {
    backgroundColor: '#007bff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 200,
  },
  returnButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})