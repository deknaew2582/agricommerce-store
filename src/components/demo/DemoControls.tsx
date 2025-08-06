'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { cartService, userService } from '@/data/dataService'

export const DemoControls: React.FC = () => {
  const resetDemo = async () => {
    try {
      await cartService.clearCart()
      await userService.logout()
      window.dispatchEvent(new CustomEvent('cartUpdated'))
      alert('Demo data reset successfully!')
      window.location.href = '/'
    } catch (error) {
      console.error('Error resetting demo:', error)
      alert('Error resetting demo data')
    }
  }

  const loginAsAdmin = async () => {
    try {
      await userService.login('admin@agricultural-store.com', 'demo')
      window.location.href = '/admin'
    } catch (error) {
      console.error('Error logging in as admin:', error)
    }
  }

  const loginAsCustomer = async () => {
    try {
      await userService.login('customer@example.com', 'demo')
      window.location.href = '/'
    } catch (error) {
      console.error('Error logging in as customer:', error)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border-2 border-harvest-gold-300 p-4 z-50">
      <div className="text-sm font-semibold text-harvest-gold-700 mb-3">
        🎯 Demo Controls
      </div>
      <div className="space-y-2">
        <Button
          onClick={loginAsAdmin}
          size="sm"
          variant="outline"
          className="w-full text-xs"
        >
          Login as Admin
        </Button>
        <Button
          onClick={loginAsCustomer}
          size="sm"
          variant="outline"
          className="w-full text-xs"
        >
          Login as Customer
        </Button>
        <Button
          onClick={resetDemo}
          size="sm"
          variant="ghost"
          className="w-full text-xs"
        >
          Reset Demo
        </Button>
      </div>
    </div>
  )
}