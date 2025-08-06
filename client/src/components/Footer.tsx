import { Facebook, Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section 1 : Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Good Store</h2>
          <p className="text-sm text-gray-300">
            Vêtements de qualité à petit prix. Merci de soutenir une boutique
            locale passionnée par la mode et l’accessibilité.
          </p>
        </div>

        {/* Section 2 : Réseaux sociaux */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
          <ul className="flex space-x-6 text-gray-300">
            <li>
              <a
                href="#"
                className="hover:text-white flex items-center space-x-2"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white flex items-center space-x-2"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Good Store. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
