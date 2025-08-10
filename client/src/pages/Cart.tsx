import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Trash2 } from 'lucide-react';
import CartItem from '../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary';
import ProductCard from '../components/Products/ProductCard';

// Mock data - à remplacer par des données réelles
const mockCartItems = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max 256GB Titane Naturel',
    price: 1229,
    originalPrice: 1399,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    quantity: 1,
    inStock: true,
    maxQuantity: 5,
    variant: '256GB - Titane Naturel'
  },
  {
    id: 2,
    name: 'AirPods Pro 2ème génération',
    price: 279,
    originalPrice: 329,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    quantity: 2,
    inStock: true,
    maxQuantity: 10
  }
];

const mockRecommendedProducts = [
  {
    id: 3,
    name: 'Apple Watch Series 9 GPS',
    price: 429,
    originalPrice: 499,
    rating: 4.7,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'Recommandé',
    badgeColor: 'bg-green-500',
    category: 'Montres connectées',
    brand: 'Apple'
  },
  {
    id: 4,
    name: 'MacBook Air M2 13"',
    price: 1199,
    originalPrice: 1499,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: '-20%',
    badgeColor: 'bg-red-500',
    category: 'Ordinateurs',
    brand: 'Apple'
  }
];

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState(mockCartItems);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const moveToWishlist = (id: number) => {
    // Logique pour déplacer vers la liste de souhaits
    console.log('Déplacer vers la liste de souhaits:', id);
    removeItem(id);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    // Logique pour procéder au checkout
    console.log('Procéder au checkout');
  };

  // Calculs
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = cartItems.reduce((sum, item) => {
    const itemDiscount = item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0;
    return sum + itemDiscount;
  }, 0);
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const tax = subtotal * 0.2; // 20% TVA
  const total = subtotal + shipping + tax;
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Votre panier est vide
            </h1>
            <p className="text-gray-600 mb-8">
              Découvrez nos produits et ajoutez-les à votre panier pour commencer vos achats.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>Découvrir nos produits</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/products"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Continuer mes achats</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">
                Mon Panier ({itemCount})
              </h1>
              {cartItems.length > 0 && (
                <button
                  onClick={clearCart}
                  className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="text-sm">Vider le panier</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
                onMoveToWishlist={moveToWishlist}
              />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <CartSummary
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              discount={discount}
              total={total}
              itemCount={itemCount}
              onCheckout={handleCheckout}
            />
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Vous pourriez aussi aimer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockRecommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 bg-white rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Livraison Gratuite</h3>
              <p className="text-sm text-gray-600">Dès 50€ d'achat partout en France</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <ArrowLeft className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Retours Faciles</h3>
              <p className="text-sm text-gray-600">30 jours pour changer d'avis</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Support Client</h3>
              <p className="text-sm text-gray-600">Assistance 7j/7 par chat ou téléphone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
