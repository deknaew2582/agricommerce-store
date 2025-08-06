'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Cart, Product } from '@/data/types'
import { cartService, productService } from '@/data/dataService'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Loading } from '@/components/ui/Loading'

export default function CartPage() {
  const router = useRouter()
  const [cart, setCart] = useState<Cart | null>(null)
  const [products, setProducts] = useState<{ [key: string]: Product }>({})
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState<string | null>(null)

  useEffect(() => {
    loadCart()
  }, [])

  const loadCart = async () => {
    try {
      const cartData = await cartService.getCart()
      setCart(cartData)

      // Load product details for cart items
      const productPromises = cartData.items.map(item => 
        productService.getProductById(item.productId)
      )
      const productResults = await Promise.all(productPromises)
      
      const productMap: { [key: string]: Product } = {}
      productResults.forEach(product => {
        if (product) {
          productMap[product.id] = product
        }
      })
      setProducts(productMap)
    } catch (error) {
      console.error('Error loading cart:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateQuantity = async (itemId: string, newQuantity: number) => {
    setUpdating(itemId)
    try {
      const updatedCart = await cartService.updateCartItem(itemId, newQuantity)
      setCart(updatedCart)
      window.dispatchEvent(new CustomEvent('cartUpdated'))
    } catch (error) {
      console.error('Error updating cart:', error)
    } finally {
      setUpdating(null)
    }
  }

  const removeItem = async (itemId: string) => {
    setUpdating(itemId)
    try {
      const updatedCart = await cartService.removeFromCart(itemId)
      setCart(updatedCart)
      window.dispatchEvent(new CustomEvent('cartUpdated'))
    } catch (error) {
      console.error('Error removing item:', error)
    } finally {
      setUpdating(null)
    }
  }

  if (loading) {
    return <Loading size="lg" text="Loading your cart..." fullScreen />
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-earth-beige py-12">
        <Container>
          <div className="text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="text-3xl font-bold text-agricultural-green-600 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-dirt-brown-600 mb-8">
              Start shopping for quality agricultural products!
            </p>
            <Link href="/products">
              <Button size="lg">Browse Products</Button>
            </Link>
          </div>
        </Container>
      </div>
    )
  }

  const tax = cart.subtotal * 0.08 // 8% tax
  const shipping = cart.subtotal > 75 ? 0 : 9.99
  const total = cart.subtotal + tax + shipping

  return (
    <div className="min-h-screen bg-earth-beige py-8">
      <Container>
        <h1 className="text-3xl font-bold text-agricultural-green-600 mb-8 font-serif">
          🛒 Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map(item => {
              const product = products[item.productId]
              if (!product) return null

              return (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.images[0]?.url || '/placeholder.jpg'}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-agricultural-green-700">
                        {product.name}
                      </h3>
                      <p className="text-sm text-dirt-brown-600">
                        SKU: {product.sku}
                      </p>
                      <p className="text-lg font-bold text-agricultural-green-600">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <select
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        disabled={updating === item.id}
                        className="px-2 py-1 border border-gray-300 rounded"
                      >
                        {Array.from({ length: 10 }, (_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                      
                      <Button
                        onClick={() => removeItem(item.id)}
                        disabled={updating === item.id}
                        variant="ghost"
                        size="sm"
                      >
                        Remove
                      </Button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-agricultural-green-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold text-agricultural-green-600 mb-4">
              Order Summary
            </h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${cart.subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              
              {shipping === 0 && (
                <p className="text-sm text-green-600">
                  🎉 Free shipping on orders over $75!
                </p>
              )}
              
              <hr />
              
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-agricultural-green-600">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <Button
              onClick={() => router.push('/checkout')}
              className="w-full mt-6"
              size="lg"
            >
              Proceed to Checkout
            </Button>

            <Link href="/products" className="block text-center mt-4 text-dirt-brown-600 hover:text-agricultural-green-600">
              Continue Shopping
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}