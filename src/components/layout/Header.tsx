'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

interface HeaderProps {
  cartItemCount?: number
  user?: any
}

export const Header: React.FC<HeaderProps> = ({ cartItemCount = 0, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <header className="bg-white shadow-lg border-b-4 border-agricultural-green-500">
      {/* Top Bar */}
      <div className="bg-agricultural-green-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="hidden sm:inline">📞 1-800-FARM-HELP</span>
              <span className="sm:hidden">📞 Call Us</span>
              <span className="hidden md:inline">📧 support@agricultural-store.com</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="hidden sm:inline">🚚 Free Shipping on Orders ฿2500+</span>
              <span className="sm:hidden">🚚 Free Ship ฿2500+</span>
              {user ? (
                <span className="hidden sm:inline">Welcome, {user.firstName}!</span>
              ) : (
                <Link href="/login" className="hover:text-harvest-gold-400">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-agricultural-green-500 rounded-full flex items-center justify-center text-white text-2xl">
              🌱
            </div>
            <div>
              <h1 className="text-2xl font-bold text-agricultural-green-600 font-serif">
                Agricultural Store
              </h1>
              <p className="text-sm text-dirt-brown-600">Premium Farm Supplies</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for seeds, tools, fertilizers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pr-12 border-2 border-agricultural-green-200 rounded-lg focus:outline-none focus:border-agricultural-green-500 focus:ring-2 focus:ring-agricultural-green-200"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-agricultural-green-500 text-white p-2 rounded-md hover:bg-agricultural-green-600 transition-colors"
              >
                🔍
              </button>
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {user?.isAdmin && (
              <Link href="/admin">
                <Button variant="outline" size="sm">
                  Admin Panel
                </Button>
              </Link>
            )}
            
            <Link href="/cart" className="relative">
              <Button variant="outline" className="flex items-center space-x-2">
                <span>🛒</span>
                <span>Cart</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-harvest-gold-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Top Row: Logo and Menu/Cart */}
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-agricultural-green-500 rounded-full flex items-center justify-center text-white text-xl">
                🌱
              </div>
              <div>
                <h1 className="text-lg font-bold text-agricultural-green-600 font-serif">
                  Agricultural Store
                </h1>
                <p className="text-xs text-dirt-brown-600">Premium Farm Supplies</p>
              </div>
            </Link>

            <div className="flex items-center space-x-2">
              {user?.isAdmin && (
                <Link href="/admin">
                  <Button variant="outline" size="sm" className="text-xs px-2 py-1">
                    Admin
                  </Button>
                </Link>
              )}
              
              <Link href="/cart" className="relative">
                <Button variant="outline" size="sm" className="flex items-center space-x-1">
                  <span>🛒</span>
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-harvest-gold-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Button>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-agricultural-green-600"
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          {/* Search Bar Row */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pr-12 border-2 border-agricultural-green-200 rounded-lg focus:outline-none focus:border-agricultural-green-500 focus:ring-2 focus:ring-agricultural-green-200"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-agricultural-green-500 text-white p-1.5 rounded-md hover:bg-agricultural-green-600 transition-colors"
            >
              🔍
            </button>
          </form>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-agricultural-green-50 border-t border-agricultural-green-200">
        <div className="container mx-auto px-4">
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 py-4">
              <li>
                <Link 
                  href="/" 
                  className="block py-2 px-4 text-agricultural-green-700 hover:text-agricultural-green-900 hover:bg-agricultural-green-100 rounded-md transition-colors font-medium"
                >
                  🏠 Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="block py-2 px-4 text-agricultural-green-700 hover:text-agricultural-green-900 hover:bg-agricultural-green-100 rounded-md transition-colors font-medium"
                >
                  🌾 All Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=seeds" 
                  className="block py-2 px-4 text-agricultural-green-700 hover:text-agricultural-green-900 hover:bg-agricultural-green-100 rounded-md transition-colors font-medium"
                >
                  🌱 Seeds
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=tools" 
                  className="block py-2 px-4 text-agricultural-green-700 hover:text-agricultural-green-900 hover:bg-agricultural-green-100 rounded-md transition-colors font-medium"
                >
                  🔨 Tools
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=fertilizers" 
                  className="block py-2 px-4 text-agricultural-green-700 hover:text-agricultural-green-900 hover:bg-agricultural-green-100 rounded-md transition-colors font-medium"
                >
                  🧪 Fertilizers
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=irrigation" 
                  className="block py-2 px-4 text-agricultural-green-700 hover:text-agricultural-green-900 hover:bg-agricultural-green-100 rounded-md transition-colors font-medium"
                >
                  💧 Irrigation
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block py-2 px-4 text-agricultural-green-700 hover:text-agricultural-green-900 hover:bg-agricultural-green-100 rounded-md transition-colors font-medium"
                >
                  ℹ️ About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block py-2 px-4 text-agricultural-green-700 hover:text-agricultural-green-900 hover:bg-agricultural-green-100 rounded-md transition-colors font-medium"
                >
                  📞 Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}