import { Product } from '../types/Product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.8,
    reviews: 12547,
    description: 'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system.',
    specifications: {
      'Storage': '256GB',
      'Display': '6.7-inch Super Retina XDR',
      'Chip': 'A17 Pro',
      'Camera': '48MP Main + 12MP Ultra Wide + 12MP Telephoto',
      'Battery': 'Up to 29 hours video playback'
    },
    prices: [
      {
        platform: 'Amazon',
        price: 134900,
        originalPrice: 139900,
        discount: 4,
        availability: 'in-stock',
        deliveryTime: '1-2 days',
        deliveryCost: 0,
        url: 'https://www.amazon.in/dp/B0CHX1W1XY',
        logo: '🛒'
      },
      {
        platform: 'Flipkart',
        price: 136900,
        originalPrice: 139900,
        discount: 2,
        availability: 'in-stock',
        deliveryTime: '2-3 days',
        deliveryCost: 0,
        url: 'https://www.flipkart.com/apple-iphone-15-pro-max-natural-titanium-256-gb/p/itm6ac6485515ae4',
        logo: '🛍️'
      },
      {
        platform: 'Croma',
        price: 139900,
        availability: 'limited',
        deliveryTime: '3-5 days',
        deliveryCost: 99,
        url: 'https://www.croma.com/apple-iphone-15-pro-max-256gb-natural-titanium/p/267134',
        logo: '🏪'
      }
    ],
    priceHistory: [
      { date: '2024-01-01', price: 139900, platform: 'Amazon' },
      { date: '2024-01-15', price: 137900, platform: 'Amazon' },
      { date: '2024-02-01', price: 135900, platform: 'Amazon' },
      { date: '2024-02-15', price: 134900, platform: 'Amazon' }
    ],
    similarProducts: ['2', '3']
  },
  {
    id: '2',
    name: 'MacBook Air M3 13-inch',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.9,
    reviews: 8934,
    description: 'Ultra-thin laptop with M3 chip, all-day battery life, and stunning Liquid Retina display.',
    specifications: {
      'Processor': 'Apple M3 chip',
      'Memory': '8GB unified memory',
      'Storage': '256GB SSD',
      'Display': '13.6-inch Liquid Retina',
      'Battery': 'Up to 18 hours'
    },
    prices: [
      {
        platform: 'Amazon',
        price: 114900,
        originalPrice: 119900,
        discount: 4,
        availability: 'in-stock',
        deliveryTime: '1-2 days',
        deliveryCost: 0,
        url: 'https://www.amazon.in/dp/B0CX23V2ZK',
        logo: '🛒'
      },
      {
        platform: 'Flipkart',
        price: 116900,
        originalPrice: 119900,
        discount: 3,
        availability: 'in-stock',
        deliveryTime: '2-4 days',
        deliveryCost: 0,
        url: 'https://www.flipkart.com/apple-macbook-air-apple-m3-8-gb-256-gb-ssd-macos-sonoma-mxd32hn-a/p/itm6f3c5d0c1c4e4',
        logo: '🛍️'
      },
      {
        platform: 'Apple Store',
        price: 119900,
        availability: 'in-stock',
        deliveryTime: '5-7 days',
        deliveryCost: 0,
        url: 'https://www.apple.com/in/shop/buy-mac/macbook-air/13-inch-m3',
        logo: '🍎'
      }
    ],
    priceHistory: [
      { date: '2024-01-01', price: 119900, platform: 'Amazon' },
      { date: '2024-01-15', price: 118900, platform: 'Amazon' },
      { date: '2024-02-01', price: 116900, platform: 'Amazon' },
      { date: '2024-02-15', price: 114900, platform: 'Amazon' }
    ],
    similarProducts: ['1', '3']
  },
  {
    id: '3',
    name: 'Lakme Absolute Perfect Radiance Kit',
    image: 'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Beauty',
    rating: 4.3,
    reviews: 2156,
    description: 'Complete skincare kit with serum, moisturizer, and sunscreen for radiant skin.',
    specifications: {
      'Kit Contents': '3 products',
      'Skin Type': 'All skin types',
      'Key Benefits': 'Brightening, Hydrating',
      'Brand': 'Lakme',
      'Size': 'Full size products'
    },
    prices: [
      {
        platform: 'Nykaa',
        price: 1299,
        originalPrice: 1799,
        discount: 28,
        availability: 'in-stock',
        deliveryTime: '2-3 days',
        deliveryCost: 0,
        url: 'https://www.nykaa.com/lakme-absolute-perfect-radiance-skin-brightening-day-creme/p/17503',
        logo: '💄'
      },
      {
        platform: 'Purplle',
        price: 1399,
        originalPrice: 1799,
        discount: 22,
        availability: 'in-stock',
        deliveryTime: '3-4 days',
        deliveryCost: 49,
        url: 'https://www.purplle.com/product/lakme-absolute-perfect-radiance-skin-brightening-day-creme-50-g',
        logo: '🌸'
      },
      {
        platform: 'Amazon',
        price: 1449,
        originalPrice: 1799,
        discount: 19,
        availability: 'in-stock',
        deliveryTime: '1-2 days',
        deliveryCost: 0,
        url: 'https://www.amazon.in/dp/B07BQXZQZQ',
        logo: '🛒'
      }
    ],
    priceHistory: [
      { date: '2024-01-01', price: 1599, platform: 'Nykaa' },
      { date: '2024-01-15', price: 1499, platform: 'Nykaa' },
      { date: '2024-02-01', price: 1399, platform: 'Nykaa' },
      { date: '2024-02-15', price: 1299, platform: 'Nykaa' }
    ],
    similarProducts: ['4', '5']
  },
  {
    id: '4',
    name: 'Levis 511 Slim Fit Jeans',
    image: 'https://images.pexels.com/photos/1082526/pexels-photo-1082526.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    rating: 4.4,
    reviews: 3421,
    description: 'Classic slim fit jeans with premium denim and modern styling.',
    specifications: {
      'Fit': 'Slim',
      'Rise': 'Mid-rise',
      'Fabric': '98% Cotton, 2% Elastane',
      'Wash': 'Dark Blue',
      'Brand': 'Levis'
    },
    prices: [
      {
        platform: 'Myntra',
        price: 2399,
        originalPrice: 3999,
        discount: 40,
        availability: 'in-stock',
        deliveryTime: '2-4 days',
        deliveryCost: 0,
        url: 'https://www.myntra.com/jeans/levis/levis-men-511-slim-fit-mid-rise-clean-look-stretchable-jeans/1700834/buy',
        logo: '👕'
      },
      {
        platform: 'Ajio',
        price: 2499,
        originalPrice: 3999,
        discount: 38,
        availability: 'in-stock',
        deliveryTime: '3-5 days',
        deliveryCost: 0,
        url: 'https://www.ajio.com/levis-511-slim-fit-jeans/p/460307735_blue',
        logo: '🛒'
      },
      {
        platform: 'Amazon',
        price: 2799,
        originalPrice: 3999,
        discount: 30,
        availability: 'in-stock',
        deliveryTime: '1-2 days',
        deliveryCost: 0,
        url: 'https://www.amazon.in/dp/B07BQXZQZQ',
        logo: '🛒'
      }
    ],
    priceHistory: [
      { date: '2024-01-01', price: 2999, platform: 'Myntra' },
      { date: '2024-01-15', price: 2799, platform: 'Myntra' },
      { date: '2024-02-01', price: 2599, platform: 'Myntra' },
      { date: '2024-02-15', price: 2399, platform: 'Myntra' }
    ],
    similarProducts: ['3', '5']
  },
  {
    id: '5',
    name: 'Sony WH-1000XM5 Headphones',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.7,
    reviews: 5678,
    description: 'Premium noise-canceling headphones with industry-leading technology.',
    specifications: {
      'Type': 'Over-ear wireless',
      'Noise Cancellation': 'Industry-leading',
      'Battery': '30 hours',
      'Connectivity': 'Bluetooth 5.2',
      'Weight': '250g'
    },
    prices: [
      {
        platform: 'Amazon',
        price: 24990,
        originalPrice: 29990,
        discount: 17,
        availability: 'in-stock',
        deliveryTime: '1-2 days',
        deliveryCost: 0,
        url: 'https://www.amazon.in/dp/B09XS7JWHH',
        logo: '🛒'
      },
      {
        platform: 'Flipkart',
        price: 25990,
        originalPrice: 29990,
        discount: 13,
        availability: 'in-stock',
        deliveryTime: '2-3 days',
        deliveryCost: 0,
        url: 'https://www.flipkart.com/sony-wh-1000xm5-bluetooth-headset/p/itm6ac6485515ae4',
        logo: '🛍️'
      },
      {
        platform: 'Croma',
        price: 27990,
        originalPrice: 29990,
        discount: 7,
        availability: 'limited',
        deliveryTime: '3-5 days',
        deliveryCost: 99,
        url: 'https://www.croma.com/sony-wh-1000xm5-wireless-noise-cancelling-headphones-black/p/267134',
        logo: '🏪'
      }
    ],
    priceHistory: [
      { date: '2024-01-01', price: 29990, platform: 'Amazon' },
      { date: '2024-01-15', price: 27990, platform: 'Amazon' },
      { date: '2024-02-01', price: 26990, platform: 'Amazon' },
      { date: '2024-02-15', price: 24990, platform: 'Amazon' }
    ],
    similarProducts: ['1', '2']
  },
  {
    id: '6',
    name: 'Nike Air Max 270 Running Shoes',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    rating: 4.5,
    reviews: 4321,
    description: 'Comfortable running shoes with Air Max technology and modern design.',
    specifications: {
      'Type': 'Running Shoes',
      'Material': 'Mesh and Synthetic',
      'Sole': 'Rubber',
      'Technology': 'Air Max',
      'Brand': 'Nike'
    },
    prices: [
      {
        platform: 'Amazon',
        price: 8995,
        originalPrice: 12995,
        discount: 31,
        availability: 'in-stock',
        deliveryTime: '1-2 days',
        deliveryCost: 0,
        url: 'https://www.amazon.in/dp/B07BQXZQZQ',
        logo: '🛒'
      },
      {
        platform: 'Myntra',
        price: 9495,
        originalPrice: 12995,
        discount: 27,
        availability: 'in-stock',
        deliveryTime: '2-4 days',
        deliveryCost: 0,
        url: 'https://www.myntra.com/sports-shoes/nike/nike-men-air-max-270-running-shoes/12345678/buy',
        logo: '👕'
      },
      {
        platform: 'Ajio',
        price: 9995,
        originalPrice: 12995,
        discount: 23,
        availability: 'limited',
        deliveryTime: '3-5 days',
        deliveryCost: 0,
        url: 'https://www.ajio.com/nike-air-max-270-running-shoes/p/460307735_black',
        logo: '🛒'
      }
    ],
    priceHistory: [
      { date: '2024-01-01', price: 10995, platform: 'Amazon' },
      { date: '2024-01-15', price: 9995, platform: 'Amazon' },
      { date: '2024-02-01', price: 9495, platform: 'Amazon' },
      { date: '2024-02-15', price: 8995, platform: 'Amazon' }
    ],
    similarProducts: ['4', '7']
  },
  {
    id: '7',
    name: 'Maybelline Fit Me Foundation',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Beauty',
    rating: 4.2,
    reviews: 6789,
    description: 'Lightweight foundation that matches skin tone and texture for a natural look.',
    specifications: {
      'Coverage': 'Medium',
      'Finish': 'Natural',
      'Skin Type': 'All skin types',
      'SPF': 'SPF 18',
      'Brand': 'Maybelline'
    },
    prices: [
      {
        platform: 'Nykaa',
        price: 399,
        originalPrice: 599,
        discount: 33,
        availability: 'in-stock',
        deliveryTime: '2-3 days',
        deliveryCost: 0,
        url: 'https://www.nykaa.com/maybelline-new-york-fit-me-matte-poreless-liquid-foundation/p/17503',
        logo: '💄'
      },
      {
        platform: 'Purplle',
        price: 449,
        originalPrice: 599,
        discount: 25,
        availability: 'in-stock',
        deliveryTime: '3-4 days',
        deliveryCost: 49,
        url: 'https://www.purplle.com/product/maybelline-fit-me-foundation',
        logo: '🌸'
      },
      {
        platform: 'Amazon',
        price: 479,
        originalPrice: 599,
        discount: 20,
        availability: 'in-stock',
        deliveryTime: '1-2 days',
        deliveryCost: 0,
        url: 'https://www.amazon.in/dp/B07BQXZQZQ',
        logo: '🛒'
      }
    ],
    priceHistory: [
      { date: '2024-01-01', price: 549, platform: 'Nykaa' },
      { date: '2024-01-15', price: 499, platform: 'Nykaa' },
      { date: '2024-02-01', price: 449, platform: 'Nykaa' },
      { date: '2024-02-15', price: 399, platform: 'Nykaa' }
    ],
    similarProducts: ['3', '8']
  },
  {
    id: '8',
    name: 'Samsung Galaxy Buds2 Pro',
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.6,
    reviews: 3456,
    description: 'Premium wireless earbuds with active noise cancellation and Hi-Fi sound.',
    specifications: {
      'Type': 'True Wireless',
      'Noise Cancellation': 'Active',
      'Battery': '8 hours + 20 hours case',
      'Connectivity': 'Bluetooth 5.3',
      'Water Resistance': 'IPX7'
    },
    prices: [
      {
        platform: 'Amazon',
        price: 11999,
        originalPrice: 17999,
        discount: 33,
        availability: 'in-stock',
        deliveryTime: '1-2 days',
        deliveryCost: 0,
        url: 'https://www.amazon.in/dp/B0B2RQRQRQ',
        logo: '🛒'
      },
      {
        platform: 'Flipkart',
        price: 12499,
        originalPrice: 17999,
        discount: 31,
        availability: 'in-stock',
        deliveryTime: '2-3 days',
        deliveryCost: 0,
        url: 'https://www.flipkart.com/samsung-galaxy-buds2-pro-bluetooth-headset/p/itm6ac6485515ae4',
        logo: '🛍️'
      },
      {
        platform: 'Croma',
        price: 13999,
        originalPrice: 17999,
        discount: 22,
        availability: 'limited',
        deliveryTime: '3-5 days',
        deliveryCost: 99,
        url: 'https://www.croma.com/samsung-galaxy-buds2-pro-wireless-earbuds/p/267134',
        logo: '🏪'
      }
    ],
    priceHistory: [
      { date: '2024-01-01', price: 15999, platform: 'Amazon' },
      { date: '2024-01-15', price: 14499, platform: 'Amazon' },
      { date: '2024-02-01', price: 13499, platform: 'Amazon' },
      { date: '2024-02-15', price: 11999, platform: 'Amazon' }
    ],
    similarProducts: ['5', '1']
  },
  // NEW PRODUCTS - Including Dresses and More Variety
  {
    id: '9',
    name: 'Zara Floral Midi Dress',
    image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    rating: 4.3,
    reviews: 2847,
    description: 'Elegant floral midi dress perfect for casual and semi-formal occasions.',
    specifications: {
      'Length': 'Midi',
      'Sleeve': 'Short sleeve',
      'Pattern': 'Floral',
      'Material': '100% Viscose',
      'Brand': 'Zara'
    },
    prices: [
      {
        platform: 'Myntra',
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        availability: 'in-stock',
        deliveryTime: '2-4 days',
        deliveryCost: 0,
        url: 'https://www.myntra.com/dresses/zara/zara-women-floral-midi-dress/12345678/buy',
        logo: '👕'
      },
      {
        platform: 'Ajio',
        price: 2199,
        originalPrice: 2999,
        discount: 27,
        availability: 'in-stock',
        deliveryTime: '3-5 days',
        deliveryCost: 0,
        url: 'https://www.ajio.com/zara-floral-midi-dress/p/460307735_floral',
        logo: '🛒'
      },
      {
        platform: 'Amazon',
        price: 2299,
        originalPrice: 2999,
        discount: 23,
        availability: 'limited',
        deliveryTime: '1-2 days',
        deliveryCost: 0,
        url: 'https://www.amazon.in/dp/B07DRESS01',
        logo: '🛒'
      }
    ],
    priceHistory: [
      { date: '2024-01-01', price: 2799, platform: 'Myntra' },
      { date: '2024-01-15', price: 2499, platform: 'Myntra' },
      { date: '2024-02-01', price: 2199, platform: 'Myntra' },
      { date: '2024-02-15', price: 1999, platform: 'Myntra' }
    ],
    similarProducts: ['10', '11']
  },
  {
    id: '10',
    name: 'H&M Black Evening Dress',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    rating: 4.4,
    reviews: 1923,
    description: 'Sophisticated black evening dress with elegant silhouette for special occasions.',
    specifications: {
      'Length': 'Maxi',
      'Sleeve': 'Sleeveless',
      'Color': 'Black',
      'Material': '95% Polyester, 5% Elastane',
      'Brand': 'H&M'
    },
    prices: [
      {
        platform: 'Myntra',
        price: 2499,
        originalPrice: 3499,
        discount: 29,
        availability: 'in-stock',
        deliveryTime: '2-4 days',
        deliveryCost: 0,
        url: 'https://www.myntra.com/dresses/hm/hm-women-black-evening-dress/87654321/buy',
        logo: '👕'
      },
      {
        platform: 'Ajio',
        price: 2699,
        originalPrice: 3499,
        discount: 23,
        availability: 'in-stock',
        deliveryTime: '3-5 days',
        deliveryCost: 0,
        url: 'https://www.ajio.com/hm-black-evening-dress/p/460307735_black',
        logo: '🛒'
      }
    ],
    priceHistory: [
      { date: '2024-01-01', price: 3199, platform: 'Myntra' },
      { date: '2024-01-15', price: 2899, platform: 'Myntra' },
      { date: '2024-02-01', price: 2699, platform: 'Myntra' },
      { date: '2024-02-15', price: 2499, platform: 'Myntra' }
    ],
    similarProducts: ['9', '11']
  },
  {
    id: '11',
    name: 'Forever 21 Summer Dress',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    rating: 4.1,
    reviews: 3456,
    description: 'Light and breezy summer dress perfect for casual outings and beach days.',
    specifications: {
      'Length': 'Mini',
      'Sleeve': 'Sleeveless',
      'Pattern': 'Solid',
      'Material': '100% Cotton',
      'Brand': 'Forever 21'
    },
    prices: [
      {
        platform: 'Myntra',
        price: 1299,
        originalPrice: 1999,
        discount: 35,
        availability: 'in-stock',
        deliveryTime: '2-4 days',
        deliveryCost: 0,
        url: 'https://www.myntra.com/dresses/forever21/forever21-women-summer-dress/11223344/buy',
        logo: '👕'
      },
      {
        platform: 'Amazon',
        price: 1399,
        originalPrice: 1999,
        discount: 30,
        availability: 'in-stock',
        deliveryTime: '1-2 days',
        deliveryCost: 0,
        url: 'https://www.amazon.in/dp/B07DRESS02',
        logo: '🛒'
      }
    ],
    priceHistory: [
      { date: '2024-01-01', price: 1799, platform: 'Myntra' },
      { date: '2024-01-15', price: 1599, platform: 'Myntra' },
      { date: '2024-02-01', price: 1399, platform: 'Myntra' },
      { date: '2024-02-15', price: 1299, platform: 'Myntra' }
    ],
    similarProducts: ['9', '10']
  },
  {
    id: '12',
    name: 'Adidas Ultraboost 22 Shoes',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    rating: 4.6,
    reviews: 5432,
    description: 'Premium running shoes with responsive cushioning and energy return.',
    specifications: {
      'Type': 'Running Shoes',
      'Technology': 'Boost',
      'Upper': 'Primeknit',
      'Sole': 'Continental Rubber',
      'Brand': 'Adidas'
    },
    prices: [
      {
        platform: 'Amazon',
        price: 12999,
        originalPrice: 16999,
        discount: 24,
        availability: 'in-stock',
        deliveryTime: '1-2 days',
        deliveryCost: 0,
        url: 'https://www.amazon.in/dp/B07SHOES01',
        logo: '🛒'
      },
      {
        platform: 'Myntra',
        price: 13499,
        originalPrice: 16999,
        discount: 21,
        availability: 'in-stock',
        deliveryTime: '2-4 days',
        deliveryCost: 0,
        url: 'https://www.myntra.com/sports-shoes/adidas/adidas-ultraboost-22/55667788/buy',
        logo: '👕'
      }
    ],
    priceHistory: [
      { date: '2024-01-01', price: 15999, platform: 'Amazon' },
      { date: '2024-01-15', price: 14999, platform: 'Amazon' },
      { date: '2024-02-01', price: 13999, platform: 'Amazon' },
      { date: '2024-02-15', price: 12999, platform: 'Amazon' }
    ],
    similarProducts: ['6', '13']
  },
  {
    id: '13',
    name: 'Puma RS-X Sneakers',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    rating: 4.3,
    reviews: 2876,
    description: 'Retro-inspired sneakers with bold design and comfortable fit.',
    specifications: {
      'Type': 'Lifestyle Sneakers',
      'Style': 'Retro',
      'Upper': 'Mesh and Synthetic',
      'Sole': 'Rubber',
      'Brand': 'Puma'
    },
    prices: [
      {
        platform: 'Amazon',
        price: 6999,
        originalPrice: 9999,
        discount: 30,
        availability: 'in-stock',
        deliveryTime: '1-2 days',
        deliveryCost: 0,
        url: 'https://www.amazon.in/dp/B07SHOES02',
        logo: '🛒'
      },
      {
        platform: 'Myntra',
        price: 7499,
        originalPrice: 9999,
        discount: 25,
        availability: 'in-stock',
        deliveryTime: '2-4 days',
        deliveryCost: 0,
        url: 'https://www.myntra.com/casual-shoes/puma/puma-rs-x-sneakers/99887766/buy',
        logo: '👕'
      }
    ],
    priceHistory: [
      { date: '2024-01-01', price: 8999, platform: 'Amazon' },
      { date: '2024-01-15', price: 7999, platform: 'Amazon' },
      { date: '2024-02-01', price: 7499, platform: 'Amazon' },
      { date: '2024-02-15', price: 6999, platform: 'Amazon' }
    ],
    similarProducts: ['6', '12']
  },
  {
    id: '14',
    name: 'Nykaa Matte Lipstick Set',
    image: 'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Beauty',
    rating: 4.4,
    reviews: 4567,
    description: 'Long-lasting matte lipstick set with 5 trending shades.',
    specifications: {
      'Finish': 'Matte',
      'Count': '5 lipsticks',
      'Formula': 'Long-lasting',
      'Cruelty-free': 'Yes',
      'Brand': 'Nykaa'
    },
    prices: [
      {
        platform: 'Nykaa',
        price: 999,
        originalPrice: 1499,
        discount: 33,
        availability: 'in-stock',
        deliveryTime: '2-3 days',
        deliveryCost: 0,
        url: 'https://www.nykaa.com/nykaa-matte-lipstick-set/p/17504',
        logo: '💄'
      },
      {
        platform: 'Amazon',
        price: 1199,
        originalPrice: 1499,
        discount: 20,
        availability: 'in-stock',
        deliveryTime: '1-2 days',
        deliveryCost: 0,
        url: 'https://www.amazon.in/dp/B07LIPSTICK01',
        logo: '🛒'
      }
    ],
    priceHistory: [
      { date: '2024-01-01', price: 1299, platform: 'Nykaa' },
      { date: '2024-01-15', price: 1199, platform: 'Nykaa' },
      { date: '2024-02-01', price: 1099, platform: 'Nykaa' },
      { date: '2024-02-15', price: 999, platform: 'Nykaa' }
    ],
    similarProducts: ['3', '7']
  },
  {
    id: '15',
    name: 'OnePlus 11 5G Smartphone',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.5,
    reviews: 8765,
    description: 'Flagship smartphone with Snapdragon 8 Gen 2 and 100W fast charging.',
    specifications: {
      'Processor': 'Snapdragon 8 Gen 2',
      'RAM': '12GB',
      'Storage': '256GB',
      'Display': '6.7-inch AMOLED',
      'Camera': '50MP Triple Camera'
    },
    prices: [
      {
        platform: 'Amazon',
        price: 56999,
        originalPrice: 61999,
        discount: 8,
        availability: 'in-stock',
        deliveryTime: '1-2 days',
        deliveryCost: 0,
        url: 'https://www.amazon.in/dp/B07ONEPLUS01',
        logo: '🛒'
      },
      {
        platform: 'Flipkart',
        price: 57999,
        originalPrice: 61999,
        discount: 6,
        availability: 'in-stock',
        deliveryTime: '2-3 days',
        deliveryCost: 0,
        url: 'https://www.flipkart.com/oneplus-11-5g/p/itm6ac6485515ae5',
        logo: '🛍️'
      }
    ],
    priceHistory: [
      { date: '2024-01-01', price: 61999, platform: 'Amazon' },
      { date: '2024-01-15', price: 59999, platform: 'Amazon' },
      { date: '2024-02-01', price: 58999, platform: 'Amazon' },
      { date: '2024-02-15', price: 56999, platform: 'Amazon' }
    ],
    similarProducts: ['1', '2']
  }
];

export const categories = ['All', 'Electronics', 'Fashion', 'Beauty'];

export const searchSuggestions = [
  { id: '1', name: 'iPhone 15 Pro Max', category: 'Electronics' },
  { id: '2', name: 'MacBook Air M3', category: 'Electronics' },
  { id: '3', name: 'Lakme skincare', category: 'Beauty' },
  { id: '4', name: 'Levis jeans', category: 'Fashion' },
  { id: '5', name: 'Sony headphones', category: 'Electronics' },
  { id: '6', name: 'Nike shoes', category: 'Fashion' },
  { id: '7', name: 'Maybelline foundation', category: 'Beauty' },
  { id: '8', name: 'Samsung earbuds', category: 'Electronics' },
  { id: '9', name: 'Dresses', category: 'Fashion' },
  { id: '10', name: 'Evening dress', category: 'Fashion' },
  { id: '11', name: 'Summer dress', category: 'Fashion' },
  { id: '12', name: 'Adidas shoes', category: 'Fashion' },
  { id: '13', name: 'Puma sneakers', category: 'Fashion' },
  { id: '14', name: 'Lipstick set', category: 'Beauty' },
  { id: '15', name: 'OnePlus phone', category: 'Electronics' },
  { id: '16', name: 'Wireless earbuds', category: 'Electronics' },
  { id: '17', name: 'Foundation makeup', category: 'Beauty' },
  { id: '18', name: 'Running shoes', category: 'Fashion' }
];