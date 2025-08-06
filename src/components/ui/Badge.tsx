import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'organic' | 'sale'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full'
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-agricultural-green-100 text-agricultural-green-800',
    warning: 'bg-harvest-gold-100 text-harvest-gold-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
    organic: 'bg-leaf-green text-white',
    sale: 'bg-harvest-gold-500 text-white animate-pulse'
  }
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  }
  
  return (
    <span className={`
      ${baseClasses} 
      ${variantClasses[variant]} 
      ${sizeClasses[size]} 
      ${className}
    `}>
      {children}
    </span>
  )
}

// Specialized badges for agricultural products
export const OrganicBadge: React.FC = () => (
  <Badge variant="organic" size="sm">
    🌿 Organic
  </Badge>
)

export const SaleBadge: React.FC<{ discount?: string }> = ({ discount }) => (
  <Badge variant="sale" size="sm">
    🏷️ {discount ? `${discount} OFF` : 'SALE'}
  </Badge>
)

export const NewBadge: React.FC = () => (
  <Badge variant="info" size="sm">
    ✨ New
  </Badge>
)

export const LowStockBadge: React.FC = () => (
  <Badge variant="warning" size="sm">
    ⚠️ Low Stock
  </Badge>
)

export const OutOfStockBadge: React.FC = () => (
  <Badge variant="error" size="sm">
    ❌ Out of Stock
  </Badge>
)

export const InStockBadge: React.FC = () => (
  <Badge variant="success" size="sm">
    ✅ In Stock
  </Badge>
)