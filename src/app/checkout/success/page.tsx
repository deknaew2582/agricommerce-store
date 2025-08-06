import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-earth-beige flex items-center justify-center py-12">
      <Container size="sm">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-6xl mb-6">🎉</div>
          
          <h1 className="text-3xl font-bold text-agricultural-green-600 mb-4 font-serif">
            Order Placed Successfully!
          </h1>
          
          <p className="text-dirt-brown-600 mb-6">
            Thank you for your order! Your agricultural supplies will be shipped soon.
            You&apos;ll receive a confirmation email with tracking information.
          </p>
          
          <div className="bg-agricultural-green-50 border border-agricultural-green-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-agricultural-green-700 mb-2">
              What&apos;s Next?
            </h3>
            <ul className="text-sm text-agricultural-green-600 space-y-1">
              <li>• Order confirmation email sent</li>
              <li>• Processing within 1-2 business days</li>
              <li>• Tracking information will be provided</li>
              <li>• Free shipping on orders over $75</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <Link href="/products">
              <Button size="lg" className="w-full">
                Continue Shopping
              </Button>
            </Link>
            
            <Link href="/" className="block text-dirt-brown-600 hover:text-agricultural-green-600">
              Return to Home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}