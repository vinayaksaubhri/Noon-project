import { Dimensions, FlatList, Image } from 'react-native'

const { width } = Dimensions.get('window')

const banners = [
  'https://picsum.photos/800/400?1',
  'https://picsum.photos/800/400?2',
  'https://picsum.photos/800/400?3'
]

export default function BannerCarousel() {
  return (
    <FlatList
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      data={banners}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          style={{ width, height: 180, borderRadius: 12 }}
        />
      )}
    />
  )
}
