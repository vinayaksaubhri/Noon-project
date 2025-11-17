import { Product } from '@/types/product'
import { create } from 'zustand'

type CartItem = {
  product: Product
  quantity: number
}

type CartStore = {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  getTotalItems: () => number
  clearCart: () => void
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addToCart: (product: Product) => {
    set((state) => {
      const existingItem = state.items.find(item => item.product.id === product.id)
      
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      
      return {
        items: [...state.items, { product, quantity: 1 }]
      }
    })
  },

  removeFromCart: (productId: string) => {
    set((state) => {
      const existingItem = state.items.find(item => item.product.id === productId)
      
      if (existingItem && existingItem.quantity > 1) {
        return {
          items: state.items.map(item =>
            item.product.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        }
      }
      
      return {
        items: state.items.filter(item => item.product.id !== productId)
      }
    })
  },

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0)
  },

  clearCart: () => {
    set({ items: [] })
  }
}))