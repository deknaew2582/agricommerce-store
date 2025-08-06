'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { userService } from '@/data/dataService'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Container } from '@/components/ui/Container'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const user = await userService.login(formData.email, formData.password)
      if (user) {
        // Redirect based on user role
        if (user.isAdmin) {
          router.push('/admin')
        } else {
          router.push('/')
        }
      } else {
        setError('Invalid email or password')
      }
    } catch (error) {
      setError('Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-earth-beige flex items-center justify-center py-12">
      <Container size="sm">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-agricultural-green-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
              🌱
            </div>
            <h1 className="text-2xl font-bold text-agricultural-green-600 font-serif">
              Sign In to Agricultural Store
            </h1>
            <p className="text-dirt-brown-600 mt-2">
              Access your account to manage orders and preferences
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="bg-harvest-gold-50 border border-harvest-gold-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-harvest-gold-800 mb-2">Demo Credentials:</h3>
            <div className="text-sm text-harvest-gold-700 space-y-1">
              <p><strong>Admin:</strong> admin@agricultural-store.com / any password</p>
              <p><strong>Customer:</strong> customer@example.com / any password</p>
              <p><em>Or use any email address to create a new demo account</em></p>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="Enter your email"
            />

            <Input
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              placeholder="Enter your password"
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full"
              size="lg"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-dirt-brown-600">
              Don't have an account?{' '}
              <Link href="/register" className="text-agricultural-green-600 hover:text-agricultural-green-700 font-medium">
                Sign up here
              </Link>
            </p>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link href="/" className="text-dirt-brown-600 hover:text-agricultural-green-600">
                ← Back to Store
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}