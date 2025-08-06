'use client'

import React from 'react'
import { Product } from '@/data/types'
import { ProductCard } from './ProductCard'
import { Loading } from '@/components/ui/Loading'

interface ProductGridProps {
  products: Product[]
  loading: boolean
  viewMode?: 'grid' | 'list'
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading,
  viewMode = 'grid'
}) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loading size="lg" text="Loading products..." />
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🌾</div>
        <h3 className="text-xl font-semibold text-agricultural-green-600 mb-2">
          No products found
        </h3>
        <p className="text-dirt-brown-600">
          Try adjusting your filters or search terms to find what you&apos;re looking for.
        </p>
      </div>
    )
  }

  const gridClasses = viewMode === 'grid' 
    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
    : 'space-y-4'

  return (
    <div className={gridClasses}>
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          variant={viewMode}
        />
      ))}
    </div>
  )
}