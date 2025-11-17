import { Slot } from 'expo-router'
import { CartProvider } from '../contexts/CartContext'
import QueryProvider from '../providers/QueryProvider'

export default function RootLayout() {
  return (
    <QueryProvider>
      <CartProvider>
        <Slot />
      </CartProvider>
    </QueryProvider>
  )
}
