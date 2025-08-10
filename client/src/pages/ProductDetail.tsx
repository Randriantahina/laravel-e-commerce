import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Star, User } from 'lucide-react';
import ProductGallery from '../components/Product/ProductGallery';
import ProductInfo from '../components/Product/ProductInfo';
import ProductCard from '../components/Products/ProductCard';

// Mock data - à remplacer par des données réelles de l'API
const mockProduct = {
  id: 1,
  name: 'iPhone 15 Pro Max 256GB Titane Naturel',
  price: 1229,
  originalPrice: 1399,
  rating: 4.8,
  reviews: 324,
  description: 'L\'iPhone 15 Pro Max redéfinit ce qu\'un smartphone peut faire. Avec son design en titane de qualité aérospatiale, sa puce A17 Pro révolutionnaire et son système de caméra Pro avancé, il offre des performances exceptionnelles dans un format élégant.',
  features: [
    'Écran Super Retina XDR de 6,7 pouces',
    'Puce A17 Pro avec GPU 6 cœurs',
    'Système de caméra Pro 48 Mpx',
    'Zoom optique 5x',
    'Autonomie jusqu\'à 29 heures de lecture vidéo',
    'Résistant aux éclaboussures, à l\'eau et à la poussière (IP68)',
    'Face ID pour une authentification sécurisée',
    'Compatible 5G'
  ],
  inStock: true,
  stockCount: 15,
  brand: 'Apple',
  category: 'Smartphones',
  sku: 'IPH15PM-256-TN',
  images: [
    'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1607936854279-55e8f4bc233b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ]
};

const mockReviews = [
  {
    id: 1,
    user: 'Marie Dubois',
    rating: 5,
    date: '2024-01-15',
    comment: 'Excellent produit ! La qualité de l\'écran est exceptionnelle et les performances sont au rendez-vous.',
    verified: true
  },
  {
    id: 2,
    user: 'Pierre Martin',
    rating: 4,
    date: '2024-01-10',
    comment: 'Très bon smartphone, mais le prix reste élevé. La qualité photo est impressionnante.',
    verified: true
  },
  {
    id: 3,
    user: 'Sophie Laurent',
    rating: 5,
    date: '2024-01-08',
    comment: 'Je recommande vivement ! L\'autonomie est excellente et le design est magnifique.',
    verified: false
  }
];

const mockRelatedProducts = [
  {
    id: 2,
    name: 'iPhone 15 Pro 128GB',
    price: 1099,
    originalPrice: 1229,
    rating: 4.7,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Smartphones',
    brand: 'Apple'
  },
  {
    id: 3,
    name: 'AirPods Pro 2ème génération',
    price: 279,
    originalPrice: 329,
    rating: 4.8,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'Populaire',
    badgeColor: 'bg-blue-500',
    category: 'Audio',
    brand: 'Apple'
  },
  {
    id: 4,
    name: 'Apple Watch Series 9',
    price: 429,
    originalPrice: 499,
    rating: 4.6,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Montres connectées',
    brand: 'Apple'
  }
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'specs'>('description');

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary-600">
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/products" className="text-gray-500 hover:text-primary-600">
              Produits
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to={`/categories/${mockProduct.category.toLowerCase()}`} className="text-gray-500 hover:text-primary-600">
              {mockProduct.category}
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{mockProduct.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <div>
            <ProductGallery images={mockProduct.images} productName={mockProduct.name} />
          </div>

          {/* Product Info */}
          <div>
            <ProductInfo product={mockProduct} />
          </div>
        </div>

        {/* Product Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'description'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'reviews'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Avis ({mockProduct.reviews})
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === 'specs'
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Spécifications
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {mockProduct.description}
                </p>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Caractéristiques principales</h4>
                <ul className="space-y-2">
                  {mockProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {mockReviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-medium text-gray-900">{review.user}</span>
                          {review.verified && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Achat vérifié
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Général</h4>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Marque</dt>
                      <dd className="font-medium">{mockProduct.brand}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Modèle</dt>
                      <dd className="font-medium">iPhone 15 Pro Max</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Stockage</dt>
                      <dd className="font-medium">256 GB</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Couleur</dt>
                      <dd className="font-medium">Titane Naturel</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technique</h4>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Processeur</dt>
                      <dd className="font-medium">A17 Pro</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Écran</dt>
                      <dd className="font-medium">6,7" Super Retina XDR</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Caméra</dt>
                      <dd className="font-medium">48 Mpx Pro</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Connectivité</dt>
                      <dd className="font-medium">5G, Wi-Fi 6E</dd>
                    </div>
                  </dl>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Produits Similaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockRelatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
