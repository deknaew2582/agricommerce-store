import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-agricultural-green-500 hover:bg-agricultural-green-600 text-white focus:ring-agricultural-green-500',
    secondary: 'bg-dirt-brown-500 hover:bg-dirt-brown-600 text-white focus:ring-dirt-brown-500',
    outline: 'border-2 border-agricultural-green-500 text-agricultural-green-500 hover:bg-agricultural-green-500 hover:text-white focus:ring-agricultural-green-500',
    ghost: 'text-agricultural-green-600 hover:bg-agricultural-green-50 focus:ring-agricultural-green-500'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}