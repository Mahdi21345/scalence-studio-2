import React from 'react';
import { benefits } from '../data/benefits';

export function BenefitsSection() {
  return (
    <section className="bg-gray-50 box-border py-24">
      <div className="box-border max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="box-border text-center mb-20">
          <h2 className="text-gray-900 text-4xl font-bold box-border leading-10 mb-6 md:text-5xl md:leading-[48px]">Pourquoi un bon site internet est essentiel ?</h2>
          <p className="text-gray-600 text-xl box-border leading-7 max-w-4xl mx-auto">
            Un site internet bien conçu n'est pas juste une page web, c'est un outil de conversion puissant qui transforme vos visiteurs en clients.
          </p>
        </div>
        <div className="box-border gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="box-border">
              <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border h-full rounded-xl">
                <div className="box-border p-8">
                  <div className={benefit.iconClass}>
                    <img src={benefit.icon} alt="Icon" className={benefit.iconSize} />
                  </div>
                  <div className="items-center box-border flex justify-between mb-4">
                    <h3 className="text-gray-900 text-xl font-bold box-border leading-7">{benefit.title}</h3>
                    <span className="text-blue-600 text-sm font-bold bg-blue-100 box-border block leading-5 px-3 py-1 rounded-full">{benefit.badge}</span>
                  </div>
                  <p className="text-gray-600 box-border leading-[26px]">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="box-border text-center mt-16">
          <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border max-w-4xl mx-auto p-8 rounded-2xl">
            <h3 className="text-gray-900 text-2xl font-bold box-border leading-8 mb-4">Prêt à transformer votre business ?</h3>
            <p className="text-gray-600 box-border mb-6">
              Ne laissez plus vos prospects partir sans agir. Obtenez une landing page qui convertit vraiment.
            </p>
            <div className="box-border gap-x-4 flex flex-col justify-center gap-y-4 md:flex-row">
              <span className="text-green-600 font-semibold items-center box-border flex">✓ Consultation gratuite</span>
              <span className="text-green-600 font-semibold items-center box-border flex">✓ Livraison en 24h</span>
              <span className="text-green-600 font-semibold items-center box-border flex">✓ Résultats garantis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
