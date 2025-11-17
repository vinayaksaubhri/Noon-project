import { useBanners } from '@/hooks/useBanners';
import { Banner } from '@/types/banner';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const BANNER_HEIGHT = 200;

const BannerCarousel: React.FC = () => {
  const { data: banners, isLoading } = useBanners();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / screenWidth);
    setCurrentIndex(newIndex);
  };

  if (isLoading || !banners || banners.length === 0) {
    return null;
  }

  const renderBannerItem = ({ item: banner }: { item: Banner }) => (
    <View style={styles.bannerContainer}>
      <Image
        source={{ uri: banner.imageUrl }}
        style={styles.bannerImage}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={banners}
        renderItem={renderBannerItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        snapToInterval={screenWidth - 16}
        snapToAlignment="start"
        decelerationRate="fast"
        contentContainerStyle={{gap:16}}
      />
      
      <View style={styles.indicatorContainer}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentIndex ? styles.activeIndicator : styles.inactiveIndicator
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  bannerContainer: {
    width: screenWidth - 16 * 2,
    height: BANNER_HEIGHT,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#007AFF',
  },
  inactiveIndicator: {
    backgroundColor: '#C7C7CC',
  },
});

export default BannerCarousel;
