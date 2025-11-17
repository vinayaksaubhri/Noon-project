import { useCartStore } from './cartStore'

// Custom hook that provides the same interface as the old context
export const useCart = () => {
  const items = useCartStore((state) => state.items)
  const addToCart = useCartStore((state) => state.addToCart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const getTotalItems = useCartStore((state) => state.getTotalItems)
  const clearCart = useCartStore((state) => state.clearCart)

  return {
    items,
    addToCart,
    removeFromCart,
    getTotalItems,
    clearCart
  }
}