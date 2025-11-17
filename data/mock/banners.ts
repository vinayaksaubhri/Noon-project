import { Banner } from '@/types/banner'

export const mockBanners: Banner[] = [
  {
    id: '1',
    title: 'Black Friday Sale',
    subtitle: 'Up to 70% off on electronics',
    imageUrl: 'https://picsum.photos/800/300?blackfriday',
    backgroundColor: '#000000',
    textColor: '#ffffff',
    actionText: 'Shop Now',
    actionUrl: '/categories/electronics',
    priority: 1,
    isActive: true,
    startDate: '2024-11-20T00:00:00Z',
    endDate: '2024-11-30T23:59:59Z'
  },
  {
    id: '2',
    title: 'Free Delivery Weekend',
    subtitle: 'Free delivery on all orders above AED 100',
    imageUrl: 'https://picsum.photos/800/300?delivery',
    backgroundColor: '#4CAF50',
    textColor: '#ffffff',
    actionText: 'Order Now',
    actionUrl: '/free-delivery',
    priority: 2,
    isActive: true
  },
  {
    id: '3',
    title: 'Fashion Week Special',
    subtitle: 'Latest trends at unbeatable prices',
    imageUrl: 'https://picsum.photos/800/300?fashion',
    backgroundColor: '#E91E63',
    textColor: '#ffffff',
    actionText: 'Explore',
    actionUrl: '/categories/fashion',
    priority: 3,
    isActive: true
  },
  {
    id: '4',
    title: 'Home & Garden Sale',
    subtitle: 'Transform your space with 40% off',
    imageUrl: 'https://picsum.photos/800/300?home',
    backgroundColor: '#FF9800',
    textColor: '#ffffff',
    actionText: 'Shop Home',
    actionUrl: '/categories/home',
    priority: 4,
    isActive: true
  },
  {
    id: '5',
    title: 'Tech Deals',
    subtitle: 'Latest gadgets at amazing prices',
    imageUrl: 'https://picsum.photos/800/300?tech',
    backgroundColor: '#2196F3',
    textColor: '#ffffff',
    actionText: 'View Deals',
    actionUrl: '/categories/tech',
    priority: 5,
    isActive: true
  }
]