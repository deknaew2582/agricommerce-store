import { Product } from './types'

// Additional products to reach 50+ total
export const additionalProducts: Product[] = [
  // More Seeds (18-30)
  {
    id: '18',
    sku: 'VS-SPI-018',
    name: 'Spinach Seeds - Space',
    description: 'Smooth-leaf spinach variety perfect for baby leaf production. Heat tolerant and slow to bolt.',
    price: 6.49,
    categoryId: '1',
    groupId: '1',
    subGroupId: '1-1',
    stock: 220,
    isActive: true,
    images: [
      { id: '18-1', productId: '18', url: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&h=500&fit=crop', altText: 'Fresh Spinach', sortOrder: 1, isMain: true },
      { id: '18-2', productId: '18', url: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&h=500&fit=crop', altText: 'Spinach Plant', sortOrder: 2, isMain: false },
      { id: '18-3', productId: '18', url: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&h=500&fit=crop', altText: 'Spinach Seeds', sortOrder: 3, isMain: false },
      { id: '18-4', productId: '18', url: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&h=500&fit=crop', altText: 'Spinach Garden', sortOrder: 4, isMain: false }
    ],
    specifications: [
      { name: 'Seed Count', value: '200 seeds' },
      { name: 'Days to Maturity', value: '37-45 days' },
      { name: 'Leaf Type', value: 'Smooth' },
      { name: 'Heat Tolerance', value: 'High' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '19',
    sku: 'VS-RAD-019',
    name: 'Radish Seeds - Cherry Belle',
    description: 'Quick-growing radish with crisp, mild flavor. Perfect for succession planting.',
    price: 4.99,
    categoryId: '1',
    groupId: '1',
    subGroupId: '1-2',
    stock: 300,
    isActive: true,
    images: [
      { id: '19-1', productId: '19', url: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&h=500&fit=crop', altText: 'Fresh Radishes', sortOrder: 1, isMain: true },
      { id: '19-2', productId: '19', url: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&h=500&fit=crop', altText: 'Radish Plant', sortOrder: 2, isMain: false },
      { id: '19-3', productId: '19', url: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&h=500&fit=crop', altText: 'Radish Seeds', sortOrder: 3, isMain: false },
      { id: '19-4', productId: '19', url: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&h=500&fit=crop', altText: 'Radish Harvest', sortOrder: 4, isMain: false }
    ],
    specifications: [
      { name: 'Seed Count', value: '150 seeds' },
      { name: 'Days to Maturity', value: '22-30 days' },
      { name: 'Root Size', value: '1 inch diameter' },
      { name: 'Color', value: 'Red with white tip' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '20',
    sku: 'VS-BRO-020',
    name: 'Broccoli Seeds - Calabrese',
    description: 'Traditional Italian variety producing large, dense heads. Excellent for fresh eating and freezing.',
    price: 11.99,
    categoryId: '1',
    groupId: '1',
    subGroupId: '1-1',
    stock: 85,
    isActive: true,
    images: [
      { id: '20-1', productId: '20', url: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&h=500&fit=crop', altText: 'Fresh Broccoli', sortOrder: 1, isMain: true },
      { id: '20-2', productId: '20', url: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&h=500&fit=crop', altText: 'Broccoli Plant', sortOrder: 2, isMain: false },
      { id: '20-3', productId: '20', url: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&h=500&fit=crop', altText: 'Broccoli Seeds', sortOrder: 3, isMain: false },
      { id: '20-4', productId: '20', url: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&h=500&fit=crop', altText: 'Broccoli Garden', sortOrder: 4, isMain: false }
    ],
    specifications: [
      { name: 'Seed Count', value: '50 seeds' },
      { name: 'Days to Maturity', value: '85-100 days' },
      { name: 'Head Size', value: '6-8 inches' },
      { name: 'Plant Spacing', value: '18-24 inches' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // More Tools (21-35)
  {
    id: '21',
    sku: 'HT-RAK-021',
    name: 'Steel Garden Rake - 14 Tine',
    description: 'Heavy-duty steel rake perfect for soil preparation and debris removal. Durable construction.',
    price: 42.99,
    categoryId: '2',
    groupId: '4',
    subGroupId: '4-1',
    stock: 30,
    isActive: true,
    images: [
      { id: '21-1', productId: '21', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Garden Rake', sortOrder: 1, isMain: true },
      { id: '21-2', productId: '21', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Rake in Use', sortOrder: 2, isMain: false },
      { id: '21-3', productId: '21', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Rake Tines', sortOrder: 3, isMain: false },
      { id: '21-4', productId: '21', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Garden Preparation', sortOrder: 4, isMain: false }
    ],
    specifications: [
      { name: 'Tine Count', value: '14 tines' },
      { name: 'Head Width', value: '14 inches' },
      { name: 'Handle Length', value: '54 inches' },
      { name: 'Material', value: 'Carbon Steel' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '22',
    sku: 'HT-PRU-022',
    name: 'Bypass Pruning Shears',
    description: 'Professional-grade pruning shears with sharp bypass blades. Perfect for clean cuts on live branches.',
    price: 28.99,
    categoryId: '2',
    groupId: '4',
    subGroupId: '4-1',
    stock: 55,
    isActive: true,
    images: [
      { id: '22-1', productId: '22', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Pruning Shears', sortOrder: 1, isMain: true },
      { id: '22-2', productId: '22', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Shears in Use', sortOrder: 2, isMain: false },
      { id: '22-3', productId: '22', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Blade Detail', sortOrder: 3, isMain: false },
      { id: '22-4', productId: '22', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Pruned Plant', sortOrder: 4, isMain: false }
    ],
    specifications: [
      { name: 'Blade Type', value: 'Bypass' },
      { name: 'Cutting Capacity', value: '3/4 inch' },
      { name: 'Blade Material', value: 'High Carbon Steel' },
      { name: 'Handle Material', value: 'Aluminum' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // Power Tools (23-27)
  {
    id: '23',
    sku: 'PT-MOW-023',
    name: 'Electric Lawn Mower - 20 inch',
    description: 'Cordless electric mower with 20-inch cutting deck. Quiet operation with adjustable cutting height.',
    price: 449.99,
    salePrice: 399.99,
    categoryId: '2',
    groupId: '5',
    subGroupId: '5-2',
    stock: 12,
    isActive: true,
    images: [
      { id: '23-1', productId: '23', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Electric Mower', sortOrder: 1, isMain: true },
      { id: '23-2', productId: '23', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Mower in Use', sortOrder: 2, isMain: false },
      { id: '23-3', productId: '23', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Cutting Deck', sortOrder: 3, isMain: false },
      { id: '23-4', productId: '23', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Mowed Lawn', sortOrder: 4, isMain: false }
    ],
    specifications: [
      { name: 'Cutting Width', value: '20 inches' },
      { name: 'Battery', value: '40V Lithium-ion' },
      { name: 'Runtime', value: '45 minutes' },
      { name: 'Height Adjustment', value: '7 positions' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // More Fertilizers (24-35)
  {
    id: '24',
    sku: 'OF-KEL-024',
    name: 'Kelp Meal Organic Fertilizer',
    description: 'Natural seaweed fertilizer rich in trace minerals. Excellent soil conditioner and plant growth enhancer.',
    price: 22.99,
    categoryId: '3',
    groupId: '6',
    subGroupId: '6-1',
    stock: 90,
    isActive: true,
    images: [
      { id: '24-1', productId: '24', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Kelp Meal', sortOrder: 1, isMain: true },
      { id: '24-2', productId: '24', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Organic Fertilizer', sortOrder: 2, isMain: false },
      { id: '24-3', productId: '24', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Seaweed Source', sortOrder: 3, isMain: false },
      { id: '24-4', productId: '24', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Healthy Plants', sortOrder: 4, isMain: false }
    ],
    specifications: [
      { name: 'Weight', value: '4 lbs' },
      { name: 'NPK', value: '1-0-2' },
      { name: 'Trace Minerals', value: '60+' },
      { name: 'Application Rate', value: '1-2 lbs per 100 sq ft' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // Continue with more products across all categories...
  // I'll add products for remaining categories to reach 50+

  // Pesticides (25-30)
  {
    id: '25',
    sku: 'HE-GLY-025',
    name: 'Glyphosate Herbicide - Concentrate',
    description: 'Systemic herbicide for tough weeds. Professional-strength concentrate for large area treatment.',
    price: 34.99,
    categoryId: '4',
    groupId: '9',
    subGroupId: '9-2',
    stock: 45,
    isActive: true,
    images: [
      { id: '25-1', productId: '25', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Herbicide Bottle', sortOrder: 1, isMain: true },
      { id: '25-2', productId: '25', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Weed Control', sortOrder: 2, isMain: false },
      { id: '25-3', productId: '25', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Application', sortOrder: 3, isMain: false },
      { id: '25-4', productId: '25', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Clean Garden', sortOrder: 4, isMain: false }
    ],
    specifications: [
      { name: 'Volume', value: '32 fl oz' },
      { name: 'Active Ingredient', value: 'Glyphosate 41%' },
      { name: 'Coverage', value: '25,000 sq ft' },
      { name: 'Mixing Ratio', value: '2.5 oz per gallon' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // Continue adding more products to reach 50+ total
  {
    id: '26',
    sku: 'GH-STR-026',
    name: 'Greenhouse Structure Kit - 8x10',
    description: 'Complete greenhouse kit with aluminum frame and polycarbonate panels. Perfect for year-round growing.',
    price: 1299.99,
    salePrice: 1099.99,
    categoryId: '5',
    groupId: '12',
    subGroupId: '12-1',
    stock: 8,
    isActive: true,
    images: [
      { id: '26-1', productId: '26', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Greenhouse Kit', sortOrder: 1, isMain: true },
      { id: '26-2', productId: '26', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Assembled Greenhouse', sortOrder: 2, isMain: false },
      { id: '26-3', productId: '26', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Interior View', sortOrder: 3, isMain: false },
      { id: '26-4', productId: '26', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Growing Plants', sortOrder: 4, isMain: false }
    ],
    specifications: [
      { name: 'Size', value: '8 x 10 feet' },
      { name: 'Frame Material', value: 'Aluminum' },
      { name: 'Panel Material', value: 'Polycarbonate' },
      { name: 'Door Width', value: '24 inches' },
      { name: 'Roof Vents', value: '2 automatic' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // Livestock Feed
  {
    id: '27',
    sku: 'LV-FED-027',
    name: 'Organic Chicken Feed - Layer Pellets',
    description: 'Complete nutrition for laying hens. Organic certified with 16% protein for optimal egg production.',
    price: 28.99,
    categoryId: '5',
    groupId: '13',
    subGroupId: '13-1',
    stock: 65,
    isActive: true,
    images: [
      { id: '27-1', productId: '27', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Chicken Feed', sortOrder: 1, isMain: true },
      { id: '27-2', productId: '27', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Feed Pellets', sortOrder: 2, isMain: false },
      { id: '27-3', productId: '27', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Happy Chickens', sortOrder: 3, isMain: false },
      { id: '27-4', productId: '27', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Fresh Eggs', sortOrder: 4, isMain: false }
    ],
    specifications: [
      { name: 'Weight', value: '50 lbs' },
      { name: 'Protein', value: '16%' },
      { name: 'Calcium', value: '3.5%' },
      { name: 'Organic Certified', value: 'Yes' },
      { name: 'Form', value: 'Pellets' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // Storage Solutions
  {
    id: '28',
    sku: 'ST-SIL-028',
    name: 'Grain Storage Silo - 1000 Bushel',
    description: 'Galvanized steel grain silo for safe storage of corn, wheat, and other grains. Weather-resistant construction.',
    price: 3499.99,
    categoryId: '5',
    groupId: '14',
    subGroupId: '14-1',
    stock: 3,
    isActive: true,
    images: [
      { id: '28-1', productId: '28', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Grain Silo', sortOrder: 1, isMain: true },
      { id: '28-2', productId: '28', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Silo Installation', sortOrder: 2, isMain: false },
      { id: '28-3', productId: '28', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Grain Storage', sortOrder: 3, isMain: false },
      { id: '28-4', productId: '28', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Farm Storage', sortOrder: 4, isMain: false }
    ],
    specifications: [
      { name: 'Capacity', value: '1000 bushels' },
      { name: 'Material', value: 'Galvanized Steel' },
      { name: 'Diameter', value: '18 feet' },
      { name: 'Height', value: '22 feet' },
      { name: 'Roof Type', value: 'Peaked' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // Safety Equipment
  {
    id: '29',
    sku: 'SF-VES-029',
    name: 'High-Visibility Safety Vest',
    description: 'ANSI Class 2 safety vest with reflective stripes. Essential for farm and construction work.',
    price: 24.99,
    categoryId: '5',
    groupId: '15',
    subGroupId: '15-1',
    stock: 85,
    isActive: true,
    images: [
      { id: '29-1', productId: '29', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Safety Vest', sortOrder: 1, isMain: true },
      { id: '29-2', productId: '29', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Reflective Stripes', sortOrder: 2, isMain: false },
      { id: '29-3', productId: '29', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Worker Wearing Vest', sortOrder: 3, isMain: false },
      { id: '29-4', productId: '29', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: 'Farm Safety', sortOrder: 4, isMain: false }
    ],
    specifications: [
      { name: 'ANSI Class', value: 'Class 2' },
      { name: 'Color', value: 'Hi-Vis Orange' },
      { name: 'Material', value: 'Polyester Mesh' },
      { name: 'Sizes', value: 'S-5XL' },
      { name: 'Closure', value: 'Hook & Loop' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },

  // More Seeds to reach 50+
  {
    id: '30',
    sku: 'VS-ZUC-030',
    name: 'Zucchini Seeds - Black Beauty',
    description: 'Prolific summer squash variety with dark green fruits. Perfect for fresh eating and baking.',
    price: 7.49,
    categoryId: '1',
    groupId: '1',
    subGroupId: '1-1',
    stock: 175,
    isActive: true,
    images: [
      { id: '30-1', productId: '30', url: 'https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=500&h=500&fit=crop', altText: 'Fresh Zucchini', sortOrder: 1, isMain: true },
      { id: '30-2', productId: '30', url: 'https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=500&h=500&fit=crop', altText: 'Zucchini Plant', sortOrder: 2, isMain: false },
      { id: '30-3', productId: '30', url: 'https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=500&h=500&fit=crop', altText: 'Zucchini Seeds', sortOrder: 3, isMain: false },
      { id: '30-4', productId: '30', url: 'https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=500&h=500&fit=crop', altText: 'Zucchini Harvest', sortOrder: 4, isMain: false }
    ],
    specifications: [
      { name: 'Seed Count', value: '15 seeds' },
      { name: 'Days to Maturity', value: '50-60 days' },
      { name: 'Fruit Length', value: '6-8 inches' },
      { name: 'Plant Spread', value: '3-4 feet' },
      { name: 'Harvest Period', value: '60+ days' }
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  }
]

// Generate additional products programmatically to reach 50+ total
const generateAdditionalProducts = (): Product[] => {
  const additionalSeeds = []
  const seedNames = [
    'Basil Seeds - Sweet Genovese', 'Oregano Seeds - Greek', 'Thyme Seeds - English',
    'Rosemary Seeds - Common', 'Sage Seeds - Garden', 'Parsley Seeds - Flat Leaf',
    'Cilantro Seeds - Slow Bolt', 'Dill Seeds - Bouquet', 'Chives Seeds - Common',
    'Mint Seeds - Spearmint', 'Lavender Seeds - English', 'Sunflower Seeds - Mammoth',
    'Marigold Seeds - French', 'Zinnia Seeds - State Fair Mix', 'Cosmos Seeds - Sensation Mix',
    'Nasturtium Seeds - Jewel Mix', 'Sweet Pea Seeds - Old Spice Mix', 'Morning Glory Seeds',
    'Pumpkin Seeds - Jack O Lantern', 'Watermelon Seeds - Sugar Baby'
  ]

  seedNames.forEach((name, index) => {
    const id = (31 + index).toString()
    additionalSeeds.push({
      id,
      sku: `VS-${id.padStart(3, '0')}`,
      name,
      description: `High-quality ${name.toLowerCase()} perfect for home gardens and commercial growing.`,
      price: Math.round((Math.random() * 20 + 5) * 100) / 100,
      categoryId: '1',
      groupId: '1',
      subGroupId: '1-1',
      stock: Math.floor(Math.random() * 200 + 50),
      isActive: true,
      images: [
        { id: `${id}-1`, productId: id, url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: name, sortOrder: 1, isMain: true },
        { id: `${id}-2`, productId: id, url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: `${name} Plant`, sortOrder: 2, isMain: false },
        { id: `${id}-3`, productId: id, url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: `${name} Seeds`, sortOrder: 3, isMain: false },
        { id: `${id}-4`, productId: id, url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop', altText: `${name} Garden`, sortOrder: 4, isMain: false }
      ],
      specifications: [
        { name: 'Seed Count', value: `${Math.floor(Math.random() * 100 + 20)} seeds` },
        { name: 'Germination Rate', value: `${Math.floor(Math.random() * 20 + 70)}%` },
        { name: 'Days to Maturity', value: `${Math.floor(Math.random() * 60 + 30)}-${Math.floor(Math.random() * 60 + 60)} days` }
      ],
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z'
    })
  })

  return additionalSeeds
}

// Export all additional products including generated ones
export const allAdditionalProducts = [...additionalProducts, ...generateAdditionalProducts()]