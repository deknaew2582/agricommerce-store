import { Product } from './types'
import { allAdditionalProducts } from './additionalProducts'

// Base products (1-17)
const baseProducts: Product[] = [
  // Vegetable Seeds
  {
    id: '1',
    sku: 'VS-TOM-001',
    name: 'Premium Tomato Seeds - Cherokee Purple',
    description: 'Heirloom variety producing large, dark purple tomatoes with exceptional flavor. Perfect for home gardens and commercial growing.',
    price: 12.99,
    salePrice: 9.99,
    categoryId: '1',
    groupId: '1',
    subGroupId: '1-1',
    stock: 150,
    isActive: true,
    images: [
      {
        id: '1-1',
        productId: '1',
        url: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=500&h=500&fit=crop',
        altText: 'Cherokee Purple Tomato Seeds',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '1-2',
        productId: '1',
        url: 'https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=500&h=500&fit=crop',
        altText: 'Tomato Plant Growing',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '1-3',
        productId: '1',
        url: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&h=500&fit=crop',
        altText: 'Mature Cherokee Purple Tomatoes',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '1-4',
        productId: '1',
        url: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=500&h=500&fit=crop',
        altText: 'Tomato Harvest',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Seed Count', value: '25 seeds' },
      { name: 'Germination Rate', value: '85%' },
      { name: 'Days to Maturity', value: '80-90 days' },
      { name: 'Plant Height', value: '4-6 feet' },
      { name: 'Fruit Weight', value: '8-12 oz' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    sku: 'VS-CAR-002',
    name: 'Organic Carrot Seeds - Nantes',
    description: 'Classic French variety with sweet, crisp roots. Excellent for fresh eating and storage.',
    price: 8.99,
    categoryId: '1',
    groupId: '1',
    subGroupId: '1-2',
    stock: 200,
    isActive: true,
    images: [
      {
        id: '2-1',
        productId: '2',
        url: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500&h=500&fit=crop',
        altText: 'Fresh Carrots',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '2-2',
        productId: '2',
        url: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&h=500&fit=crop',
        altText: 'Carrot Seeds',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '2-3',
        productId: '2',
        url: 'https://images.unsplash.com/photo-1582515073490-39981397c445?w=500&h=500&fit=crop',
        altText: 'Carrot Garden',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '2-4',
        productId: '2',
        url: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&h=500&fit=crop',
        altText: 'Harvested Carrots',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Seed Count', value: '500 seeds' },
      { name: 'Germination Rate', value: '75%' },
      { name: 'Days to Maturity', value: '70-75 days' },
      { name: 'Root Length', value: '6-7 inches' },
      { name: 'Organic Certified', value: 'Yes' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '3',
    sku: 'VS-LET-003',
    name: 'Buttercrunch Lettuce Seeds',
    description: 'Heat-tolerant variety with tender, buttery leaves. Perfect for summer growing.',
    price: 6.99,
    categoryId: '1',
    groupId: '1',
    subGroupId: '1-1',
    stock: 180,
    isActive: true,
    images: [
      {
        id: '3-1',
        productId: '3',
        url: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500&h=500&fit=crop',
        altText: 'Fresh Lettuce',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '3-2',
        productId: '3',
        url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=500&fit=crop',
        altText: 'Lettuce Garden',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '3-3',
        productId: '3',
        url: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&h=500&fit=crop',
        altText: 'Lettuce Seeds',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '3-4',
        productId: '3',
        url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=500&fit=crop',
        altText: 'Growing Lettuce',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Seed Count', value: '100 seeds' },
      { name: 'Germination Rate', value: '90%' },
      { name: 'Days to Maturity', value: '55-65 days' },
      { name: 'Head Size', value: '6-8 inches' },
      { name: 'Heat Tolerance', value: 'High' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // Fruit Seeds
  {
    id: '4',
    sku: 'FS-STR-004',
    name: 'Alpine Strawberry Seeds',
    description: 'Compact plants producing small, intensely flavored berries. Perfect for containers and borders.',
    price: 15.99,
    categoryId: '1',
    groupId: '2',
    subGroupId: '2-2',
    stock: 75,
    isActive: true,
    images: [
      {
        id: '4-1',
        productId: '4',
        url: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&h=500&fit=crop',
        altText: 'Fresh Strawberries',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '4-2',
        productId: '4',
        url: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=500&h=500&fit=crop',
        altText: 'Strawberry Plant',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '4-3',
        productId: '4',
        url: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&h=500&fit=crop',
        altText: 'Strawberry Seeds',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '4-4',
        productId: '4',
        url: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&h=500&fit=crop',
        altText: 'Strawberry Harvest',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Seed Count', value: '50 seeds' },
      { name: 'Germination Rate', value: '70%' },
      { name: 'Days to Maturity', value: '120-150 days' },
      { name: 'Plant Spread', value: '8-12 inches' },
      { name: 'Fruit Size', value: '0.5-1 inch' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // Grain Seeds
  {
    id: '5',
    sku: 'GS-WHT-005',
    name: 'Winter Wheat Seeds - Hard Red',
    description: 'High-protein winter wheat variety ideal for bread making. Excellent cold tolerance.',
    price: 45.99,
    categoryId: '1',
    groupId: '3',
    subGroupId: '3-1',
    stock: 50,
    isActive: true,
    images: [
      {
        id: '5-1',
        productId: '5',
        url: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=500&fit=crop',
        altText: 'Wheat Field',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '5-2',
        productId: '5',
        url: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=500&h=500&fit=crop',
        altText: 'Wheat Grains',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '5-3',
        productId: '5',
        url: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=500&fit=crop',
        altText: 'Wheat Harvest',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '5-4',
        productId: '5',
        url: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=500&h=500&fit=crop',
        altText: 'Wheat Seeds',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Weight', value: '50 lbs' },
      { name: 'Protein Content', value: '12-14%' },
      { name: 'Planting Rate', value: '90-120 lbs/acre' },
      { name: 'Maturity', value: '240-280 days' },
      { name: 'Cold Hardiness', value: 'Zone 3-8' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // Hand Tools
  {
    id: '6',
    sku: 'HT-SHV-006',
    name: 'Professional Garden Spade',
    description: 'Heavy-duty steel spade with ergonomic handle. Perfect for digging, edging, and transplanting.',
    price: 89.99,
    salePrice: 69.99,
    categoryId: '2',
    groupId: '4',
    subGroupId: '4-1',
    stock: 25,
    isActive: true,
    images: [
      {
        id: '6-1',
        productId: '6',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Garden Spade',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '6-2',
        productId: '6',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Spade in Use',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '6-3',
        productId: '6',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Spade Handle Detail',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '6-4',
        productId: '6',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Garden Tools Set',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Blade Material', value: 'Carbon Steel' },
      { name: 'Handle Material', value: 'Ash Wood' },
      { name: 'Blade Size', value: '7.5" x 11"' },
      { name: 'Total Length', value: '41 inches' },
      { name: 'Weight', value: '3.2 lbs' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '7',
    sku: 'HT-HOE-007',
    name: 'Stirrup Hoe - Oscillating',
    description: 'Sharp oscillating blade cuts weeds on push and pull strokes. Saves time and energy.',
    price: 34.99,
    categoryId: '2',
    groupId: '4',
    subGroupId: '4-2',
    stock: 40,
    isActive: true,
    images: [
      {
        id: '7-1',
        productId: '7',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Stirrup Hoe',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '7-2',
        productId: '7',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Hoe in Garden',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '7-3',
        productId: '7',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Hoe Blade Detail',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '7-4',
        productId: '7',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Weeding with Hoe',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Blade Width', value: '6 inches' },
      { name: 'Handle Length', value: '54 inches' },
      { name: 'Blade Material', value: 'High Carbon Steel' },
      { name: 'Handle Material', value: 'Hardwood' },
      { name: 'Weight', value: '2.1 lbs' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // Power Tools
  {
    id: '8',
    sku: 'PT-TIL-008',
    name: 'Electric Garden Tiller - 12 Amp',
    description: 'Powerful electric tiller perfect for small to medium gardens. Quiet operation with no emissions.',
    price: 299.99,
    categoryId: '2',
    groupId: '5',
    subGroupId: '5-1',
    stock: 15,
    isActive: true,
    images: [
      {
        id: '8-1',
        productId: '8',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Electric Tiller',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '8-2',
        productId: '8',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Tiller in Action',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '8-3',
        productId: '8',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Tiller Tines',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '8-4',
        productId: '8',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Tilled Soil',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Motor', value: '12 Amp Electric' },
      { name: 'Tilling Width', value: '16 inches' },
      { name: 'Tilling Depth', value: '8 inches' },
      { name: 'Tines', value: '6 Steel Tines' },
      { name: 'Weight', value: '27 lbs' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // Organic Fertilizers
  {
    id: '9',
    sku: 'OF-COM-009',
    name: 'Premium Compost - Organic',
    description: 'Rich, aged compost made from organic materials. Perfect soil amendment for all plants.',
    price: 24.99,
    categoryId: '3',
    groupId: '6',
    subGroupId: '6-1',
    stock: 100,
    isActive: true,
    images: [
      {
        id: '9-1',
        productId: '9',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Organic Compost',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '9-2',
        productId: '9',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Compost Pile',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '9-3',
        productId: '9',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Rich Soil',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '9-4',
        productId: '9',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Garden Application',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Volume', value: '2 cubic feet' },
      { name: 'Organic Matter', value: '65%+' },
      { name: 'pH Level', value: '6.5-7.0' },
      { name: 'Moisture Content', value: '35-45%' },
      { name: 'Certification', value: 'OMRI Listed' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '10',
    sku: 'OF-MAN-010',
    name: 'Aged Cow Manure - Organic',
    description: 'Well-aged, composted cow manure. Excellent source of organic matter and nutrients.',
    price: 18.99,
    categoryId: '3',
    groupId: '6',
    subGroupId: '6-2',
    stock: 120,
    isActive: true,
    images: [
      {
        id: '10-1',
        productId: '10',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Cow Manure',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '10-2',
        productId: '10',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Organic Fertilizer',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '10-3',
        productId: '10',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Soil Amendment',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '10-4',
        productId: '10',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Garden Bed',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Volume', value: '1.5 cubic feet' },
      { name: 'Nitrogen', value: '0.5%' },
      { name: 'Phosphorus', value: '0.3%' },
      { name: 'Potassium', value: '0.5%' },
      { name: 'Organic Certified', value: 'Yes' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  // Chemical Fertilizers
  {
    id: '11',
    sku: 'CF-NPK-011',
    name: 'NPK Fertilizer 10-10-10',
    description: 'Balanced fertilizer perfect for general garden use. Provides essential nutrients for healthy plant growth.',
    price: 32.99,
    categoryId: '3',
    groupId: '7',
    subGroupId: '7-1',
    stock: 80,
    isActive: true,
    images: [
      {
        id: '11-1',
        productId: '11',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'NPK Fertilizer',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '11-2',
        productId: '11',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Fertilizer Granules',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '11-3',
        productId: '11',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Garden Application',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '11-4',
        productId: '11',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Healthy Plants',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Weight', value: '50 lbs' },
      { name: 'Nitrogen (N)', value: '10%' },
      { name: 'Phosphorus (P)', value: '10%' },
      { name: 'Potassium (K)', value: '10%' },
      { name: 'Coverage', value: '12,500 sq ft' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // Insecticides
  {
    id: '12',
    sku: 'IN-ORG-012',
    name: 'Neem Oil Organic Insecticide',
    description: 'Natural insecticide derived from neem tree. Controls aphids, whiteflies, and other soft-bodied insects.',
    price: 19.99,
    categoryId: '4',
    groupId: '8',
    subGroupId: '8-1',
    stock: 60,
    isActive: true,
    images: [
      {
        id: '12-1',
        productId: '12',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Neem Oil Bottle',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '12-2',
        productId: '12',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Spray Application',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '12-3',
        productId: '12',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Healthy Plants',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '12-4',
        productId: '12',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Organic Garden',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Volume', value: '32 fl oz' },
      { name: 'Active Ingredient', value: 'Neem Oil 70%' },
      { name: 'Organic Certified', value: 'OMRI Listed' },
      { name: 'Coverage', value: '2,000 sq ft' },
      { name: 'Application Rate', value: '2-4 tbsp per gallon' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // Irrigation - Sprinklers
  {
    id: '13',
    sku: 'IR-SPR-013',
    name: 'Rotating Sprinkler Head - Adjustable',
    description: 'Professional-grade rotating sprinkler with adjustable spray pattern. Perfect for large lawn areas.',
    price: 45.99,
    categoryId: '5',
    groupId: '10',
    subGroupId: '10-2',
    stock: 35,
    isActive: true,
    images: [
      {
        id: '13-1',
        productId: '13',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Rotating Sprinkler',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '13-2',
        productId: '13',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Sprinkler in Action',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '13-3',
        productId: '13',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Installation View',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '13-4',
        productId: '13',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Watered Lawn',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Coverage Radius', value: '25-40 feet' },
      { name: 'Flow Rate', value: '3-8 GPM' },
      { name: 'Pressure Range', value: '20-80 PSI' },
      { name: 'Material', value: 'Stainless Steel' },
      { name: 'Adjustment', value: '40-360 degrees' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // Drip Systems
  {
    id: '14',
    sku: 'IR-DRP-014',
    name: 'Drip Irrigation Starter Kit',
    description: 'Complete drip irrigation system for gardens up to 100 sq ft. Includes tubing, emitters, and timer.',
    price: 89.99,
    salePrice: 74.99,
    categoryId: '5',
    groupId: '11',
    subGroupId: '11-1',
    stock: 45,
    isActive: true,
    images: [
      {
        id: '14-1',
        productId: '14',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Drip Irrigation Kit',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '14-2',
        productId: '14',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Drip Emitters',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '14-3',
        productId: '14',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Installation',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '14-4',
        productId: '14',
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
        altText: 'Watered Garden',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Coverage Area', value: '100 sq ft' },
      { name: 'Tubing Length', value: '50 feet' },
      { name: 'Emitters Included', value: '25 pieces' },
      { name: 'Timer Included', value: 'Yes' },
      { name: 'Water Savings', value: 'Up to 50%' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // More Vegetable Seeds
  {
    id: '15',
    sku: 'VS-PEP-015',
    name: 'Bell Pepper Seeds - California Wonder',
    description: 'Classic bell pepper variety producing large, thick-walled fruits. Excellent for fresh eating and cooking.',
    price: 9.99,
    categoryId: '1',
    groupId: '1',
    subGroupId: '1-1',
    stock: 140,
    isActive: true,
    images: [
      {
        id: '15-1',
        productId: '15',
        url: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500&h=500&fit=crop',
        altText: 'Bell Peppers',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '15-2',
        productId: '15',
        url: 'https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?w=500&h=500&fit=crop',
        altText: 'Pepper Plant',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '15-3',
        productId: '15',
        url: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500&h=500&fit=crop',
        altText: 'Pepper Seeds',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '15-4',
        productId: '15',
        url: 'https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?w=500&h=500&fit=crop',
        altText: 'Pepper Garden',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Seed Count', value: '30 seeds' },
      { name: 'Germination Rate', value: '80%' },
      { name: 'Days to Maturity', value: '75-85 days' },
      { name: 'Fruit Size', value: '4-5 inches' },
      { name: 'Plant Height', value: '18-24 inches' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  {
    id: '16',
    sku: 'VS-CUC-016',
    name: 'Cucumber Seeds - Straight Eight',
    description: 'Popular slicing cucumber with straight, uniform fruits. Great for fresh eating and pickling.',
    price: 7.99,
    categoryId: '1',
    groupId: '1',
    subGroupId: '1-1',
    stock: 160,
    isActive: true,
    images: [
      {
        id: '16-1',
        productId: '16',
        url: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=500&h=500&fit=crop',
        altText: 'Fresh Cucumbers',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '16-2',
        productId: '16',
        url: 'https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=500&h=500&fit=crop',
        altText: 'Cucumber Plant',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '16-3',
        productId: '16',
        url: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=500&h=500&fit=crop',
        altText: 'Cucumber Seeds',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '16-4',
        productId: '16',
        url: 'https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=500&h=500&fit=crop',
        altText: 'Growing Cucumbers',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Seed Count', value: '25 seeds' },
      { name: 'Germination Rate', value: '85%' },
      { name: 'Days to Maturity', value: '58-65 days' },
      { name: 'Fruit Length', value: '8-9 inches' },
      { name: 'Vine Type', value: 'Indeterminate' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // Continue with more products...
  {
    id: '17',
    sku: 'VS-BEA-017',
    name: 'Green Bean Seeds - Blue Lake',
    description: 'Productive bush bean variety with tender, stringless pods. Perfect for fresh eating and canning.',
    price: 8.49,
    categoryId: '1',
    groupId: '1',
    subGroupId: '1-1',
    stock: 190,
    isActive: true,
    images: [
      {
        id: '17-1',
        productId: '17',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop',
        altText: 'Green Beans',
        sortOrder: 1,
        isMain: true
      },
      {
        id: '17-2',
        productId: '17',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop',
        altText: 'Bean Plant',
        sortOrder: 2,
        isMain: false
      },
      {
        id: '17-3',
        productId: '17',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop',
        altText: 'Bean Seeds',
        sortOrder: 3,
        isMain: false
      },
      {
        id: '17-4',
        productId: '17',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop',
        altText: 'Bean Harvest',
        sortOrder: 4,
        isMain: false
      }
    ],
    specifications: [
      { name: 'Seed Count', value: '40 seeds' },
      { name: 'Germination Rate', value: '90%' },
      { name: 'Days to Maturity', value: '50-55 days' },
      { name: 'Pod Length', value: '5-6 inches' },
      { name: 'Plant Type', value: 'Bush' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  }
]

// Combine base products with additional products to reach 50+ total
export const products: Product[] = [...baseProducts, ...allAdditionalProducts]