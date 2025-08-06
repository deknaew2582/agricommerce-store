'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Product } from '@/data/types'
import { productService, userService, adminService } from '@/data/dataService'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Loading } from '@/components/ui/Loading'
import { Badge, LowStockBadge, OutOfStockBadge } from '@/components/ui/Badge'

export default function InventoryPage() {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [editingStock, setEditingStock] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await userService.getCurrentUser()
        if (!currentUser || !currentUser.isAdmin) {
          router.push('/login')
          return
        }
        
        const productsData = await productService.getProducts()
        setProducts(productsData)
        setFilteredProducts(productsData)
      } catch (error) {
        console.error('Error loading inventory:', error)
        router.push('/login')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredProducts(filtered)
  }, [searchQuery, products])

  const updateStock = async (productId: string, newStock: number) => {
    try {
      await adminService.updateProductStock(productId, newStock)
      
      // Update local state
      const updatedProducts = products.map(product =>
        product.id === productId ? { ...product, stock: newStock } : product
      )
      setProducts(updatedProducts)
      
      // Clear editing state
      const newEditingStock = { ...editingStock }
      delete newEditingStock[productId]
      setEditingStock(newEditingStock)
      
      alert('Stock updated successfully!')
    } catch (error) {
      console.error('Error updating stock:', error)
      alert('Error updating stock')
    }
  }

  if (loading) {
    return <Loading size="lg" text="Loading inventory..." fullScreen />
  }

  return (
    <div className="min-h-screen bg-earth-beige py-8">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-agricultural-green-600 font-serif">
            📦 Inventory Management
          </h1>
          <p className="text-dirt-brown-600 mt-2">
            Manage your product inventory and stock levels
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Search products by name or SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <div className="text-sm text-dirt-brown-600 self-center">
              {filteredProducts.length} products found
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-agricultural-green-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-agricultural-green-700 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-agricultural-green-700 uppercase tracking-wider">
                    SKU
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-agricultural-green-700 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-agricultural-green-700 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-agricultural-green-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-agricultural-green-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={product.images[0]?.url || '/placeholder.jpg'}
                          alt={product.name}
                          className="w-10 h-10 object-cover rounded-md mr-3"
                        />
                        <div>
                          <div className="text-sm font-medium text-agricultural-green-700">
                            {product.name}
                          </div>
                          <div className="text-sm text-dirt-brown-600 truncate max-w-xs">
                            {product.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-dirt-brown-600">
                      {product.sku}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-agricultural-green-600">
                        ${product.salePrice || product.price}
                      </div>
                      {product.salePrice && (
                        <div className="text-xs text-gray-500 line-through">
                          ${product.price}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingStock[product.id] !== undefined ? (
                        <div className="flex items-center space-x-2">
                          <input
                            type="number"
                            value={editingStock[product.id]}
                            onChange={(e) => setEditingStock({
                              ...editingStock,
                              [product.id]: parseInt(e.target.value) || 0
                            })}
                            className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                            min="0"
                          />
                          <Button
                            size="sm"
                            onClick={() => updateStock(product.id, editingStock[product.id])}
                          >
                            Save
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                              const newEditingStock = { ...editingStock }
                              delete newEditingStock[product.id]
                              setEditingStock(newEditingStock)
                            }}
                          >
                            Cancel
                          </Button>
                        </div>
                      ) : (
                        <div
                          className="text-sm font-medium cursor-pointer hover:text-agricultural-green-600"
                          onClick={() => setEditingStock({
                            ...editingStock,
                            [product.id]: product.stock
                          })}
                        >
                          {product.stock} units
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.stock === 0 ? (
                        <OutOfStockBadge />
                      ) : product.stock <= 10 ? (
                        <LowStockBadge />
                      ) : (
                        <Badge variant="success">In Stock</Badge>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setEditingStock({
                          ...editingStock,
                          [product.id]: product.stock
                        })}
                      >
                        Edit Stock
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  )
}