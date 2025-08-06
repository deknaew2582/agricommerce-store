'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { userService, adminService } from '@/data/dataService'
import { Container } from '@/components/ui/Container'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Loading } from '@/components/ui/Loading'

export default function SalesDashboard() {
  const router = useRouter()
  const [metrics, setMetrics] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [dateRange, setDateRange] = useState('all')

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await userService.getCurrentUser()
        if (!currentUser || !currentUser.isAdmin) {
          router.push('/login')
          return
        }
        
        const metricsData = await adminService.getSalesMetrics()
        setMetrics(metricsData)
      } catch (error) {
        console.error('Error loading sales data:', error)
        router.push('/login')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (loading) {
    return <Loading size="lg" text="Loading sales dashboard..." fullScreen />
  }

  if (!metrics) {
    return null
  }

  return (
    <div className="min-h-screen bg-earth-beige py-8">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-agricultural-green-600 font-serif">
            📊 Sales Dashboard
          </h1>
          <p className="text-dirt-brown-600 mt-2">
            Track your store's performance and sales analytics
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">💰</div>
              <div className="text-3xl font-bold text-agricultural-green-600 mb-2">
                ${metrics.totalRevenue.toLocaleString()}
              </div>
              <div className="text-dirt-brown-600">Total Revenue</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">📦</div>
              <div className="text-3xl font-bold text-agricultural-green-600 mb-2">
                {metrics.totalOrders.toLocaleString()}
              </div>
              <div className="text-dirt-brown-600">Total Orders</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">📈</div>
              <div className="text-3xl font-bold text-agricultural-green-600 mb-2">
                ${metrics.averageOrderValue.toFixed(2)}
              </div>
              <div className="text-dirt-brown-600">Average Order Value</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sales by Category */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold text-agricultural-green-600">
                Sales by Category
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {metrics.salesByCategory.map((category: any) => (
                  <div key={category.categoryId} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-agricultural-green-700">
                        {category.categoryName}
                      </span>
                      <span className="text-dirt-brown-600">
                        ${category.revenue.toLocaleString()} ({category.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-agricultural-green-500 h-2 rounded-full"
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold text-agricultural-green-600">
                Top Selling Products
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {metrics.topSellingProducts.map((product: any, index: number) => (
                  <div key={product.productId} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-agricultural-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-agricultural-green-700">
                          {product.productName}
                        </div>
                        <div className="text-sm text-dirt-brown-600">
                          {product.quantitySold} units sold
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-agricultural-green-600">
                        ${product.revenue.toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sales Over Time */}
        <Card className="mt-8">
          <CardHeader>
            <h2 className="text-xl font-bold text-agricultural-green-600">
              Sales Over Time
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {metrics.salesByPeriod.map((period: any) => (
                <div key={period.period} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-agricultural-green-700">
                      {new Date(period.period + '-01').toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long' 
                      })}
                    </div>
                    <div className="text-sm text-dirt-brown-600">
                      {period.orders} orders
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-agricultural-green-600">
                      ${period.revenue.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}