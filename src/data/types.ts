export interface Product {
  id: string
  sku: string
  name: string
  description: string
  price: number
  salePrice?: number
  categoryId: string
  groupId: string
  subGroupId: string
  stock: number
  isActive: boolean
  images: ProductImage[]
  specifications: ProductSpec[]
  createdAt: string
  updatedAt: string
}

export interface ProductImage {
  id: string
  productId: string
  url: string
  altText: string
  sortOrder: number
  isMain: boolean
}

export interface ProductSpec {
  name: string
  value: string
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  description?: string
  parentId?: string
  children?: ProductCategory[]
}

export interface ProductGroup {
  id: string
  name: string
  slug: string
  iconUrl: string
  description?: string
  subGroups: ProductSubGroup[]
}

export interface ProductSubGroup {
  id: string
  name: string
  slug: string
  groupId: string
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  isAdmin: boolean
  addresses: Address[]
  createdAt: string
}

export interface Address {
  id: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  isDefault: boolean
}

export interface CartItem {
  id: string
  productId: string
  quantity: number
  price: number
}

export interface Cart {
  id: string
  userId: string
  items: CartItem[]
  subtotal: number
  updatedAt: string
}

export interface Order {
  id: string
  userId: string
  status: OrderStatus
  items: OrderItem[]
  subtotal: number
  tax: number
  shipping: number
  total: number
  shippingAddress: Address
  billingAddress: Address
  createdAt: string
}

export interface OrderItem {
  id: string
  productId: string
  productName: string
  quantity: number
  price: number
  total: number
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

export interface PromoBanner {
  id: string
  title: string
  subtitle?: string
  imageUrl: string
  linkUrl: string
  isActive: boolean
  sortOrder: number
}

export interface SalesMetrics {
  totalRevenue: number
  totalOrders: number
  averageOrderValue: number
  topSellingProducts: ProductSalesData[]
  salesByCategory: CategorySalesData[]
  salesByPeriod: PeriodSalesData[]
}

export interface ProductSalesData {
  productId: string
  productName: string
  quantitySold: number
  revenue: number
}

export interface CategorySalesData {
  categoryId: string
  categoryName: string
  revenue: number
  percentage: number
}

export interface PeriodSalesData {
  period: string
  revenue: number
  orders: number
}