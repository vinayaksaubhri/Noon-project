import { Product } from '@/types/product'
import { useEffect, useState } from 'react'

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    setProducts([
      {
        id: '1',
        name: 'Running Shoes',
        price: 1299,
        thumbnail: 'https://picsum.photos/200/200?shoes',
        images: [],
        tags: ['Free Delivery']
      },
      {
        id: '2',
        name: 'Wireless Earbuds',
        price: 2299,
        thumbnail: 'https://picsum.photos/200/200?earbuds',
        images: [],
        tags: ['Selling Fast']
      },
      {
        id: '3',
        name: 'Smart Watch',
        price: 3499,
        thumbnail: 'https://picsum.photos/200/200?watch',
        images: [],
        tags: ['Limited Stock']
      }
    ])
  }, [])

  return products
}
