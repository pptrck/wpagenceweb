import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "150+", label: "Clients satisfaits" },
    { icon: Award, number: "5", label: "Années d'expérience" },
    { icon: Clock, number: "200+", label: "Projets réalisés" },
    { icon: Heart, number: "98%", label: "Taux de satisfaction" }
  ];

  const team = [
    {
      name: "Marie Dubois",
      role: "Directrice & Développeuse WordPress",
      description: "Experte WordPress avec 8 ans d'expérience dans le développement de sites sur mesure.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Pierre Martin",
      role: "Expert SEO & Marketing Digital",
      description: "Spécialiste en référencement naturel et stratégies digitales pour maximiser votre visibilité.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Sophie Laurent",
      role: "Designer UI/UX",
      description: "Créatrice d'expériences utilisateur exceptionnelles et de designs modernes et intuitifs.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <section id="a-propos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            À propos de <span className="text-blue-600">WP Agency Web</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe passionnée dédiée à votre réussite digitale
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre histoire</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Fondée en 2019, WP Agency Web est née de la passion de créer des sites WordPress exceptionnels. 
                Notre équipe d'experts combine créativité et expertise technique pour donner vie à vos projets digitaux.
              </p>
              <p>
                Nous croyons que chaque entreprise mérite un site web qui reflète son identité et ses valeurs. 
                C'est pourquoi nous prenons le temps de comprendre vos besoins pour créer des solutions sur mesure.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers d'avoir accompagné plus de 150 entreprises dans leur transformation digitale, 
                des startups innovantes aux grandes entreprises établies.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Équipe WP Agency Web"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Notre équipe</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;