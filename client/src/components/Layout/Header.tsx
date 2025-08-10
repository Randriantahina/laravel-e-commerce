import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  User,
  Search,
  Menu,
  X,
  Heart,
  MapPin,
  Phone,
} from 'lucide-react';
import { useCartContext } from '../../contexts/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { itemCount } = useCartContext();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Livraison gratuite dès 50€</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/track-order"
                className="hover:text-primary-200 transition-colors"
              >
                Suivre ma commande
              </Link>
              <Link
                to="/help"
                className="hover:text-primary-200 transition-colors"
              >
                Aide
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">ECommerce</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Rechercher des produits..."
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Search - Mobile */}
            <button
              onClick={toggleSearch}
              className="md:hidden p-2 text-gray-600 hover:text-primary-600"
            >
              <Search className="w-6 h-6" />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="hidden sm:flex p-2 text-gray-600 hover:text-primary-600 relative"
            >
              <Heart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="p-2 text-gray-600 hover:text-primary-600 relative"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* User Account */}
            <Link
              to="/login"
              className="hidden sm:flex p-2 text-gray-600 hover:text-primary-600"
            >
              <User className="w-6 h-6" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-primary-600"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher des produits..."
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center space-x-8 py-4">
            <Link
              to="/categories/electronics"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Électronique
            </Link>
            <Link
              to="/categories/fashion"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Mode
            </Link>
            <Link
              to="/categories/home"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Maison & Jardin
            </Link>
            <Link
              to="/categories/sports"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Sports & Loisirs
            </Link>
            <Link
              to="/categories/beauty"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Beauté & Santé
            </Link>
            <Link
              to="/deals"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Promotions
            </Link>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <Link
                to="/categories/electronics"
                className="block py-2 text-gray-700 hover:text-primary-600"
              >
                Électronique
              </Link>
              <Link
                to="/categories/fashion"
                className="block py-2 text-gray-700 hover:text-primary-600"
              >
                Mode
              </Link>
              <Link
                to="/categories/home"
                className="block py-2 text-gray-700 hover:text-primary-600"
              >
                Maison & Jardin
              </Link>
              <Link
                to="/categories/sports"
                className="block py-2 text-gray-700 hover:text-primary-600"
              >
                Sports & Loisirs
              </Link>
              <Link
                to="/categories/beauty"
                className="block py-2 text-gray-700 hover:text-primary-600"
              >
                Beauté & Santé
              </Link>
              <Link
                to="/deals"
                className="block py-2 text-red-600 hover:text-red-700"
              >
                Promotions
              </Link>
              <hr className="my-2" />
              <Link
                to="/login"
                className="block py-2 text-gray-700 hover:text-primary-600"
              >
                Mon Compte
              </Link>
              <Link
                to="/wishlist"
                className="block py-2 text-gray-700 hover:text-primary-600"
              >
                Ma Liste de Souhaits
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
