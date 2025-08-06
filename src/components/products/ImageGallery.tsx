'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ProductImage } from '@/data/types'

interface ImageGalleryProps {
  images: ProductImage[]
  productName: string
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  productName
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  if (!images.length) return null

  const selectedImage = images[selectedImageIndex]

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={selectedImage.url}
          alt={selectedImage.altText}
          fill
          className={`object-cover transition-transform duration-300 ${
            isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setSelectedImageIndex(
                selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1
              )}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
            >
              ←
            </button>
            <button
              onClick={() => setSelectedImageIndex(
                selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1
              )}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
            >
              →
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
          {selectedImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all ${
                index === selectedImageIndex
                  ? 'border-agricultural-green-500 ring-2 ring-agricultural-green-200'
                  : 'border-gray-200 hover:border-agricultural-green-300'
              }`}
            >
              <Image
                src={image.url}
                alt={image.altText}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Zoom Hint */}
      <p className="text-xs text-gray-500 text-center">
        Click on main image to zoom
      </p>
    </div>
  )
}