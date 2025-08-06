'use client'

import React, { useState } from 'react'
import { ProductCategory, ProductGroup } from '@/data/types'

interface ProductFiltersProps {
  categories: ProductCategory[]
  groups: ProductGroup[]
  filters: {
    categoryId?: string
    groupId?: string
    subGroupId?: string
    search?: string
    minPrice?: number
    maxPrice?: number
    inStock?: boolean
  }
  onFilterChange: (filters: any) => void
  onClearFilters: () => void
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  groups,
  filters,
  onFilterChange,
  onClearFilters
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [priceRange, setPriceRange] = useState({
    min: filters.minPrice || '',
    max: filters.maxPrice || ''
  })

  const selectedGroup = groups.find(g => g.id === filters.groupId)

  const handleCategoryChange = (categoryId: string) => {
    onFilterChange({ ...filters, categoryId: categoryId || undefined, groupId: undefined, subGroupId: undefined })
  }

  const handleGroupChange = (groupId: string) => {
    onFilterChange({ ...filters, groupId: groupId || undefined, subGroupId: undefined })
  }

  const handleSubGroupChange = (subGroupId: string) => {
    onFilterChange({ ...filters, subGroupId: subGroupId || undefined })
  }

  const handlePriceChange = () => {
    onFilterChange({
      ...filters,
      minPrice: priceRange.min ? parseFloat(priceRange.min) : undefined,
      maxPrice: priceRange.max ? parseFloat(priceRange.max) : undefined
    })
  }

  const handleInStockChange = (inStock: boolean) => {
    onFilterChange({ ...filters, inStock: inStock || undefined })
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== undefined && value !== '')

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden p-4 border-b border-gray-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="font-medium text-agricultural-green-700">Filters</span>
          <span className="text-agricultural-green-600">{isOpen ? '−' : '+'}</span>
        </button>
      </div>

      {/* Filter Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block p-4 space-y-6`}>
        {/* Clear Filters */}
        {hasActiveFilters && (
          <div className="pb-4 border-b border-gray-200">
            <button
              onClick={onClearFilters}
              className="text-sm text-dirt-brown-600 hover:text-dirt-brown-800 underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Category Filter */}
        <div>
          <h3 className="font-semibold text-agricultural-green-700 mb-3">Category</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="category"
                checked={!filters.categoryId}
                onChange={() => handleCategoryChange('')}
                className="mr-2 text-agricultural-green-500"
              />
              <span className="text-sm">All Categories</span>
            </label>
            {categories.map(category => (
              <label key={category.id} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  checked={filters.categoryId === category.id}
                  onChange={() => handleCategoryChange(category.id)}
                  className="mr-2 text-agricultural-green-500"
                />
                <span className="text-sm">{category.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Product Group Filter */}
        <div>
          <h3 className="font-semibold text-agricultural-green-700 mb-3">Product Group</h3>
          <select
            value={filters.groupId || ''}
            onChange={(e) => handleGroupChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agricultural-green-500"
          >
            <option value="">All Groups</option>
            {groups.map(group => (
              <option key={group.id} value={group.id}>
                {group.iconUrl} {group.name}
              </option>
            ))}
          </select>
        </div>

        {/* Sub-Group Filter */}
        {selectedGroup && selectedGroup.subGroups.length > 0 && (
          <div>
            <h3 className="font-semibold text-agricultural-green-700 mb-3">Sub-Group</h3>
            <select
              value={filters.subGroupId || ''}
              onChange={(e) => handleSubGroupChange(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agricultural-green-500"
            >
              <option value="">All Sub-Groups</option>
              {selectedGroup.subGroups.map(subGroup => (
                <option key={subGroup.id} value={subGroup.id}>
                  {subGroup.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Price Range Filter */}
        <div>
          <h3 className="font-semibold text-agricultural-green-700 mb-3">Price Range</h3>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={priceRange.min}
              onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
              onBlur={handlePriceChange}
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agricultural-green-500"
            />
            <span className="self-center text-gray-500">-</span>
            <input
              type="number"
              placeholder="Max"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
              onBlur={handlePriceChange}
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agricultural-green-500"
            />
          </div>
        </div>

        {/* Stock Filter */}
        <div>
          <h3 className="font-semibold text-agricultural-green-700 mb-3">Availability</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.inStock || false}
              onChange={(e) => handleInStockChange(e.target.checked)}
              className="mr-2 text-agricultural-green-500"
            />
            <span className="text-sm">In Stock Only</span>
          </label>
        </div>
      </div>
    </div>
  )
}