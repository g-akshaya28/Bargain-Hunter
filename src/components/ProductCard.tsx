import React from 'react';
import { Star, TrendingDown, Truck, ExternalLink } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const lowestPrice = Math.min(...product.prices.map(p => p.price));
  const highestPrice = Math.max(...product.prices.map(p => p.price));
  const savings = highestPrice - lowestPrice;
  const savingsPercentage = Math.round((savings / highestPrice) * 100);

  const lowestPricePlatform = product.prices.find(p => p.price === lowestPrice);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        {savingsPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
            <TrendingDown className="w-3 h-3 mr-1" />
            Save {savingsPercentage}%
          </div>
        )}
        <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
          {product.category}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-gray-600">{product.reviews} reviews</span>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Best Price:</p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gray-900">
                ₹{lowestPrice.toLocaleString()}
              </span>
              {lowestPricePlatform?.originalPrice && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ₹{lowestPricePlatform.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">on {lowestPricePlatform?.platform}</p>
              <div className="flex items-center text-xs text-green-600">
                <Truck className="w-3 h-3 mr-1" />
                {lowestPricePlatform?.deliveryTime}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Available on {product.prices.length} platforms</p>
          <div className="flex -space-x-2">
            {product.prices.slice(0, 4).map((price, index) => (
              <div
                key={index}
                className="w-8 h-8 bg-gray-100 border-2 border-white rounded-full flex items-center justify-center text-xs"
                title={price.platform}
              >
                {price.logo}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onViewDetails(product)}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium"
          >
            Compare Prices
          </button>
          <a
            href={lowestPricePlatform?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
            title="Buy Now"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};