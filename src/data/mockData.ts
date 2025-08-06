import { Product, ProductCategory, ProductGroup, PromoBanner, User } from './types'

// Sample product categories
export const categories: ProductCategory[] = [
  { id: '1', name: 'Seeds', slug: 'seeds', description: 'High-quality seeds for all crops' },
  { id: '2', name: 'Tools', slug: 'tools', description: 'Professional farming tools and equipment' },
  { id: '3', name: 'Fertilizers', slug: 'fertilizers', description: 'Organic and synthetic fertilizers' },
  { id: '4', name: 'Pesticides', slug: 'pesticides', description: 'Crop protection products' },
  { id: '5', name: 'Irrigation', slug: 'irrigation', description: 'Water management systems' },
]

// Sample product groups with 15 icons as requested
export const productGroups: ProductGroup[] = [
  {
    id: '1',
    name: 'Vegetable Seeds',
    slug: 'vegetable-seeds',
    iconUrl: '🥕',
    description: 'Seeds for vegetables',
    subGroups: [
      { id: '1-1', name: 'Leafy Greens', slug: 'leafy-greens', groupId: '1' },
      { id: '1-2', name: 'Root Vegetables', slug: 'root-vegetables', groupId: '1' },
    ]
  },
  {
    id: '2',
    name: 'Fruit Seeds',
    slug: 'fruit-seeds',
    iconUrl: '🍎',
    description: 'Seeds for fruits',
    subGroups: [
      { id: '2-1', name: 'Citrus', slug: 'citrus', groupId: '2' },
      { id: '2-2', name: 'Berries', slug: 'berries', groupId: '2' },
    ]
  },
  {
    id: '3',
    name: 'Grain Seeds',
    slug: 'grain-seeds',
    iconUrl: '🌾',
    description: 'Seeds for grains',
    subGroups: [
      { id: '3-1', name: 'Wheat', slug: 'wheat', groupId: '3' },
      { id: '3-2', name: 'Rice', slug: 'rice', groupId: '3' },
    ]
  },
  {
    id: '4',
    name: 'Hand Tools',
    slug: 'hand-tools',
    iconUrl: '🔨',
    description: 'Manual farming tools',
    subGroups: [
      { id: '4-1', name: 'Shovels', slug: 'shovels', groupId: '4' },
      { id: '4-2', name: 'Hoes', slug: 'hoes', groupId: '4' },
    ]
  },
  {
    id: '5',
    name: 'Power Tools',
    slug: 'power-tools',
    iconUrl: '⚡',
    description: 'Powered farming equipment',
    subGroups: [
      { id: '5-1', name: 'Tillers', slug: 'tillers', groupId: '5' },
      { id: '5-2', name: 'Mowers', slug: 'mowers', groupId: '5' },
    ]
  },
  {
    id: '6',
    name: 'Organic Fertilizers',
    slug: 'organic-fertilizers',
    iconUrl: '🌱',
    description: 'Natural fertilizers',
    subGroups: [
      { id: '6-1', name: 'Compost', slug: 'compost', groupId: '6' },
      { id: '6-2', name: 'Manure', slug: 'manure', groupId: '6' },
    ]
  },
  {
    id: '7',
    name: 'Chemical Fertilizers',
    slug: 'chemical-fertilizers',
    iconUrl: '🧪',
    description: 'Synthetic fertilizers',
    subGroups: [
      { id: '7-1', name: 'NPK', slug: 'npk', groupId: '7' },
      { id: '7-2', name: 'Micronutrients', slug: 'micronutrients', groupId: '7' },
    ]
  },
  {
    id: '8',
    name: 'Insecticides',
    slug: 'insecticides',
    iconUrl: '🐛',
    description: 'Insect control products',
    subGroups: [
      { id: '8-1', name: 'Organic', slug: 'organic-insecticides', groupId: '8' },
      { id: '8-2', name: 'Synthetic', slug: 'synthetic-insecticides', groupId: '8' },
    ]
  },
  {
    id: '9',
    name: 'Herbicides',
    slug: 'herbicides',
    iconUrl: '🌿',
    description: 'Weed control products',
    subGroups: [
      { id: '9-1', name: 'Pre-emergent', slug: 'pre-emergent', groupId: '9' },
      { id: '9-2', name: 'Post-emergent', slug: 'post-emergent', groupId: '9' },
    ]
  },
  {
    id: '10',
    name: 'Sprinklers',
    slug: 'sprinklers',
    iconUrl: '💧',
    description: 'Irrigation sprinklers',
    subGroups: [
      { id: '10-1', name: 'Fixed', slug: 'fixed-sprinklers', groupId: '10' },
      { id: '10-2', name: 'Rotating', slug: 'rotating-sprinklers', groupId: '10' },
    ]
  },
  {
    id: '11',
    name: 'Drip Systems',
    slug: 'drip-systems',
    iconUrl: '💦',
    description: 'Drip irrigation systems',
    subGroups: [
      { id: '11-1', name: 'Emitters', slug: 'emitters', groupId: '11' },
      { id: '11-2', name: 'Tubing', slug: 'tubing', groupId: '11' },
    ]
  },
  {
    id: '12',
    name: 'Greenhouse',
    slug: 'greenhouse',
    iconUrl: '🏠',
    description: 'Greenhouse supplies',
    subGroups: [
      { id: '12-1', name: 'Structures', slug: 'structures', groupId: '12' },
      { id: '12-2', name: 'Climate Control', slug: 'climate-control', groupId: '12' },
    ]
  },
  {
    id: '13',
    name: 'Livestock',
    slug: 'livestock',
    iconUrl: '🐄',
    description: 'Livestock supplies',
    subGroups: [
      { id: '13-1', name: 'Feed', slug: 'feed', groupId: '13' },
      { id: '13-2', name: 'Health', slug: 'health', groupId: '13' },
    ]
  },
  {
    id: '14',
    name: 'Storage',
    slug: 'storage',
    iconUrl: '📦',
    description: 'Storage solutions',
    subGroups: [
      { id: '14-1', name: 'Silos', slug: 'silos', groupId: '14' },
      { id: '14-2', name: 'Containers', slug: 'containers', groupId: '14' },
    ]
  },
  {
    id: '15',
    name: 'Safety Equipment',
    slug: 'safety-equipment',
    iconUrl: '🦺',
    description: 'Farm safety gear',
    subGroups: [
      { id: '15-1', name: 'Protective Wear', slug: 'protective-wear', groupId: '15' },
      { id: '15-2', name: 'First Aid', slug: 'first-aid', groupId: '15' },
    ]
  },
]

// Sample promotional banners
export const promoBanners: PromoBanner[] = [
  {
    id: '1',
    title: 'Spring Planting Sale',
    subtitle: 'Up to 30% off all seeds',
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=400&fit=crop',
    linkUrl: '/products?category=seeds',
    isActive: true,
    sortOrder: 1
  },
  {
    id: '2',
    title: 'Professional Tools',
    subtitle: 'Quality equipment for serious farmers',
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=400&fit=crop',
    linkUrl: '/products?category=tools',
    isActive: true,
    sortOrder: 2
  },
  {
    id: '3',
    title: 'Organic Solutions',
    subtitle: 'Natural fertilizers and pest control',
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=400&fit=crop',
    linkUrl: '/products?category=fertilizers',
    isActive: true,
    sortOrder: 3
  }
]

// Sample users
export const users: User[] = [
  {
    id: '1',
    email: 'admin@agricultural-store.com',
    firstName: 'Admin',
    lastName: 'User',
    isAdmin: true,
    addresses: [],
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    email: 'customer@example.com',
    firstName: 'John',
    lastName: 'Farmer',
    isAdmin: false,
    addresses: [],
    createdAt: new Date().toISOString()
  }
]