'use client'

import React from 'react'
import Link from 'next/link'
import { ProductGroup } from '@/data/types'

interface ProductGroupIconsProps {
  groups: ProductGroup[]
  onGroupSelect?: (groupId: string) => void
}

export const ProductGroupIcons: React.FC<ProductGroupIconsProps> = ({
  groups,
  onGroupSelect
}) => {
  const handleGroupClick = (groupId: string) => {
    if (onGroupSelect) {
      onGroupSelect(groupId)
    }
  }

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-agricultural-green-600 mb-4 font-serif">
            🌾 Shop by Category
          </h2>
          <p className="text-dirt-brown-600 text-lg">
            Explore our comprehensive range of agricultural products
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4 md:gap-6">
          {groups.slice(0, 15).map((group) => (
            <Link
              key={group.id}
              href={`/products?group=${group.id}`}
              onClick={() => handleGroupClick(group.id)}
              className="group"
            >
              <div className="flex flex-col items-center p-4 rounded-lg border-2 border-gray-200 hover:border-agricultural-green-400 hover:shadow-lg transition-all duration-200 bg-white">
                {/* Icon */}
                <div className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {group.iconUrl}
                </div>
                
                {/* Name */}
                <h3 className="text-sm md:text-base font-semibold text-agricultural-green-700 text-center leading-tight group-hover:text-agricultural-green-800">
                  {group.name}
                </h3>
                
                {/* Description */}
                {group.description && (
                  <p className="text-xs text-dirt-brown-600 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {group.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-8">
          <Link
            href="/products"
            className="bg-agricultural-green-500 hover:bg-agricultural-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center space-x-2"
          >
            <span>View All Products</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}