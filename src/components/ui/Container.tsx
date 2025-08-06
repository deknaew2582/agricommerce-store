import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
  padding?: boolean
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className = '',
  padding = true
}) => {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  }

  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-8' : ''

  return (
    <div className={`
      mx-auto w-full ${sizeClasses[size]} ${paddingClasses} ${className}
    `}>
      {children}
    </div>
  )
}