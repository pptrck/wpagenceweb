import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      // Si on n'est pas sur la page d'accueil, rediriger vers l'accueil avec l'ancre
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">WP Agency Web</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('a-propos')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Devis gratuit
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('accueil')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('blog')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('a-propos')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Devis gratuit
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;