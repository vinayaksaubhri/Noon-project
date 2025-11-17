import { Product } from '@/types/product'
import React, { createContext, ReactNode, useContext, useState } from 'react'

type CartItem = {
  product: Product
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  getTotalItems: () => number
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

type CartProviderProps = {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.product.id === product.id)
      
      if (existingItem) {
        return currentItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      
      return [...currentItems, { product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: string) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.product.id === productId)
      
      if (existingItem && existingItem.quantity > 1) {
        return currentItems.map(item =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      }
      
      return currentItems.filter(item => item.product.id !== productId)
    })
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      getTotalItems,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}