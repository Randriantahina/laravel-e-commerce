import React from 'react';
import { ShoppingBag, Truck, Shield, Tag } from 'lucide-react';

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  itemCount: number;
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  shipping,
  tax,
  discount,
  total,
  itemCount,
  onCheckout
}) => {
  const freeShippingThreshold = 50;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Résumé de la commande
      </h2>

      {/* Free Shipping Progress */}
      {remainingForFreeShipping > 0 && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Truck className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">
              Livraison gratuite dès {freeShippingThreshold}€
            </span>
          </div>
          <div className="text-sm text-blue-700 mb-2">
            Plus que {remainingForFreeShipping.toFixed(2)}€ pour la livraison gratuite !
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
            />
          </div>
        </div>
      )}

      {/* Order Summary */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Sous-total ({itemCount} article{itemCount > 1 ? 's' : ''})</span>
          <span>{subtotal.toFixed(2)}€</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span className="flex items-center space-x-1">
              <Tag className="w-4 h-4" />
              <span>Réduction</span>
            </span>
            <span>-{discount.toFixed(2)}€</span>
          </div>
        )}
        
        <div className="flex justify-between text-gray-600">
          <span className="flex items-center space-x-1">
            <Truck className="w-4 h-4" />
            <span>Livraison</span>
          </span>
          <span>{shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)}€`}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>TVA</span>
          <span>{tax.toFixed(2)}€</span>
        </div>
        
        <hr className="border-gray-200" />
        
        <div className="flex justify-between text-lg font-bold text-gray-900">
          <span>Total</span>
          <span>{total.toFixed(2)}€</span>
        </div>
      </div>

      {/* Promo Code */}
      <div className="mb-6">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Code promo"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors">
            Appliquer
          </button>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={onCheckout}
        className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-colors mb-4"
      >
        <ShoppingBag className="w-5 h-5" />
        <span>Passer la commande</span>
      </button>

      {/* Security Badge */}
      <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
        <Shield className="w-4 h-4" />
        <span>Paiement 100% sécurisé</span>
      </div>

      {/* Payment Methods */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-500 text-center mb-2">
          Moyens de paiement acceptés
        </div>
        <div className="flex justify-center space-x-2">
          <div className="w-8 h-5 bg-blue-600 rounded text-xs flex items-center justify-center text-white font-bold">
            V
          </div>
          <div className="w-8 h-5 bg-red-600 rounded text-xs flex items-center justify-center text-white font-bold">
            M
          </div>
          <div className="w-8 h-5 bg-yellow-500 rounded text-xs flex items-center justify-center text-white font-bold">
            P
          </div>
          <div className="w-8 h-5 bg-gray-800 rounded text-xs flex items-center justify-center text-white font-bold">
            A
          </div>
        </div>
      </div>

      {/* Estimated Delivery */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-2 text-sm">
          <Truck className="w-4 h-4 text-gray-600" />
          <span className="text-gray-700">
            <strong>Livraison estimée:</strong> 2-3 jours ouvrés
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
