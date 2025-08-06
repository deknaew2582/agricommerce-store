'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { userService, adminService } from '@/data/dataService'
import { Container } from '@/components/ui/Container'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Loading } from '@/components/ui/Loading'

export default function AdminDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [metrics, setMetrics] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await userService.getCurrentUser()
        if (!currentUser || !currentUser.isAdmin) {
          router.push('/login')
          return
        }
        
        setUser(currentUser)
        const metricsData = await adminService.getSalesMetrics()
        setMetrics(metricsData)
      } catch (error) {
        console.error('Error loading admin data:', error)
        router.push('/login')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (loading) {
    return <Loading size="lg" text="Loading admin dashboard..." fullScreen />
  }

  if (!user || !user.isAdmin) {
    return null
  }

  return (
    <div className="min-h-screen bg-earth-beige py-8">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-agricultural-green-600 font-serif">
            🌾 Admin Dashboard
          </h1>
          <p className="text-dirt-brown-600 mt-2">
            Welcome back, {user.firstName}! Here&apos;s your store overview.
          </p>
        </div>

        {/* Quick Stats */}
        {metrics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-2xl font-bold text-agricultural-green-600">
                  ${metrics.totalRevenue.toLocaleString()}
                </div>
                <div className="text-sm text-dirt-brown-600">Total Revenue</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">📦</div>
                <div className="text-2xl font-bold text-agricultural-green-600">
                  {metrics.totalOrders.toLocaleString()}
                </div>
                <div className="text-sm text-dirt-brown-600">Total Orders</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">📊</div>
                <div className="text-2xl font-bold text-agricultural-green-600">
                  ${metrics.averageOrderValue.toFixed(2)}
                </div>
                <div className="text-sm text-dirt-brown-600">Avg Order Value</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">🌱</div>
                <div className="text-2xl font-bold text-agricultural-green-600">
                  50+
                </div>
                <div className="text-sm text-dirt-brown-600">Products</div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Admin Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link href="/admin/inventory">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-semibold text-agricultural-green-600 mb-2">
                  Inventory Management
                </h3>
                <p className="text-dirt-brown-600">
                  Manage products, stock levels, and pricing
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/sales">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-agricultural-green-600 mb-2">
                  Sales Dashboard
                </h3>
                <p className="text-dirt-brown-600">
                  View sales analytics and reports
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/orders">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-semibold text-agricultural-green-600 mb-2">
                  Order Management
                </h3>
                <p className="text-dirt-brown-600">
                  Process and track customer orders
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Top Selling Products */}
        {metrics && metrics.topSellingProducts && (
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold text-agricultural-green-600">
                Top Selling Products
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {metrics.topSellingProducts.map((product: any, index: number) => (
                  <div key={product.productId} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-agricultural-green-500 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-agricultural-green-700">
                          {product.productName}
                        </h4>
                        <p className="text-sm text-dirt-brown-600">
                          {product.quantitySold} units sold
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-agricultural-green-600">
                        ${product.revenue.toFixed(2)}
                      </div>
                      <div className="text-sm text-dirt-brown-600">Revenue</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </Container>
    </div>
  )
}