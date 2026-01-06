import React from 'react';
import { X, Star, TrendingDown, Truck, ExternalLink, Clock } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Product } from '../types/Product';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  const lowestPrice = Math.min(...product.prices.map(p => p.price));
  const sortedPrices = [...product.prices].sort((a, b) => a.price - b.price);

  const chartData = product.priceHistory.map(point => ({
    date: new Date(point.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    price: point.price
  }));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-gray-600">{product.rating}</span>
              </div>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-gray-600">{product.reviews} reviews</span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-blue-600 font-medium">{product.category}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded-xl mb-6"
              />

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Description</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h4>
                <div className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600">{key}:</span>
                      <span className="text-gray-900 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Comparison</h3>
                <div className="space-y-3">
                  {sortedPrices.map((price, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 ${
                        price.price === lowestPrice
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{price.logo}</div>
                        <div>
                          <p className="font-semibold text-gray-900">{price.platform}</p>
                          <div className="flex items-center text-sm text-gray-600">
                            <Truck className="w-3 h-3 mr-1" />
                            {price.deliveryTime}
                            {price.deliveryCost > 0 && ` • ₹${price.deliveryCost} delivery`}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-gray-900">
                            ₹{price.price.toLocaleString()}
                          </span>
                          {price.price === lowestPrice && (
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                              Best Price
                            </span>
                          )}
                        </div>
                        {price.originalPrice && (
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500 line-through">
                              ₹{price.originalPrice.toLocaleString()}
                            </span>
                            <span className="text-sm text-green-600 font-medium">
                              {price.discount}% off
                            </span>
                          </div>
                        )}
                        <div className="mt-2">
                          <a
                            href={price.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                          >
                            Buy Now
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price History Chart */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Price History</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    Last 2 months
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
                      <YAxis stroke="#6b7280" fontSize={12} />
                      <Tooltip
                        formatter={(value: any) => [`₹${value.toLocaleString()}`, 'Price']}
                        labelStyle={{ color: '#374151' }}
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px'
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="price"
                        stroke="url(#gradient)"
                        strokeWidth={3}
                        dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <TrendingDown className="w-5 h-5 text-green-600 mr-2" />
                    <p className="text-sm text-green-800">
                      Price has dropped by ₹{(Math.max(...chartData.map(d => d.price)) - Math.min(...chartData.map(d => d.price))).toLocaleString()} in the last 2 months!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};