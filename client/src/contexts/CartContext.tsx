import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useCart } from '../hooks/useCart';
import type { CartItem, Cart } from '../types/cart';

interface CartContextType {
  // State
  cartItems: CartItem[];
  cart: Cart;
  isLoading: boolean;

  // Actions
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (productId: number, variant?: string) => void;
  updateQuantity: (
    productId: number,
    quantity: number,
    variant?: string
  ) => void;
  clearCart: () => void;

  // Utilities
  getItemQuantity: (productId: number, variant?: string) => number;
  isInCart: (productId: number, variant?: string) => boolean;

  // Computed values
  isEmpty: boolean;
  itemCount: number;
  subtotal: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const cartHook = useCart();

  return (
    <CartContext.Provider value={cartHook}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};
