'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/data/types'
import { Badge, SaleBadge, LowStockBadge, OutOfStockBadge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { cartService } from '@/data/dataService'

interface ProductCardProps {
  product: Product
  variant?: 'grid' | 'list'
  showQuickView?: boolean
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  variant = 'grid',
  showQuickView = false
}) => {
  const mainImage = product.images.find(img => img.isMain) || product.images[0]
  const isOnSale = product.salePrice && product.salePrice < product.price
  const isLowStock = product.stock > 0 && product.stock <= 10
  const isOutOfStock = product.stock === 0

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (isOutOfStock) return
    
    try {
      await cartService.addToCart(product.id, 1)
      // Dispatch custom event to update cart counter
      window.dispatchEvent(new CustomEvent('cartUpdated'))
      
      // Show success message (you could use a toast library here)
      alert(`${product.name} added to cart!`)
    } catch (error) {
      console.error('Error adding to cart:', error)
      alert('Error adding product to cart')
    }
  }

  if (variant === 'list') {
    return (
      <Link href={`/products/${product.id}`}>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow p-4">
          <div className="flex space-x-4">
            {/* Image */}
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src={mainImage?.url || '/placeholder-product.jpg'}
                alt={mainImage?.altText || product.name}
                fill
                className="object-cover rounded-md"
              />
              {/* Badges */}
              <div className="absolute top-1 left-1 space-y-1">
                {isOnSale && <SaleBadge />}
                {isOutOfStock && <OutOfStockBadge />}
                {isLowStock && !isOutOfStock && <LowStockBadge />}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-agricultural-green-700 mb-1 truncate">
                    {product.name}
                  </h3>
                  <p className="text-sm text-dirt-brown-600 mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold text-agricultural-green-600">
                      ${isOnSale ? product.salePrice : product.price}
                    </span>
                    {isOnSale && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.price}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">SKU: {product.sku}</p>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={handleAddToCart}
                  disabled={isOutOfStock}
                  size="sm"
                  className="ml-4"
                >
                  {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 overflow-hidden group">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={mainImage?.url || '/placeholder-product.jpg'}
            alt={mainImage?.altText || product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 space-y-1">
            {isOnSale && <SaleBadge />}
            {isOutOfStock && <OutOfStockBadge />}
            {isLowStock && !isOutOfStock && <LowStockBadge />}
          </div>

          {/* Quick View Button */}
          {showQuickView && (
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Button variant="outline" size="sm" className="bg-white">
                Quick View
              </Button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-agricultural-green-700 mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-sm text-dirt-brown-600 mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-agricultural-green-600">
                ${isOnSale ? product.salePrice : product.price}
              </span>
              {isOnSale && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.price}
                </span>
              )}
            </div>
            
            {/* Stock Status */}
            <div className="text-xs text-gray-500">
              {isOutOfStock ? 'Out of Stock' : `${product.stock} in stock`}
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className="w-full"
            size="sm"
          >
            {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
          </Button>

          {/* SKU */}
          <p className="text-xs text-gray-500 mt-2 text-center">
            SKU: {product.sku}
          </p>
        </div>
      </div>
    </Link>
  )
}