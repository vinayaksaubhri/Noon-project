import { useRouter } from 'expo-router'
import { useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native'
import BannerCarousel from '../../components/home/BannerCarousel'
import ProductCarousel from '../../components/home/ProductCarousel'
import { useFeaturedProducts, useProductsByCategory } from '../../hooks/useProducts'

export default function HomeScreen() {
  const router = useRouter()
  const [refreshing, setRefreshing] = useState(false)
  
  const { data: featuredProducts = [], isLoading: featuredLoading, refetch: refetchFeatured } = useFeaturedProducts()
  const { data: electronicsProducts = [], isLoading: electronicsLoading, refetch: refetchElectronics } = useProductsByCategory('electronics')
  const { data: fashionProducts = [], isLoading: fashionLoading, refetch: refetchFashion } = useProductsByCategory('fashion')
  const { data: homeProducts = [], isLoading: homeLoading, refetch: refetchHome } = useProductsByCategory('home')

  const onRefresh = async () => {
    setRefreshing(true)
    await Promise.all([
      refetchFeatured(),
      refetchElectronics(),
      refetchFashion(),
      refetchHome()
    ])
    setRefreshing(false)
  }


  const handleViewAll = (category: string) => {
    console.log('View all pressed for:', category)
  }

  const bestSellerProducts = featuredProducts.filter(p => p.isBestSeller)
  const newArrivals = featuredProducts.filter(p => p.isNew)
  const freeDeliveryProducts = featuredProducts.filter(p => p.hasFreeDelivery)

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.innerContainer}>
        <BannerCarousel />
        
        {!featuredLoading && featuredProducts.length > 0 && (
          <ProductCarousel
            title="Featured Products"
            subtitle="Handpicked for you"
            products={featuredProducts.slice(0, 10)}
            onPressItem={() => {}}
            onViewAll={() => handleViewAll('featured')}
          />
        )}

        {!featuredLoading && bestSellerProducts.length > 0 && (
          <ProductCarousel
            title="Best Sellers"
            subtitle="Most popular items"
            products={bestSellerProducts.slice(0, 10)}
            onPressItem={() => {}}
            onViewAll={() => handleViewAll('bestsellers')}
          />
        )}

        {!featuredLoading && newArrivals.length > 0 && (
          <ProductCarousel
            title="New Arrivals"
            subtitle="Latest additions"
            products={newArrivals.slice(0, 10)}
            onPressItem={() => {}}
            onViewAll={() => handleViewAll('new')}
          />
        )}

        {!electronicsLoading && electronicsProducts.length > 0 && (
          <ProductCarousel
            title="Electronics"
            subtitle="Tech essentials"
            products={electronicsProducts.slice(0, 10)}
            onPressItem={() => {}}
            onViewAll={() => handleViewAll('electronics')}
          />
        )}

        {!fashionLoading && fashionProducts.length > 0 && (
          <ProductCarousel
            title="Fashion"
            subtitle="Style & trends"
            products={fashionProducts.slice(0, 10)}
            onPressItem={() => {}}
            onViewAll={() => handleViewAll('fashion')}
          />
        )}

        {!homeLoading && homeProducts.length > 0 && (
          <ProductCarousel
            title="Home & Living"
            subtitle="Comfort & decor"
            products={homeProducts.slice(0, 10)}
            onPressItem={() => {}}
            onViewAll={() => handleViewAll('home')}
          />
        )}

        {!featuredLoading && freeDeliveryProducts.length > 0 && (
          <ProductCarousel
            title="Free Delivery"
            subtitle="No shipping charges"
            products={freeDeliveryProducts.slice(0, 10)}
            onPressItem={() => {}}
            onViewAll={() => handleViewAll('free-delivery')}
          />
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  innerContainer: {
    paddingHorizontal: 16,
  },
})
