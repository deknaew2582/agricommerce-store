import React from 'react'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dirt-brown-700 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-agricultural-green-500 rounded-full flex items-center justify-center text-white text-xl">
                🌱
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif">Agricultural Store</h3>
                <p className="text-sm text-earth-beige">Premium Farm Supplies</p>
              </div>
            </div>
            <p className="text-earth-beige mb-4">
              Your trusted partner in agriculture since 1985. We provide quality seeds, tools, 
              and supplies to help farmers and gardeners grow successfully.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-harvest-gold-400 hover:text-harvest-gold-300 text-xl">📘</a>
              <a href="#" className="text-harvest-gold-400 hover:text-harvest-gold-300 text-xl">📷</a>
              <a href="#" className="text-harvest-gold-400 hover:text-harvest-gold-300 text-xl">🐦</a>
              <a href="#" className="text-harvest-gold-400 hover:text-harvest-gold-300 text-xl">📺</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-harvest-gold-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-earth-beige hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=seeds" className="text-earth-beige hover:text-white transition-colors">
                  Seeds & Plants
                </Link>
              </li>
              <li>
                <Link href="/products?category=tools" className="text-earth-beige hover:text-white transition-colors">
                  Farm Tools
                </Link>
              </li>
              <li>
                <Link href="/products?category=fertilizers" className="text-earth-beige hover:text-white transition-colors">
                  Fertilizers
                </Link>
              </li>
              <li>
                <Link href="/products?category=irrigation" className="text-earth-beige hover:text-white transition-colors">
                  Irrigation Systems
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-earth-beige hover:text-white transition-colors">
                  Special Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-harvest-gold-400">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-earth-beige hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-earth-beige hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-earth-beige hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-earth-beige hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-earth-beige hover:text-white transition-colors">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-earth-beige hover:text-white transition-colors">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-harvest-gold-400">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-harvest-gold-400 mt-1">📍</span>
                <div>
                  <p className="text-earth-beige">
                    123 Farm Supply Road<br />
                    Agricultural Valley, AV 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-harvest-gold-400">📞</span>
                <p className="text-earth-beige">1-800-FARM-HELP</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-harvest-gold-400">📧</span>
                <p className="text-earth-beige">support@agricultural-store.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-harvest-gold-400">🕒</span>
                <div>
                  <p className="text-earth-beige">Mon-Fri: 7AM-7PM</p>
                  <p className="text-earth-beige">Sat: 8AM-5PM</p>
                  <p className="text-earth-beige">Sun: 10AM-4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-dirt-brown-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-harvest-gold-400 mb-2">
                🌾 Stay Updated with Agricultural Tips & Deals
              </h4>
              <p className="text-earth-beige">
                Get the latest farming advice, seasonal tips, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 md:w-80 px-4 py-2 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-agricultural-green-500"
              />
              <button className="bg-agricultural-green-500 hover:bg-agricultural-green-600 text-white px-6 py-2 rounded-r-lg transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-dirt-brown-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-earth-beige">
            <div className="mb-2 md:mb-0">
              <p>&copy; 2024 Agricultural Store. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}