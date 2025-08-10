import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Shirt, 
  Home, 
  Dumbbell, 
  Heart, 
  Book,
  ArrowRight
} from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Électronique',
    description: 'Smartphones, laptops, gadgets',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    link: '/categories/electronics',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Mode',
    description: 'Vêtements, chaussures, accessoires',
    icon: Shirt,
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    link: '/categories/fashion',
    color: 'bg-pink-500'
  },
  {
    id: 3,
    name: 'Maison',
    description: 'Mobilier, décoration, électroménager',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    link: '/categories/home',
    color: 'bg-green-500'
  },
  {
    id: 4,
    name: 'Sports',
    description: 'Équipements sportifs, fitness',
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    link: '/categories/sports',
    color: 'bg-orange-500'
  },
  {
    id: 5,
    name: 'Beauté',
    description: 'Cosmétiques, soins, parfums',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    link: '/categories/beauty',
    color: 'bg-purple-500'
  },
  {
    id: 6,
    name: 'Livres',
    description: 'Romans, BD, manuels, e-books',
    icon: Book,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    link: '/categories/books',
    color: 'bg-indigo-500'
  }
];

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explorez nos Catégories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre large gamme de produits soigneusement sélectionnés pour vous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                to={category.link}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icon */}
                  <div className={`absolute top-4 left-4 ${category.color} p-3 rounded-lg shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-300 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-200 mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center text-sm font-medium group-hover:text-primary-300 transition-colors">
                      <span>Découvrir</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Link
            to="/categories"
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105"
          >
            <span>Voir Toutes les Catégories</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
