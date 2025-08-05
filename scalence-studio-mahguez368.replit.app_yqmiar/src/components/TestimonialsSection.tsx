import React from 'react';
import { testimonials } from '../data/testimonials';

export function TestimonialsSection() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="bg-white box-border py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
      
      <div className="relative box-border max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="box-border text-center mb-20">
          <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-6 py-3 mb-8">
            <div className="flex mr-3">
              {renderStars(5)}
            </div>
            <span className="text-green-700 text-sm font-semibold">4.9/5 • Plus de 200 clients satisfaits</span>
          </div>
          <h2 className="text-gray-900 text-4xl font-bold box-border leading-10 mb-6 md:text-5xl md:leading-[48px]">
            Ils ont fait confiance à ProLanding
          </h2>
          <p className="text-gray-600 text-xl box-border leading-7 max-w-screen-md mx-auto">
            Découvrez comment nos clients ont transformé leur business grâce à nos landing pages haute performance.
          </p>
        </div>

        {/* Hero testimonial with Porsche image */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 text-white">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                  alt="Marc Dubois" 
                  className="w-16 h-16 rounded-full mr-4 border-2 border-white/20"
                />
                <div>
                  <h3 className="text-xl font-bold">Marc Dubois</h3>
                  <p className="text-gray-300">CEO • AutoSport Elite</p>
                </div>
              </div>
              <div className="flex mb-4">
                {renderStars(5)}
              </div>
              <blockquote className="text-xl leading-relaxed mb-6">
                "ProLanding a révolutionné notre approche commerciale. Notre nouvelle landing page dédiée aux voitures de sport a généré <span className="text-green-400 font-bold">+400% de leads qualifiés</span> en seulement 3 semaines. Le design reflète parfaitement l'excellence de nos véhicules."
              </blockquote>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">+400%</div>
                    <div className="text-sm text-gray-300">Leads qualifiés</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">22h</div>
                    <div className="text-sm text-gray-300">Temps de livraison</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">€180k</div>
                    <div className="text-sm text-gray-300">CA généré</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://c.animaapp.com/mdw08o4bblBR40/img/2019-porsche-911-gt3-rs-011-1080.jpg" 
                alt="Porsche 911 GT3 RS" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-gray-900 lg:to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Grid of testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(1).map((testimonial) => (
            <div key={testimonial.id} className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">{testimonial.results}</div>
                  <div className="text-xs text-gray-600">Résultat obtenu</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Rejoignez nos clients satisfaits</h3>
            <p className="text-xl mb-6 opacity-90">
              Plus de 200 entreprises nous font confiance pour transformer leur présence digitale
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  RÉSERVER UN APPEL GRATUIT
                </span>
              </button>
              <div className="flex items-center text-white/80">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Maquette gratuite • Livraison 24h
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
