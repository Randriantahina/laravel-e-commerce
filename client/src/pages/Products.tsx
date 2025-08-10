import React, { useState, useMemo } from 'react';
import { Grid, List, SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '../components/Products/ProductCard';
import ProductFilters from '../components/Products/ProductFilters';

// Mock data - à remplacer par des données réelles de l'API
const mockProducts = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max 256GB',
    price: 1229,
    originalPrice: 1399,
    rating: 4.8,
    reviews: 324,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'Nouveau',
    badgeColor: 'bg-green-500',
    category: 'Électronique',
    brand: 'Apple'
  },
  {
    id: 2,
    name: 'MacBook Air M2 13" 512GB',
    price: 1199,
    originalPrice: 1499,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: '-20%',
    badgeColor: 'bg-red-500',
    category: 'Électronique',
    brand: 'Apple'
  },
  {
    id: 3,
    name: 'AirPods Pro 2ème génération',
    price: 279,
    originalPrice: 329,
    rating: 4.7,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'Populaire',
    badgeColor: 'bg-blue-500',
    category: 'Électronique',
    brand: 'Apple'
  },
  {
    id: 4,
    name: 'Samsung Galaxy S24 Ultra',
    price: 899,
    originalPrice: 999,
    rating: 4.6,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: '-10%',
    badgeColor: 'bg-red-500',
    category: 'Électronique',
    brand: 'Samsung'
  },
  {
    id: 5,
    name: 'iPad Pro 12.9" M2 WiFi',
    price: 1099,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'Promo',
    badgeColor: 'bg-orange-500',
    category: 'Électronique',
    brand: 'Apple'
  },
  {
    id: 6,
    name: 'Apple Watch Series 9 GPS',
    price: 429,
    originalPrice: 499,
    rating: 4.7,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'Tendance',
    badgeColor: 'bg-purple-500',
    category: 'Électronique',
    brand: 'Apple'
  }
];

const mockCategories = [
  { id: 'electronics', label: 'Électronique', count: 156 },
  { id: 'fashion', label: 'Mode', count: 89 },
  { id: 'home', label: 'Maison & Jardin', count: 234 },
  { id: 'sports', label: 'Sports & Loisirs', count: 67 },
  { id: 'beauty', label: 'Beauté & Santé', count: 123 },
  { id: 'books', label: 'Livres', count: 45 }
];

const mockBrands = [
  { id: 'apple', label: 'Apple', count: 45 },
  { id: 'samsung', label: 'Samsung', count: 32 },
  { id: 'sony', label: 'Sony', count: 28 },
  { id: 'nike', label: 'Nike', count: 67 },
  { id: 'adidas', label: 'Adidas', count: 54 }
];

const sortOptions = [
  { value: 'relevance', label: 'Pertinence' },
  { value: 'price-asc', label: 'Prix croissant' },
  { value: 'price-desc', label: 'Prix décroissant' },
  { value: 'rating', label: 'Mieux notés' },
  { value: 'newest', label: 'Plus récents' }
];

const Products: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [minRating, setMinRating] = useState(0);

  // Filtrage et tri des produits
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = mockProducts.filter(product => {
      // Filtre par catégorie
      if (selectedCategories.length > 0) {
        const categoryMatch = selectedCategories.some(cat => 
          product.category.toLowerCase().includes(cat.toLowerCase())
        );
        if (!categoryMatch) return false;
      }

      // Filtre par marque
      if (selectedBrands.length > 0) {
        const brandMatch = selectedBrands.some(brand => 
          product.brand.toLowerCase().includes(brand.toLowerCase())
        );
        if (!brandMatch) return false;
      }

      // Filtre par prix
      if (product.price < priceRange.min || product.price > priceRange.max) {
        return false;
      }

      // Filtre par note
      if (product.rating < minRating) {
        return false;
      }

      return true;
    });

    // Tri
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Pertinence - garder l'ordre original
        break;
    }

    return filtered;
  }, [selectedCategories, selectedBrands, priceRange, minRating, sortBy]);

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange({ min: 0, max: 2000 });
    setMinRating(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Catalogue Produits
              </h1>
              <p className="text-gray-600">
                {filteredAndSortedProducts.length} produits trouvés
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filtres</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <ProductFilters
              categories={mockCategories}
              brands={mockBrands}
              priceRange={{ min: 0, max: 2000 }}
              onCategoryChange={setSelectedCategories}
              onBrandChange={setSelectedBrands}
              onPriceChange={setPriceRange}
              onRatingChange={setMinRating}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Grid className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Aucun produit trouvé
                </h3>
                <p className="text-gray-600 mb-4">
                  Essayez de modifier vos filtres pour voir plus de résultats
                </p>
                <button
                  onClick={handleClearFilters}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Effacer les filtres
                </button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredAndSortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {filteredAndSortedProducts.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Précédent
                  </button>
                  <button className="px-3 py-2 bg-primary-600 text-white rounded-lg">
                    1
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    2
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    3
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Suivant
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
