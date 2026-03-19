'use client'

import { useEffect, useState } from 'react'

import type { Product } from '@/types'

type UseProductsState = {
  products: Product[]
  isLoading: boolean
  error: string | null
}

export function useProducts(): UseProductsState {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const getProducts = async () => {
      try {
        const response = await fetch('/api/products')

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`)
        }

        const data = await response.json()
        if (isMounted) {
          setProducts(data)
        }
      } catch (caught) {
        if (isMounted) {
          setError(caught instanceof Error ? caught.message : 'Unknown error')
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    getProducts()

    return () => {
      isMounted = false
    }
  }, [])

  return { products, isLoading, error }
}
