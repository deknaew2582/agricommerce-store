'use client'

import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { cartService, userService } from '@/data/dataService'

interface LayoutProps {
  children: React.ReactNode
  showHeader?: boolean
  showFooter?: boolean
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showHeader = true, 
  showFooter = true 
}) => {
  const [cartItemCount, setCartItemCount] = useState(0)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Load user and cart data
    const loadUserData = async () => {
      try {
        const currentUser = await userService.getCurrentUser()
        setUser(currentUser)
        
        const cart = await cartService.getCart()
        const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0)
        setCartItemCount(itemCount)
      } catch (error) {
        console.error('Error loading user data:', error)
      }
    }

    loadUserData()

    // Listen for cart updates
    const handleCartUpdate = () => {
      loadUserData()
    }

    window.addEventListener('cartUpdated', handleCartUpdate)
    return () => window.removeEventListener('cartUpdated', handleCartUpdate)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-earth-beige">
      {showHeader && <Header cartItemCount={cartItemCount} user={user} />}
      
      <main className="flex-1">
        {children}
      </main>
      
      {showFooter && <Footer />}
      
      {/* Demo Controls - only show in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border-2 border-harvest-gold-300 p-4 z-50">
          <div className="text-sm font-semibold text-harvest-gold-700 mb-3">
            🎯 Demo Controls
          </div>
          <div className="space-y-2">
            <button
              onClick={async () => {
                await userService.login('admin@agricultural-store.com', 'demo')
                window.location.href = '/admin'
              }}
              className="block w-full text-xs px-2 py-1 bg-agricultural-green-100 hover:bg-agricultural-green-200 text-agricultural-green-700 rounded"
            >
              Login as Admin
            </button>
            <button
              onClick={async () => {
                await userService.login('customer@example.com', 'demo')
                window.location.href = '/'
              }}
              className="block w-full text-xs px-2 py-1 bg-dirt-brown-100 hover:bg-dirt-brown-200 text-dirt-brown-700 rounded"
            >
              Login as Customer
            </button>
            <button
              onClick={async () => {
                await cartService.clearCart()
                await userService.logout()
                window.dispatchEvent(new CustomEvent('cartUpdated'))
                alert('Demo reset!')
                window.location.href = '/'
              }}
              className="block w-full text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded"
            >
              Reset Demo
            </button>
          </div>
        </div>
      )}
    </div>
  )
}