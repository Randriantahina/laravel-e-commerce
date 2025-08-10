import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Truck,
  Shield,
  RotateCcw
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Features Section */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600 p-3 rounded-lg">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">Livraison Gratuite</h4>
                <p className="text-sm text-gray-300">Dès 50€ d'achat</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600 p-3 rounded-lg">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">Retours Gratuits</h4>
                <p className="text-sm text-gray-300">30 jours pour changer d'avis</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600 p-3 rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">Paiement Sécurisé</h4>
                <p className="text-sm text-gray-300">SSL & cryptage des données</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600 p-3 rounded-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">Support 24/7</h4>
                <p className="text-sm text-gray-300">Assistance client dédiée</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
                <span className="text-xl font-bold">ECommerce</span>
              </div>
              <p className="text-gray-300 mb-4">
                Votre destination shopping en ligne pour les meilleurs produits aux meilleurs prix.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>123 Rue du Commerce, 75001 Paris</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>contact@ecommerce.fr</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">
                    Carrières
                  </Link>
                </li>
                <li>
                  <Link to="/press" className="text-gray-300 hover:text-white transition-colors">
                    Presse
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Client</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/help" className="text-gray-300 hover:text-white transition-colors">
                    Centre d'Aide
                  </Link>
                </li>
                <li>
                  <Link to="/shipping" className="text-gray-300 hover:text-white transition-colors">
                    Livraison
                  </Link>
                </li>
                <li>
                  <Link to="/returns" className="text-gray-300 hover:text-white transition-colors">
                    Retours
                  </Link>
                </li>
                <li>
                  <Link to="/size-guide" className="text-gray-300 hover:text-white transition-colors">
                    Guide des Tailles
                  </Link>
                </li>
                <li>
                  <Link to="/track-order" className="text-gray-300 hover:text-white transition-colors">
                    Suivre ma Commande
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Inscrivez-vous pour recevoir nos offres exclusives et nouveautés.
              </p>
              <div className="space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                  />
                  <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-r-lg transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-300">Suivez-nous:</span>
                  <div className="flex space-x-2">
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-300">
                © 2024 ECommerce. Tous droits réservés.
              </p>
              <div className="flex space-x-4 text-sm">
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Politique de Confidentialité
                </Link>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Conditions d'Utilisation
                </Link>
                <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-sm text-gray-300">Paiements acceptés:</span>
              <div className="flex space-x-2">
                <CreditCard className="w-8 h-5 text-gray-300" />
                <div className="w-8 h-5 bg-blue-600 rounded text-xs flex items-center justify-center text-white font-bold">
                  V
                </div>
                <div className="w-8 h-5 bg-red-600 rounded text-xs flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="w-8 h-5 bg-yellow-500 rounded text-xs flex items-center justify-center text-white font-bold">
                  P
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
