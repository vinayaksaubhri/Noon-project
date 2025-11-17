import { useRouter } from 'expo-router'
import { ScrollView } from 'react-native'
import BannerCarousel from '../../components/home/BannerCarousel'
import ProductCarousel from '../../components/home/ProductCarousel'
import useProducts from '../../hooks/useProducts'

export default function HomeScreen() {
  const products = useProducts()
  const router = useRouter()

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <BannerCarousel />
      <ProductCarousel
        title="Featured"
        products={products}
                onPressItem={(item) => console.log(item)}

      />
      <ProductCarousel
        title="Best Sellers"
        products={products}
        onPressItem={(item) => console.log(item)}
      />
    </ScrollView>
  )
}
