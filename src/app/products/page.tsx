'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Product, ProductCategory, ProductGroup } from '@/data/types'
import { productService, categoryService, productGroupService } from '@/data/dataService'
import { ProductFilters } from '@/components/products/ProductFilters'
import { ProductGrid } from '@/components/products/ProductGrid'
import { Container } from '@/components/ui/Container'
import { Loading } from '@/components/ui/Loading'

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<ProductCategory[]>([])
  const [groups, setGroups] = useState<ProductGroup[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('name')
  
  const [filters, setFilters] = useState({
    categoryId: searchParams?.get('category') || undefined,
    groupId: searchParams?.get('group') || undefined,
    subGroupId: searchParams?.get('subGroup') || undefined,
    search: searchParams?.get('search') || undefined,
    minPrice: undefined as number | undefined,
    maxPrice: undefined as number | undefined,
    inStock: undefined as boolean | undefined
  })

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const [categoriesData, groupsData] = await Promise.all([
          categoryService.getCategories(),
          productGroupService.getProductGroups()
        ])
        
        setCategories(categoriesData)
        setGroups(groupsData)
      } catch (error) {
        console.error('Error loading initial data:', error)
      }
    }

    loadInitialData()
  }, [])

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true)
      try {
        const productsData = await productService.getProducts({
          ...filters,
          search: searchQuery || filters.search
        })
        
        // Sort products
        const sortedProducts = [...productsData].sort((a, b) => {
          switch (sortBy) {
            case 'price-low':
              return (a.salePrice || a.price) - (b.salePrice || b.price)
            case 'price-high':
              return (b.salePrice || b.price) - (a.salePrice || a.price)
            case 'name':
            default:
              return a.name.localeCompare(b.name)
          }
        })
        
        setProducts(sortedProducts)
      } catch (error) {
        console.error('Error loading products:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [filters, searchQuery, sortBy])

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters)
  }

  const handleClearFilters = () => {
    setFilters({
      categoryId: undefined,
      groupId: undefined,
      subGroupId: undefined,
      search: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      inStock: undefined
    })
    setSearchQuery('')
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search is handled by useEffect when searchQuery changes
  }

  return (
    <div className="bg-earth-beige min-h-screen py-8">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-agricultural-green-600 mb-4 font-serif">
            🌾 Agricultural Products
          </h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex max-w-2xl">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-agricultural-green-200 rounded-l-lg focus:outline-none focus:border-agricultural-green-500"
              />
              <button
                type="submit"
                className="bg-agricultural-green-500 hover:bg-agricultural-green-600 text-white px-6 py-3 rounded-r-lg transition-colors"
              >
                🔍 Search
              </button>
            </div>
          </form>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-dirt-brown-600 text-sm">
                {loading ? 'Loading...' : `${products.length} products found`}
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agricultural-green-500 text-sm"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>

              {/* View Mode */}
              <div className="flex border border-gray-300 rounded-md overflow-hidden w-full sm:w-auto">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 sm:flex-none px-3 py-2 text-sm ${
                    viewMode === 'grid'
                      ? 'bg-agricultural-green-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 sm:flex-none px-3 py-2 text-sm ${
                    viewMode === 'list'
                      ? 'bg-agricultural-green-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ProductFilters
              categories={categories}
              groups={groups}
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <ProductGrid
              products={products}
              loading={loading}
              viewMode={viewMode}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}