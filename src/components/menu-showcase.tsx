'use client'

import Image from 'next/image'
import { Star, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'

type Products = {
  id: string
  img: string
  name: string
  dsc: string
  price: number
  rate: number
  country: string
}

export function MenuShowcase() {
  const [products, setProducts] = useState<Products[]>([])

  // TODO: Handle loading and error states
  const getProducts = async () => {
    try {
      const response = await fetch('/api/products')

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <section id="menu" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-balance">
              Popular right now
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Our most loved dishes, handpicked by customers just like you.
            </p>
          </div>
          <button className="w-fit rounded-full border bg-background shadow-xs p-2 cursor-pointer">
            View full menu
          </button>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl overflow-hidden border border-border hover:border-foreground/20 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-secondary">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {item.country}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                  <div className="flex items-center gap-1 shrink-0">
                    <Star className="w-4 h-4 fill-foreground text-foreground" />
                    <span className="text-sm font-medium text-foreground">{item.rate}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.dsc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-foreground">${item.price}</span>
                  <button className="inline-flex items-center rounded-full gap-1 border bg-background shadow-xs h-8 px-3 has-[>svg]:px-2.5">
                    <Plus className="w-4 h-4" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
