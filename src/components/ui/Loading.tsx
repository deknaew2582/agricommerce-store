import React from 'react'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  fullScreen?: boolean
}

export const Loading: React.FC<LoadingProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Agricultural-themed loading animation */}
      <div className="relative">
        <div className={`${sizeClasses[size]} border-4 border-agricultural-green-200 border-t-agricultural-green-500 rounded-full animate-spin`} />
        <div className="absolute inset-0 flex items-center justify-center text-agricultural-green-500">
          🌱
        </div>
      </div>
      
      {text && (
        <p className={`text-agricultural-green-600 font-medium ${textSizeClasses[size]}`}>
          {text}
        </p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-earth-beige bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <LoadingSpinner />
        </div>
      </div>
    )
  }

  return <LoadingSpinner />
}

// Inline loading component for buttons
export const ButtonLoading: React.FC = () => (
  <div className="flex items-center space-x-2">
    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
    <span>Loading...</span>
  </div>
)

// Page loading component
export const PageLoading: React.FC<{ message?: string }> = ({ 
  message = 'Loading page...' 
}) => (
  <div className="min-h-screen bg-earth-beige flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-agricultural-green-200 border-t-agricultural-green-500 rounded-full animate-spin mx-auto mb-4" />
      <div className="text-4xl mb-4">🌾</div>
      <p className="text-xl text-agricultural-green-600 font-medium">{message}</p>
      <p className="text-dirt-brown-600 mt-2">Please wait while we prepare your agricultural experience...</p>
    </div>
  </div>
)