import React, { useState } from 'react';
import { 
  Star, 
  Heart, 
  Share2, 
  ShoppingCart, 
  Minus, 
  Plus, 
  Truck, 
  Shield, 
  RotateCcw,
  Check
} from 'lucide-react';

interface ProductInfoProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    description: string;
    features: string[];
    inStock: boolean;
    stockCount: number;
    brand: string;
    category: string;
    sku: string;
  };
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('default');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : index < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const increaseQuantity = () => {
    if (quantity < product.stockCount) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="space-y-6">
      {/* Product Title & Brand */}
      <div>
        <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
          {product.brand} • {product.category}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {product.name}
        </h1>
        <div className="text-sm text-gray-500">
          SKU: {product.sku}
        </div>
      </div>

      {/* Rating & Reviews */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          {renderStars(product.rating)}
        </div>
        <span className="text-lg font-medium text-gray-900">
          {product.rating}
        </span>
        <span className="text-gray-500">
          ({product.reviews} avis)
        </span>
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          Voir les avis
        </button>
      </div>

      {/* Price */}
      <div className="flex items-center space-x-4">
        <span className="text-4xl font-bold text-primary-600">
          {product.price}€
        </span>
        {product.originalPrice && product.originalPrice > product.price && (
          <>
            <span className="text-2xl text-gray-500 line-through">
              {product.originalPrice}€
            </span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
              -{discountPercentage}%
            </span>
          </>
        )}
      </div>

      {/* Stock Status */}
      <div className="flex items-center space-x-2">
        {product.inStock ? (
          <>
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-green-600 font-medium">
              En stock ({product.stockCount} disponibles)
            </span>
          </>
        ) : (
          <span className="text-red-600 font-medium">Rupture de stock</span>
        )}
      </div>

      {/* Description */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
        <p className="text-gray-700 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Caractéristiques</h3>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quantity & Add to Cart */}
      {product.inStock && (
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Quantité:</span>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
                className="p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 font-medium">{quantity}</span>
              <button
                onClick={increaseQuantity}
                disabled={quantity >= product.stockCount}
                className="p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span>Ajouter au Panier</span>
            </button>
            <button
              onClick={toggleWishlist}
              className={`p-4 border-2 rounded-lg transition-colors ${
                isWishlisted
                  ? 'border-red-500 bg-red-50 text-red-600'
                  : 'border-gray-300 hover:border-gray-400 text-gray-600'
              }`}
            >
              <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
            <button className="p-4 border-2 border-gray-300 hover:border-gray-400 text-gray-600 rounded-lg transition-colors">
              <Share2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Shipping & Returns Info */}
      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <Truck className="w-6 h-6 text-primary-600" />
          <div>
            <div className="font-medium text-gray-900">Livraison gratuite</div>
            <div className="text-sm text-gray-600">Dès 50€ d'achat • Livraison en 2-3 jours</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <RotateCcw className="w-6 h-6 text-primary-600" />
          <div>
            <div className="font-medium text-gray-900">Retours gratuits</div>
            <div className="text-sm text-gray-600">30 jours pour changer d'avis</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Shield className="w-6 h-6 text-primary-600" />
          <div>
            <div className="font-medium text-gray-900">Garantie 2 ans</div>
            <div className="text-sm text-gray-600">Garantie constructeur incluse</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
