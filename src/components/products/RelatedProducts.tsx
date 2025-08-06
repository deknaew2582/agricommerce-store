'use client'

import React from 'react'
import { Product } from '@/data/types'
import { ProductCard } from './ProductCard'

interface RelatedProductsProps {
  products: Product[]
  title?: string
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  products,
  title = 'Related Products'
}) => {
  if (!products.length) return null

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-agricultural-green-600 mb-6 font-serif">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 3).map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            variant="grid"
          />
        ))}
      </div>
    </div>
  )
}