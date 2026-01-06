export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  specifications: Record<string, string>;
  prices: PriceComparison[];
  priceHistory: PriceHistoryPoint[];
  similarProducts?: string[];
}

export interface PriceComparison {
  platform: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  availability: 'in-stock' | 'out-of-stock' | 'limited';
  deliveryTime: string;
  deliveryCost: number;
  url: string;
  logo: string;
}

export interface PriceHistoryPoint {
  date: string;
  price: number;
  platform: string;
}

export interface SearchSuggestion {
  id: string;
  name: string;
  category: string;
}