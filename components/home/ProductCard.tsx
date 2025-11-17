import { Product } from '@/types/product'
import { Image, Text, TouchableOpacity } from 'react-native'


type Props = {
  item: Product
  onPress: () => void
}

export default function ProductCard({ item, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 140,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginRight: 12
      }}
    >
      <Image
        source={{ uri: item.thumbnail }}
        style={{ width: '100%', height: 100, borderRadius: 10 }}
      />
      <Text style={{ marginTop: 8, fontSize: 14, fontWeight: '600' }}>
        {item.name}
      </Text>
      <Text style={{ marginTop: 4, fontSize: 13, color: '#444' }}>
        ₹{item.price}
      </Text>
    </TouchableOpacity>
  )
}
