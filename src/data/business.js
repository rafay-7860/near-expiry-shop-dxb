/**
 * Near Expiry Shop (DXB) — editable business configuration
 * Update this file when real inventory, hours, or contact details change.
 */

export const business = {
  name: 'Near Expiry Shop (DXB)',
  shortName: 'Near Expiry Shop',
  tagline: 'Shop Smart. Save More. Waste Less.',
  phone: '+971 55 851 7171',
  phoneHref: 'tel:+971558517171',
  email: 'Near.expiry.shop@gmail.com',
  emailHref: 'mailto:Near.expiry.shop@gmail.com',
  whatsappUrl: 'https://wa.me/971558517171',
  mapsUrl: 'https://maps.app.goo.gl/eZnbwCjQbwk4NwEBA',
  address: {
    line1: 'Dubai Land - Shop #2, The Gate Residence 2',
    line2: 'Wadi Al Safa 5 - Dubai - United Arab Emirates',
    short: 'Dubai Land - Shop #2, The Gate Residence 2, Wadi Al Safa 5, Dubai, UAE.',
  },
  description:
    'Near Expiry Shop brings customers affordable shopping opportunities by offering near-expiry products at attractive prices. Our goal is to make smart shopping accessible while helping reduce unnecessary product waste.',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

/**
 * Suggested category placeholders — edit freely when inventory is confirmed.
 * These are not confirmed product categories.
 */
export const categories = [
  {
    id: 'food-groceries',
    name: 'Food & Groceries',
    description: 'Sample category placeholder',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    icon: 'ShoppingBasket',
  },
  {
    id: 'snacks-beverages',
    name: 'Snacks & Beverages',
    description: 'Sample category placeholder',
    image:
      'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    icon: 'CupSoda',
  },
  {
    id: 'household',
    name: 'Household Essentials',
    description: 'Sample category placeholder',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    icon: 'Home',
  },
  {
    id: 'personal-care',
    name: 'Personal Care',
    description: 'Sample category placeholder',
    image:
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80',
    icon: 'Sparkles',
  },
  {
    id: 'beauty',
    name: 'Beauty Products',
    description: 'Sample category placeholder',
    image:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    icon: 'Heart',
  },
  {
    id: 'daily',
    name: 'Daily Essentials',
    description: 'Sample category placeholder',
    image:
      'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80',
    icon: 'Package',
  },
]

/**
 * SAMPLE PRODUCT PLACEHOLDERS ONLY
 * Not real inventory. Replace with actual products when available.
 */
export const sampleProducts = [
  {
    id: 'sample-1',
    name: 'Sample Product A',
    image:
      'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=600&q=80',
    originalPrice: 'AED --.--',
    discountedPrice: 'AED --.--',
    expiryDate: 'DD/MM/YYYY',
    isSample: true,
  },
  {
    id: 'sample-2',
    name: 'Sample Product B',
    image:
      'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80',
    originalPrice: 'AED --.--',
    discountedPrice: 'AED --.--',
    expiryDate: 'DD/MM/YYYY',
    isSample: true,
  },
  {
    id: 'sample-3',
    name: 'Sample Product C',
    image:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    originalPrice: 'AED --.--',
    discountedPrice: 'AED --.--',
    expiryDate: 'DD/MM/YYYY',
    isSample: true,
  },
  {
    id: 'sample-4',
    name: 'Sample Product D',
    image:
      'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80',
    originalPrice: 'AED --.--',
    discountedPrice: 'AED --.--',
    expiryDate: 'DD/MM/YYYY',
    isSample: true,
  },
  {
    id: 'sample-5',
    name: 'Sample Product E',
    image:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    originalPrice: 'AED --.--',
    discountedPrice: 'AED --.--',
    expiryDate: 'DD/MM/YYYY',
    isSample: true,
  },
  {
    id: 'sample-6',
    name: 'Sample Product F',
    image:
      'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80',
    originalPrice: 'AED --.--',
    discountedPrice: 'AED --.--',
    expiryDate: 'DD/MM/YYYY',
    isSample: true,
  },
]

export const features = [
  {
    id: 'affordable',
    title: 'Affordable Prices',
    description:
      'Find attractive price opportunities on near-expiry items so you can stretch your budget further.',
    icon: 'Tag',
  },
  {
    id: 'smart',
    title: 'Smart Shopping',
    description:
      'Shop with intention — explore value options and make informed choices for everyday needs.',
    icon: 'Lightbulb',
  },
  {
    id: 'transparent',
    title: 'Transparent Expiry Information',
    description:
      'Clear expiry details help you decide what fits your shopping timeline with confidence.',
    icon: 'CalendarCheck',
  },
  {
    id: 'waste',
    title: 'Reduce Product Waste',
    description:
      'Choosing near-expiry products supports smarter consumption and helps reduce unnecessary waste.',
    icon: 'Leaf',
  },
]

export const steps = [
  {
    number: '01',
    title: 'Explore available products',
    description: 'Browse our categories and sample product listings to see what may be available in store.',
  },
  {
    number: '02',
    title: 'Check prices and expiry information',
    description: 'Review discounted pricing placeholders and expiry details before you decide.',
  },
  {
    number: '03',
    title: 'Contact us or visit our shop',
    description: 'Message us on WhatsApp or visit Dubai Land — Shop #2, The Gate Residence 2.',
  },
]
