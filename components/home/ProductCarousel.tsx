import { Product } from '@/types/product'
import { FlatList, Text, View } from 'react-native'
import ProductCard from './ProductCard'

type Props = {
  title: string
  products: Product[]
  onPressItem: (item: Product) => void
}

export default function ProductCarousel({ title, products, onPressItem }: Props) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 10 }}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard item={item} onPress={() => onPressItem(item)} />
        )}
      />
    </View>
  )
}
