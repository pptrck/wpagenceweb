import React from 'react';
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">WP Agency Web</span>
            </div>
            <p className="text-gray-300 mb-6">
              Votre partenaire de confiance pour tous vos projets WordPress. 
              Nous créons des sites web performants et optimisés pour votre succès.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Création WordPress</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Refonte de site</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Optimisation SEO</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Maintenance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Formation WordPress</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Ressources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog WordPress</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Guides SEO</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tutoriels</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Témoignages</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-300">contact@wpagencyweb.fr</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                <div className="text-gray-300">
                  <p>123 Rue de la Innovation</p>
                  <p>75001 Paris, France</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 WP Agency Web. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Mentions légales</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;