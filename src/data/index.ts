// Export all data services and types for easy importing
export * from './types'
export * from './products'
export * from './mockData'
export * from './dataService'

// Utility function to get data summary for demo
export const getDataSummary = () => {
  const { products } = require('./products')
  const { categories, productGroups, promoBanners } = require('./mockData')
  
  return {
    totalProducts: products.length,
    totalCategories: categories.length,
    totalProductGroups: productGroups.length,
    totalPromoBanners: promoBanners.length,
    productsByCategory: categories.map(cat => ({
      category: cat.name,
      count: products.filter((p: any) => p.categoryId === cat.id).length
    })),
    productsByGroup: productGroups.slice(0, 5).map((group: any) => ({
      group: group.name,
      count: products.filter((p: any) => p.groupId === group.id).length
    }))
  }
}