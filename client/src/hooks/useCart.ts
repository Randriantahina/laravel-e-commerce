import { useState, useEffect, useCallback } from 'react';
import type { CartItem, Cart } from '../types/cart';

const CART_STORAGE_KEY = 'ecommerce_cart';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart);
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = useCallback(
    (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
      setIsLoading(true);

      setCartItems((prevItems) => {
        const existingItem = prevItems.find(
          (cartItem) =>
            cartItem.productId === item.productId &&
            cartItem.variant === item.variant
        );

        if (existingItem) {
          // Update quantity if item already exists
          return prevItems.map((cartItem) =>
            cartItem.productId === item.productId &&
            cartItem.variant === item.variant
              ? {
                  ...cartItem,
                  quantity: Math.min(
                    cartItem.quantity + quantity,
                    cartItem.maxQuantity
                  ),
                }
              : cartItem
          );
        } else {
          // Add new item
          return [...prevItems, { ...item, quantity }];
        }
      });

      setIsLoading(false);
    },
    []
  );

  // Remove item from cart
  const removeFromCart = useCallback((productId: number, variant?: string) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.productId === productId && item.variant === variant)
      )
    );
  }, []);

  // Update item quantity
  const updateQuantity = useCallback(
    (productId: number, quantity: number, variant?: string) => {
      if (quantity <= 0) {
        removeFromCart(productId, variant);
        return;
      }

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.productId === productId && item.variant === variant
            ? { ...item, quantity: Math.min(quantity, item.maxQuantity) }
            : item
        )
      );
    },
    [removeFromCart]
  );

  // Clear entire cart
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  // Get item quantity
  const getItemQuantity = useCallback(
    (productId: number, variant?: string) => {
      const item = cartItems.find(
        (item) => item.productId === productId && item.variant === variant
      );
      return item?.quantity || 0;
    },
    [cartItems]
  );

  // Check if item is in cart
  const isInCart = useCallback(
    (productId: number, variant?: string) => {
      return cartItems.some(
        (item) => item.productId === productId && item.variant === variant
      );
    },
    [cartItems]
  );

  // Calculate cart totals
  const calculateTotals = useCallback((): Cart => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    // Calculate discount from original prices
    const discount = cartItems.reduce((sum, item) => {
      if (item.originalPrice && item.originalPrice > item.price) {
        return sum + (item.originalPrice - item.price) * item.quantity;
      }
      return sum;
    }, 0);

    // Free shipping threshold
    const freeShippingThreshold = 50;
    const shipping = subtotal >= freeShippingThreshold ? 0 : 5.99;

    // Tax calculation (20% VAT)
    const tax = subtotal * 0.2;

    const total = subtotal + shipping + tax;

    return {
      items: cartItems,
      subtotal,
      tax,
      shipping,
      discount,
      total,
      itemCount,
    };
  }, [cartItems]);

  // Get cart summary
  const cart = calculateTotals();

  return {
    // State
    cartItems,
    cart,
    isLoading,

    // Actions
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,

    // Utilities
    getItemQuantity,
    isInCart,

    // Computed values
    isEmpty: cartItems.length === 0,
    itemCount: cart.itemCount,
    subtotal: cart.subtotal,
    total: cart.total,
  };
};
