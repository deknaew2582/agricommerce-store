'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { userService } from '@/data/dataService'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Container } from '@/components/ui/Container'

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    try {
      const user = await userService.register(formData)
      if (user) {
        router.push('/')
      }
    } catch (error) {
      setError('Registration failed. Please try again.')
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
              Join Agricultural Store
            </h1>
            <p className="text-dirt-brown-600 mt-2">
              Create your account to start shopping for quality farm supplies
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="First Name"
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
                placeholder="Enter your first name"
              />

              <Input
                label="Last Name"
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
                placeholder="Enter your last name"
              />
            </div>

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
              placeholder="Create a password"
            />

            <Input
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
              placeholder="Confirm your password"
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full"
              size="lg"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-dirt-brown-600">
              Already have an account?{' '}
              <Link href="/login" className="text-agricultural-green-600 hover:text-agricultural-green-700 font-medium">
                Sign in here
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