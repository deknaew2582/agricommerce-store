'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Product } from '@/data/types'
import { productService, cartService } from '@/data/dataService'
import { ImageGallery } from '@/components/products/ImageGallery'
import { RelatedProducts } from '@/components/products/RelatedProducts'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge, SaleBadge, LowStockBadge, OutOfStockBadge, OrganicBadge } from '@/components/ui/Badge'
import { Loading, PageLoading } from '@/components/ui/Loading'

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params?.id as string
  
  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [addingToCart, setAddingToCart] = useState(false)

  useEffect(() => {
    const loadProductData = async () => {
      if (!productId) return
      
      try {
        const [productData, relatedData] = await Promise.all([
          productService.getProductById(productId),
          productService.getRelatedProducts(productId, 3)
        ])
        
        setProduct(productData)
        setRelatedProducts(relatedData)
      } catch (error) {
        console.error('Error loading product:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProductData()
  }, [productId])

  const handleAddToCart = async () => {
    if (!product || product.stock === 0) return
    
    setAddingToCart(true)
    try {
      await cartService.addToCart(product.id, quantity)
      // Dispatch custom event to update cart counter
      window.dispatchEvent(new CustomEvent('cartUpdated'))
      
      // Show success message
      alert(`${quantity} x ${product.name} added to cart!`)
    } catch (error) {
      console.error('Error adding to cart:', error)
      alert('Error adding product to cart')
    } finally {
      setAddingToCart(false)
    }
  }

  if (loading) {
    return <PageLoading message="Loading product details..." />
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-earth-beige flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🌾</div>
          <h1 className="text-2xl font-bold text-agricultural-green-600 mb-2">
            Product Not Found
          </h1>
          <p className="text-dirt-brown-600 mb-4">
            The product you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Button onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  const isOnSale = product.salePrice && product.salePrice < product.price
  const isLowStock = product.stock > 0 && product.stock <= 10
  const isOutOfStock = product.stock === 0
  const isOrganic = product.specifications.some(spec => 
    spec.name.toLowerCase().includes('organic') && spec.value.toLowerCase().includes('yes')
  )

  return (
    <div className="bg-earth-beige min-h-screen py-8">
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-dirt-brown-600">
            <li><a href="/" className="hover:text-agricultural-green-600">Home</a></li>
            <li>→</li>
            <li><a href="/products" className="hover:text-agricultural-green-600">Products</a></li>
            <li>→</li>
            <li className="text-agricultural-green-600 font-medium">{product.name}</li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Image Gallery */}
            <div>
              <ImageGallery images={product.images} productName={product.name} />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Title and Badges */}
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {isOnSale && <SaleBadge />}
                  {isOutOfStock && <OutOfStockBadge />}
                  {isLowStock && !isOutOfStock && <LowStockBadge />}
                  {isOrganic && <OrganicBadge />}
                </div>
                
                <h1 className="text-3xl font-bold text-agricultural-green-600 mb-2 font-serif">
                  {product.name}
                </h1>
                
                <p className="text-dirt-brown-600 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="border-t border-b border-gray-200 py-4">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-agricultural-green-600">
                    ${isOnSale ? product.salePrice : product.price}
                  </span>
                  {isOnSale && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.price}
                    </span>
                  )}
                  {isOnSale && (
                    <Badge variant="sale">
                      Save ${(product.price - (product.salePrice || 0)).toFixed(2)}
                    </Badge>
                  )}
                </div>
                
                <div className="mt-2 flex items-center space-x-4 text-sm">
                  <span className="text-gray-600">SKU: {product.sku}</span>
                  <span className={`font-medium ${
                    isOutOfStock ? 'text-red-600' : 
                    isLowStock ? 'text-orange-600' : 'text-green-600'
                  }`}>
                    {isOutOfStock ? 'Out of Stock' : 
                     isLowStock ? `Only ${product.stock} left!` : 
                     `${product.stock} in stock`}
                  </span>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="font-medium text-agricultural-green-700">
                    Quantity:
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    disabled={isOutOfStock}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agricultural-green-500"
                  >
                    {Array.from({ length: Math.min(10, product.stock) }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <Button
                  onClick={handleAddToCart}
                  disabled={isOutOfStock || addingToCart}
                  size="lg"
                  className="w-full"
                >
                  {addingToCart ? 'Adding to Cart...' : 
                   isOutOfStock ? 'Out of Stock' : 
                   `Add ${quantity} to Cart - $${((isOnSale ? product.salePrice! : product.price) * quantity).toFixed(2)}`}
                </Button>
              </div>

              {/* Product Specifications */}
              {product.specifications.length > 0 && (
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-agricultural-green-700 mb-4">
                    Product Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-dirt-brown-700">{spec.name}:</span>
                        <span className="text-dirt-brown-600">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Info */}
              <div className="bg-agricultural-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-agricultural-green-700 mb-2">
                  🚚 Shipping & Returns
                </h4>
                <ul className="text-sm text-dirt-brown-600 space-y-1">
                  <li>• Free shipping on orders over $75</li>
                  <li>• 30-day return policy</li>
                  <li>• Expert agricultural support available</li>
                  <li>• Satisfaction guaranteed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts 
          products={relatedProducts}
          title="You might also like"
        />
      </Container>
    </div>
  )
}