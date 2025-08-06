import { Product, ProductCategory, ProductGroup, PromoBanner, User, Cart, Order } from './types'
import { products } from './products'
import { categories, productGroups, promoBanners, users } from './mockData'

// Simulate API delay for realistic demo experience
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Product Service
export const productService = {
  // Get all products with optional filtering
  async getProducts(filters?: {
    categoryId?: string
    groupId?: string
    subGroupId?: string
    search?: string
    minPrice?: number
    maxPrice?: number
    inStock?: boolean
  }): Promise<Product[]> {
    await delay(300) // Simulate API call
    
    let filteredProducts = [...products]
    
    if (filters) {
      if (filters.categoryId) {
        filteredProducts = filteredProducts.filter(p => p.categoryId === filters.categoryId)
      }
      if (filters.groupId) {
        filteredProducts = filteredProducts.filter(p => p.groupId === filters.groupId)
      }
      if (filters.subGroupId) {
        filteredProducts = filteredProducts.filter(p => p.subGroupId === filters.subGroupId)
      }
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase()
        filteredProducts = filteredProducts.filter(p => 
          p.name.toLowerCase().includes(searchTerm) ||
          p.description.toLowerCase().includes(searchTerm) ||
          p.sku.toLowerCase().includes(searchTerm)
        )
      }
      if (filters.minPrice !== undefined) {
        filteredProducts = filteredProducts.filter(p => p.price >= filters.minPrice!)
      }
      if (filters.maxPrice !== undefined) {
        filteredProducts = filteredProducts.filter(p => p.price <= filters.maxPrice!)
      }
      if (filters.inStock) {
        filteredProducts = filteredProducts.filter(p => p.stock > 0)
      }
    }
    
    return filteredProducts.filter(p => p.isActive)
  },

  // Get product by ID
  async getProductById(id: string): Promise<Product | null> {
    await delay(200)
    return products.find(p => p.id === id && p.isActive) || null
  },

  // Get related products (same category, different product)
  async getRelatedProducts(productId: string, limit: number = 3): Promise<Product[]> {
    await delay(200)
    const product = products.find(p => p.id === productId)
    if (!product) return []
    
    const related = products
      .filter(p => p.id !== productId && p.categoryId === product.categoryId && p.isActive)
      .slice(0, limit)
    
    return related
  },

  // Search products with autocomplete suggestions
  async searchProducts(query: string): Promise<Product[]> {
    await delay(150)
    if (!query.trim()) return []
    
    const searchTerm = query.toLowerCase()
    return products
      .filter(p => 
        p.isActive && (
          p.name.toLowerCase().includes(searchTerm) ||
          p.description.toLowerCase().includes(searchTerm) ||
          p.sku.toLowerCase().includes(searchTerm)
        )
      )
      .slice(0, 10) // Limit search results
  },

  // Get search suggestions
  async getSearchSuggestions(query: string): Promise<string[]> {
    await delay(100)
    if (!query.trim()) return []
    
    const searchTerm = query.toLowerCase()
    const suggestions = new Set<string>()
    
    products.forEach(p => {
      if (p.isActive) {
        // Add product name if it matches
        if (p.name.toLowerCase().includes(searchTerm)) {
          suggestions.add(p.name)
        }
        // Add category name if it matches
        const category = categories.find(c => c.id === p.categoryId)
        if (category && category.name.toLowerCase().includes(searchTerm)) {
          suggestions.add(category.name)
        }
      }
    })
    
    return Array.from(suggestions).slice(0, 5)
  }
}

// Category Service
export const categoryService = {
  async getCategories(): Promise<ProductCategory[]> {
    await delay(100)
    return categories
  },

  async getCategoryById(id: string): Promise<ProductCategory | null> {
    await delay(100)
    return categories.find(c => c.id === id) || null
  }
}

// Product Group Service
export const productGroupService = {
  async getProductGroups(): Promise<ProductGroup[]> {
    await delay(100)
    return productGroups
  },

  async getProductGroupById(id: string): Promise<ProductGroup | null> {
    await delay(100)
    return productGroups.find(g => g.id === id) || null
  }
}

// Promotional Banner Service
export const bannerService = {
  async getActiveBanners(): Promise<PromoBanner[]> {
    await delay(100)
    return promoBanners
      .filter(b => b.isActive)
      .sort((a, b) => a.sortOrder - b.sortOrder)
  }
}

// User Service (Mock Authentication)
export const userService = {
  async login(email: string, password: string): Promise<User | null> {
    await delay(500) // Simulate authentication delay
    
    // Mock authentication - in demo, any email/password combo works
    const user = users.find(u => u.email === email)
    if (user) {
      // Store user in localStorage for demo persistence
      localStorage.setItem('currentUser', JSON.stringify(user))
      return user
    }
    
    // For demo, create a new user if not found
    const newUser: User = {
      id: Date.now().toString(),
      email,
      firstName: 'Demo',
      lastName: 'User',
      isAdmin: email.includes('admin'),
      addresses: [],
      createdAt: new Date().toISOString()
    }
    
    localStorage.setItem('currentUser', JSON.stringify(newUser))
    return newUser
  },

  async register(userData: {
    email: string
    firstName: string
    lastName: string
    password: string
  }): Promise<User> {
    await delay(500)
    
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      isAdmin: false,
      addresses: [],
      createdAt: new Date().toISOString()
    }
    
    localStorage.setItem('currentUser', JSON.stringify(newUser))
    return newUser
  },

  async getCurrentUser(): Promise<User | null> {
    const userStr = localStorage.getItem('currentUser')
    return userStr ? JSON.parse(userStr) : null
  },

  async logout(): Promise<void> {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('cart')
  }
}

// Cart Service (Using localStorage for demo)
export const cartService = {
  async getCart(): Promise<Cart> {
    const cartStr = localStorage.getItem('cart')
    if (cartStr) {
      return JSON.parse(cartStr)
    }
    
    // Return empty cart
    const emptyCart: Cart = {
      id: 'demo-cart',
      userId: 'demo-user',
      items: [],
      subtotal: 0,
      updatedAt: new Date().toISOString()
    }
    
    localStorage.setItem('cart', JSON.stringify(emptyCart))
    return emptyCart
  },

  async addToCart(productId: string, quantity: number = 1): Promise<Cart> {
    await delay(200)
    
    const cart = await this.getCart()
    const product = await productService.getProductById(productId)
    
    if (!product) throw new Error('Product not found')
    
    const existingItem = cart.items.find(item => item.productId === productId)
    
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.items.push({
        id: Date.now().toString(),
        productId,
        quantity,
        price: product.salePrice || product.price
      })
    }
    
    // Recalculate subtotal
    cart.subtotal = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    cart.updatedAt = new Date().toISOString()
    
    localStorage.setItem('cart', JSON.stringify(cart))
    return cart
  },

  async updateCartItem(itemId: string, quantity: number): Promise<Cart> {
    await delay(200)
    
    const cart = await this.getCart()
    const item = cart.items.find(i => i.id === itemId)
    
    if (item) {
      if (quantity <= 0) {
        cart.items = cart.items.filter(i => i.id !== itemId)
      } else {
        item.quantity = quantity
      }
      
      // Recalculate subtotal
      cart.subtotal = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0)
      cart.updatedAt = new Date().toISOString()
      
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    
    return cart
  },

  async removeFromCart(itemId: string): Promise<Cart> {
    return this.updateCartItem(itemId, 0)
  },

  async clearCart(): Promise<Cart> {
    const emptyCart: Cart = {
      id: 'demo-cart',
      userId: 'demo-user',
      items: [],
      subtotal: 0,
      updatedAt: new Date().toISOString()
    }
    
    localStorage.setItem('cart', JSON.stringify(emptyCart))
    return emptyCart
  }
}

// Admin Service (Mock data for demo)
export const adminService = {
  async getSalesMetrics(dateRange?: { start: string; end: string }) {
    await delay(300)
    
    // Mock sales data for demo
    return {
      totalRevenue: 125430.50,
      totalOrders: 1247,
      averageOrderValue: 100.58,
      topSellingProducts: [
        { productId: '1', productName: 'Premium Tomato Seeds', quantitySold: 145, revenue: 1448.55 },
        { productId: '6', productName: 'Professional Garden Spade', quantitySold: 89, revenue: 6229.11 },
        { productId: '9', productName: 'Premium Compost', quantitySold: 234, revenue: 5847.66 }
      ],
      salesByCategory: [
        { categoryId: '1', categoryName: 'Seeds', revenue: 45230.20, percentage: 36.1 },
        { categoryId: '2', categoryName: 'Tools', revenue: 38940.15, percentage: 31.1 },
        { categoryId: '3', categoryName: 'Fertilizers', revenue: 28450.80, percentage: 22.7 },
        { categoryId: '4', categoryName: 'Pesticides', revenue: 8920.35, percentage: 7.1 },
        { categoryId: '5', categoryName: 'Irrigation', revenue: 3889.00, percentage: 3.1 }
      ],
      salesByPeriod: [
        { period: '2024-01', revenue: 18450.30, orders: 184 },
        { period: '2024-02', revenue: 22340.80, orders: 223 },
        { period: '2024-03', revenue: 28920.15, orders: 289 },
        { period: '2024-04', revenue: 31450.25, orders: 314 },
        { period: '2024-05', revenue: 24269.00, orders: 237 }
      ]
    }
  },

  async updateProductStock(productId: string, newStock: number): Promise<boolean> {
    await delay(200)
    
    const product = products.find(p => p.id === productId)
    if (product) {
      product.stock = newStock
      return true
    }
    return false
  },

  async updateProduct(productId: string, updates: Partial<Product>): Promise<boolean> {
    await delay(300)
    
    const productIndex = products.findIndex(p => p.id === productId)
    if (productIndex !== -1) {
      products[productIndex] = { ...products[productIndex], ...updates, updatedAt: new Date().toISOString() }
      return true
    }
    return false
  }
}