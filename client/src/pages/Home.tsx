import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeaturedCategories from '../components/Home/FeaturedCategories';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import { Truck, Shield, RotateCcw, Headphones } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-4 p-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Truck className="w-8 h-8 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Livraison Gratuite</h3>
                <p className="text-sm text-gray-600">Dès 50€ d'achat</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Paiement Sécurisé</h3>
                <p className="text-sm text-gray-600">SSL & cryptage</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <RotateCcw className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Retours Gratuits</h3>
                <p className="text-sm text-gray-600">30 jours</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Headphones className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Support 24/7</h3>
                <p className="text-sm text-gray-600">Assistance dédiée</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Restez Informé
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives et les dernières nouveautés
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              />
              <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                S'inscrire
              </button>
            </div>
            <p className="text-sm text-primary-200 mt-4">
              Pas de spam, désabonnement possible à tout moment
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-gray-600">
              Plus de 10,000 clients satisfaits nous font confiance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Marie Dubois"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Marie Dubois</h4>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Excellent service client et livraison ultra rapide. Je recommande vivement !"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Pierre Martin"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Pierre Martin</h4>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Produits de qualité et prix compétitifs. Mon site e-commerce préféré !"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Sophie Laurent"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Sophie Laurent</h4>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Interface intuitive et processus d'achat très simple. Parfait !"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
