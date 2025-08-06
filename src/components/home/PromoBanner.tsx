'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PromoBanner as PromoBannerType } from '@/data/types'

interface PromoBannerProps {
  banners: PromoBannerType[]
  autoSlideInterval?: number
}

export const PromoBanner: React.FC<PromoBannerProps> = ({
  banners,
  autoSlideInterval = 5000
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying || banners.length <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [banners.length, autoSlideInterval, isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  if (!banners.length) return null

  return (
    <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
      {/* Banner Images */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Link href={banner.linkUrl}>
            <div className="relative w-full h-full bg-gradient-to-r from-agricultural-green-600 to-dirt-brown-600">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url(${banner.imageUrl})` }}
              />
              
              {/* Content Overlay */}
              <div className="relative z-10 flex items-center justify-center h-full text-center text-white p-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
                    {banner.title}
                  </h2>
                  {banner.subtitle && (
                    <p className="text-lg md:text-xl mb-6 opacity-90">
                      {banner.subtitle}
                    </p>
                  )}
                  <div className="bg-harvest-gold-500 hover:bg-harvest-gold-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block">
                    Shop Now →
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}

      {/* Navigation Arrows */}
      {banners.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
          >
            ←
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
          >
            →
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {banners.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-harvest-gold-400'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      )}

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full text-sm transition-all"
          title={isAutoPlaying ? 'Pause slideshow' : 'Resume slideshow'}
        >
          {isAutoPlaying ? '⏸️' : '▶️'}
        </button>
      </div>
    </div>
  )
}