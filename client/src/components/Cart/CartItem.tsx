import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, Heart } from 'lucide-react';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    quantity: number;
    inStock: boolean;
    maxQuantity: number;
    variant?: string;
  };
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onMoveToWishlist: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemoveItem,
  onMoveToWishlist,
}) => {
  const increaseQuantity = () => {
    if (item.quantity < item.maxQuantity) {
      onUpdateQuantity(item.id, item.quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  const totalPrice = item.price * item.quantity;
  const originalTotalPrice = item.originalPrice
    ? item.originalPrice * item.quantity
    : null;

  return (
    <div className="flex items-center space-x-4 p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <Link to={`/products/${item.id}`}>
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover rounded-lg hover:opacity-75 transition-opacity"
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <Link
          to={`/products/${item.id}`}
          className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors"
        >
          {item.name}
        </Link>
        {item.variant && (
          <p className="text-sm text-gray-500 mt-1">{item.variant}</p>
        )}

        {/* Stock Status */}
        <div className="mt-2">
          {item.inStock ? (
            <span className="text-sm text-green-600 font-medium">En stock</span>
          ) : (
            <span className="text-sm text-red-600 font-medium">
              Rupture de stock
            </span>
          )}
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center space-x-4 mt-3 md:hidden">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={decreaseQuantity}
              disabled={item.quantity <= 1}
              className="p-1 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-3 py-1 font-medium">{item.quantity}</span>
            <button
              onClick={increaseQuantity}
              disabled={item.quantity >= item.maxQuantity}
              className="p-1 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onMoveToWishlist(item.id)}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              title="Déplacer vers la liste de souhaits"
            >
              <Heart className="w-4 h-4" />
            </button>
            <button
              onClick={() => onRemoveItem(item.id)}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              title="Supprimer"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Quantity Controls - Desktop */}
      <div className="hidden md:flex items-center space-x-3">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={decreaseQuantity}
            disabled={item.quantity <= 1}
            className="p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
            {item.quantity}
          </span>
          <button
            onClick={increaseQuantity}
            disabled={item.quantity >= item.maxQuantity}
            className="p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="text-right">
        <div className="text-lg font-bold text-primary-600">
          {totalPrice.toFixed(2)}€
        </div>
        {originalTotalPrice && originalTotalPrice > totalPrice && (
          <div className="text-sm text-gray-500 line-through">
            {originalTotalPrice.toFixed(2)}€
          </div>
        )}
        <div className="text-sm text-gray-500">
          {item.price.toFixed(2)}€ / unité
        </div>
      </div>

      {/* Actions - Desktop */}
      <div className="hidden md:flex flex-col space-y-2">
        <button
          onClick={() => onMoveToWishlist(item.id)}
          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
          title="Déplacer vers la liste de souhaits"
        >
          <Heart className="w-5 h-5" />
        </button>
        <button
          onClick={() => onRemoveItem(item.id)}
          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
          title="Supprimer"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
