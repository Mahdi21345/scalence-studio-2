import React from 'react';
import { heroFeatures } from '../data/hero';

export function HeroSection() {
  return (
    <section className="relative bg-[linear-gradient(to_right_bottom,rgb(249,250,251),rgb(255,255,255),rgba(239,246,255,0.3))] box-border z-10 overflow-hidden pt-20 pb-32">
      <div className="absolute box-border overflow-hidden inset-0">
        <div className="absolute bg-blue-100/40 box-border blur-3xl h-80 w-80 rounded-full -right-40 -top-40"></div>
        <div className="absolute bg-gray-100/40 box-border blur-3xl h-80 w-80 rounded-full -left-40 -bottom-40"></div>
        <div className="absolute bg-blue-50/30 box-border blur-3xl h-96 translate-x-[-50.0%] translate-y-[-50.0%] w-96 rounded-full left-2/4 top-2/4"></div>
      </div>
      <div className="relative box-border max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="box-border text-center">
          <div className="box-border mb-8">
            <span className="text-blue-700 text-sm font-semibold items-center bg-blue-50 box-border inline-flex leading-5 border border-blue-200 px-6 py-3 rounded-full border-solid">
              <img src="https://c.animaapp.com/mdw08o4bblBR40/assets/icon-2.svg" alt="Icon" className="box-border h-4 w-4 mr-2" />
              Livraison garantie en 24h
            </span>
          </div>
          <h1 className="text-gray-900 text-4xl font-bold box-border leading-[45px] mb-8 md:text-6xl md:leading-[60px]">
            <span className="text-red-600 text-4xl box-border leading-[45px] md:text-6xl md:leading-[60px]">Passer</span> au niveau supérieur avec
            <span className="text-blue-600 text-4xl box-border leading-[45px] md:text-6xl md:leading-[60px]">une Landing Page</span>
            <br className="text-4xl box-border leading-[45px] md:text-6xl md:leading-[60px]" />
            qui fait tripler votre CA
            <br className="text-4xl box-border leading-[45px] md:text-6xl md:leading-[60px]" />
            <span className="text-gray-700 text-3xl box-border leading-9 md:text-4xl md:leading-10">livrée en 24h</span>
          </h1>
          <p className="text-gray-600 text-xl box-border leading-[32.5px] max-w-4xl mb-12 mx-auto">
            Nous créons des sites internet sur-mesure qui génèrent des résultats concrets pour votre business. Notre expertise en conversion digitale transforme votre présence en ligne en véritable levier de croissance.
          </p>
          <div className="items-center box-border gap-x-6 flex flex-col justify-center gap-y-6 mb-10 md:flex-row">
            {heroFeatures.map((feature) => (
              <div key={feature.id} className="text-green-600 font-medium items-center box-border flex">
                <img src={feature.icon} alt="Icon" className="box-border h-5 w-5 mr-2" />
                {feature.text}
              </div>
            ))}
          </div>
          <div className="box-border gap-x-4 flex flex-col justify-center gap-y-4 md:flex-row">
            <button className="text-white text-sm font-semibold items-center bg-blue-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] gap-x-2 flex h-11 justify-center leading-5 gap-y-2 text-nowrap px-8 py-4 rounded-xl">
              <img src="https://c.animaapp.com/mdw08o4bblBR40/assets/icon-5.svg" alt="Icon" className="box-border shrink-0 h-4 text-nowrap w-4 mr-2" />
              RÉSERVER UN APPEL
            </button>
            <button className="text-white text-sm font-medium items-center bg-green-500 gap-x-2 flex h-11 justify-center leading-5 gap-y-2 text-nowrap px-8 py-0 rounded-[10px]">
              <img src="https://c.animaapp.com/mdw08o4bblBR40/assets/icon-6.svg" alt="Icon" className="box-border shrink-0 h-4 text-nowrap w-4 mr-2" />
              Contacter WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
