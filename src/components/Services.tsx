import React from 'react';
import { Code, Search, Smartphone, Zap, Shield, HeadphonesIcon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Développement WordPress",
      description: "Sites WordPress sur mesure, thèmes personnalisés et fonctionnalités avancées pour votre business.",
      features: ["Thèmes personnalisés", "Plugins sur mesure", "Optimisation performance"]
    },
    {
      icon: Search,
      title: "Référencement SEO",
      description: "Optimisation complète pour améliorer votre visibilité sur Google et attirer plus de clients.",
      features: ["Audit SEO complet", "Optimisation technique", "Stratégie de contenu"]
    },
    {
      icon: Smartphone,
      title: "Design Responsive",
      description: "Sites adaptatifs qui s'affichent parfaitement sur tous les appareils et écrans.",
      features: ["Mobile-first", "Tests multi-appareils", "UX optimisée"]
    },
    {
      icon: Zap,
      title: "Optimisation Performance",
      description: "Sites ultra-rapides pour une meilleure expérience utilisateur et un meilleur référencement.",
      features: ["Temps de chargement < 3s", "Optimisation images", "Cache avancé"]
    },
    {
      icon: Shield,
      title: "Sécurité & Maintenance",
      description: "Protection complète et maintenance régulière pour garder votre site sécurisé et à jour.",
      features: ["Sauvegardes automatiques", "Mises à jour sécurisées", "Monitoring 24/7"]
    },
    {
      icon: HeadphonesIcon,
      title: "Support Premium",
      description: "Accompagnement personnalisé et support technique pour tous vos besoins WordPress.",
      features: ["Support prioritaire", "Formation incluse", "Hotline dédiée"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos services <span className="text-blue-600">WordPress</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la création à la maintenance, nous vous accompagnons dans tous vos projets WordPress
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
            Discuter de votre projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;