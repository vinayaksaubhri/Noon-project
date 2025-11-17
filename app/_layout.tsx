import { Slot } from 'expo-router'
import QueryProvider from '../providers/QueryProvider'

export default function RootLayout() {
  return (
    <QueryProvider>
      <Slot />
    </QueryProvider>
  )
}
