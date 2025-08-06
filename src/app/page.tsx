'use client'

import React, { useEffect, useState } from 'react'
import { PromoBanner } from '@/components/home/PromoBanner'
import { ProductGroupIcons } from '@/components/home/ProductGroupIcons'
import { bannerService, productGroupService } from '@/data/dataService'
import { PromoBanner as PromoBannerType, ProductGroup } from '@/data/types'
import { Loading } from '@/components/ui/Loading'

export default function Home() {
  const [banners, setBanners] = useState<PromoBannerType[]>([])
  const [productGroups, setProductGroups] = useState<ProductGroup[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const [bannersData, groupsData] = await Promise.all([
          bannerService.getActiveBanners(),
          productGroupService.getProductGroups()
        ])
        
        setBanners(bannersData)
        setProductGroups(groupsData)
      } catch (error) {
        console.error('Error loading home page data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadHomeData()
  }, [])

  if (loading) {
    return <Loading size="lg" text="Loading agricultural store..." fullScreen />
  }

  return (
    <div className="bg-gradient-to-b from-earth-beige to-white">
      {/* Hero Section with Promotional Banners */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-agricultural-green-600 mb-4 font-serif">
            Welcome to Agricultural Store
          </h1>
          <p className="text-xl text-dirt-brown-600 mb-8">
            Premium Farm Supplies & Equipment Since 1985
          </p>
        </div>
        
        {/* Promotional Banner Slider */}
        <PromoBanner banners={banners} autoSlideInterval={6000} />
      </section>

      {/* Product Group Icons - 15 categories */}
      <ProductGroupIcons 
        groups={productGroups}
        onGroupSelect={(groupId) => {
          window.location.href = `/products?group=${groupId}`
        }}
      />

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-agricultural-green-600 mb-4 font-serif">
              Why Choose Agricultural Store?
            </h2>
            <p className="text-dirt-brown-600 text-lg max-w-2xl mx-auto">
              We've been serving farmers and gardeners for decades with quality products and expert advice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border-2 border-agricultural-green-200 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-agricultural-green-600 mb-3">Quality Seeds</h3>
              <p className="text-dirt-brown-600">
                Premium seeds for all your farming needs - vegetables, fruits, grains, and herbs. 
                High germination rates guaranteed.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border-2 border-dirt-brown-200 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🔨</div>
              <h3 className="text-xl font-semibold text-dirt-brown-600 mb-3">Professional Tools</h3>
              <p className="text-agricultural-green-600">
                Professional-grade farming equipment and hand tools built to last. 
                From small gardens to large farms.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border-2 border-harvest-gold-200 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🧪</div>
              <h3 className="text-xl font-semibold text-harvest-gold-600 mb-3">Organic Solutions</h3>
              <p className="text-dirt-brown-600">
                Organic and synthetic fertilizers, pest control, and soil amendments 
                for healthy, productive crops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-agricultural-green-600 text-white p-12 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              🌾 Start Your Agricultural Journey Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Browse our extensive catalog of 50+ premium agricultural products. 
              From seeds to tools, we have everything you need to grow successfully.
            </p>
            <div className="space-x-4">
              <a 
                href="/products" 
                className="bg-harvest-gold-500 hover:bg-harvest-gold-600 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-block text-lg"
              >
                Shop All Products
              </a>
              <a 
                href="/products?category=seeds" 
                className="bg-white text-agricultural-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors inline-block text-lg"
              >
                Browse Seeds
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}