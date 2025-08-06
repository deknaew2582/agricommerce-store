'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Cart } from '@/data/types'
import { cartService } from '@/data/dataService'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Container } from '@/components/ui/Container'
import { Loading } from '@/components/ui/Loading'

export default function CheckoutPage() {
  const router = useRouter()
  const [cart, setCart] = useState<Cart | null>(null)
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)
  
  const [formData, setFormData] = useState({
    // Shipping Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Payment Info (demo)
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  })

  useEffect(() => {
    loadCart()
  }, [])

  const loadCart = async () => {
    try {
      const cartData = await cartService.getCart()
      if (!cartData || cartData.items.length === 0) {
        router.push('/cart')
        return
      }
      setCart(cartData)
    } catch (error) {
      console.error('Error loading cart:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)

    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Clear cart
      await cartService.clearCart()
      window.dispatchEvent(new CustomEvent('cartUpdated'))
      
      // Redirect to success page
      router.push('/checkout/success')
    } catch (error) {
      console.error('Error processing order:', error)
      alert('Error processing order. Please try again.')
    } finally {
      setProcessing(false)
    }
  }

  if (loading) {
    return <Loading size="lg" text="Loading checkout..." fullScreen />
  }

  if (!cart) {
    return null
  }

  const tax = cart.subtotal * 0.08
  const shipping = cart.subtotal > 75 ? 0 : 9.99
  const total = cart.subtotal + tax + shipping

  return (
    <div className="min-h-screen bg-earth-beige py-8">
      <Container>
        <h1 className="text-3xl font-bold text-agricultural-green-600 mb-8 font-serif">
          🛒 Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="space-y-8">
              {/* Shipping Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-agricultural-green-600 mb-4">
                  Shipping Information
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                  <Input
                    label="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <Input
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Input
                    label="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                
                <Input
                  label="Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                  className="mt-4"
                />
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                  <Input
                    label="City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                  <Input
                    label="State"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    required
                  />
                  <Input
                    label="ZIP Code"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-agricultural-green-600 mb-4">
                  Payment Information
                </h2>
                
                <div className="bg-harvest-gold-50 border border-harvest-gold-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-harvest-gold-800">
                    <strong>Demo Mode:</strong> This is a demo checkout. No real payment will be processed.
                    Use any card number for testing.
                  </p>
                </div>
                
                <Input
                  label="Card Number"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                  placeholder="1234 5678 9012 3456"
                  required
                />
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Input
                    label="Expiry Date"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                    placeholder="MM/YY"
                    required
                  />
                  <Input
                    label="CVV"
                    value={formData.cvv}
                    onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                    placeholder="123"
                    required
                  />
                </div>
                
                <Input
                  label="Name on Card"
                  value={formData.cardName}
                  onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                  required
                  className="mt-4"
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6 h-fit">
              <h2 className="text-xl font-bold text-agricultural-green-600 mb-4">
                Order Summary
              </h2>
              
              {/* Cart Items */}
              <div className="space-y-3 mb-4">
                {cart.items.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.quantity}x Item</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <hr className="mb-4" />
              
              <div className="space-y-2">
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
                
                <hr />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-agricultural-green-600">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <Button
                type="submit"
                disabled={processing}
                className="w-full mt-6"
                size="lg"
              >
                {processing ? 'Processing Order...' : `Place Order - $${total.toFixed(2)}`}
              </Button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  )
}