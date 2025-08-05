import React from 'react';
import { whyChooseUsFeatures } from '../data/whyChooseUs';

export function WhyChooseUsSection() {
  return (
    <section className="bg-[linear-gradient(to_right_bottom,rgb(248,250,252),rgb(239,246,255))] box-border py-24">
      <div className="box-border max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="box-border text-center mb-20">
          <h2 className="text-gray-900 text-4xl font-bold box-border leading-10 mb-6 md:text-5xl md:leading-[48px]">Pourquoi nous choisir ?</h2>
          <p className="text-gray-600 text-xl box-border leading-7 max-w-screen-md mx-auto">
            Nous révolutionnons la création de sites web avec une approche unique :
            <span className="text-blue-600 font-semibold box-border"> voyez avant d'acheter</span>
          </p>
        </div>
        <div className="box-border mb-16">
          <div className="text-white bg-[linear-gradient(to_right,rgb(37,99,235),rgb(147,51,234))] box-border text-center p-8 rounded-3xl md:p-12">
            <div className="box-border flex justify-center mb-6">
              <div className="items-center bg-white/20 box-border flex h-20 justify-center w-20 rounded-full">
                <img src="https://c.animaapp.com/mdw08o4bblBR40/assets/icon-20.svg" alt="Icon" className="box-border h-10 w-10" />
              </div>
            </div>
            <h3 className="text-3xl font-bold box-border leading-9 mb-4">Notre différence : la maquette gratuite</h3>
            <p className="text-xl box-border leading-7 max-w-4xl opacity-90 mx-auto">
              Après notre appel de découverte, nous créons une maquette visuelle gratuite de votre futur site internet. Vous voyez exactement le rendu final avant de prendre votre décision d'achat.
            </p>
          </div>
        </div>
        <div className="box-border gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          {whyChooseUsFeatures.map((feature) => (
            <div key={feature.id} className={feature.containerClass}>
              <div className="items-center bg-[linear-gradient(to_right,rgb(37,99,235),rgb(147,51,234))] box-border flex h-16 justify-center w-16 mb-6 rounded-2xl">
                <img src={feature.icon} alt="Icon" className="text-white box-border h-8 w-8" />
              </div>
              <h3 className={feature.titleClass}>{feature.title}</h3>
              <p className="text-gray-600 box-border leading-[26px]">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="box-border mt-20">
          <div className="relative text-white bg-[linear-gradient(to_right,rgb(220,38,38),rgb(219,39,119))] box-border text-center overflow-hidden p-8 rounded-3xl md:p-12">
            <div className="absolute box-border h-full opacity-10 w-full left-0 top-0">
              <div className="absolute bg-white box-border h-20 w-20 rounded-full right-4 top-4"></div>
              <div className="absolute bg-white box-border h-16 w-16 rounded-full left-4 bottom-4"></div>
            </div>
            <div className="relative box-border z-10">
              <div className="bg-white/20 box-border inline-block mb-6 px-6 py-2 rounded-full">
                <span className="text-sm font-bold box-border tracking-[0.7px] leading-5 uppercase">🚀 Offre de lancement</span>
              </div>
              <h3 className="text-4xl font-bold box-border leading-10 mb-6">Maquette gratuite pour les 10 premiers clients !</h3>
              <p className="text-xl box-border leading-7 max-w-screen-md opacity-90 mb-8 mx-auto">
                Soyez parmi les premiers à découvrir notre service révolutionnaire. Après votre appel de consultation, recevez une <strong className="font-bold box-border">maquette personnalisée gratuite</strong> de votre futur site internet. Voyez le résultat avant de vous engager !
              </p>
              <div className="bg-white/10 box-border max-w-2xl mb-8 mx-auto p-6 rounded-2xl">
                <div className="items-center box-border flex justify-center">
                  <div className="box-border">
                    <div className="text-3xl font-bold box-border leading-9">10</div>
                    <div className="text-sm box-border leading-5 opacity-80">Places restantes</div>
                  </div>
                  <div className="bg-white/30 box-border h-12 w-px ml-6"></div>
                  <div className="box-border ml-6">
                    <div className="text-3xl font-bold box-border leading-9">24h</div>
                    <div className="text-sm box-border leading-5 opacity-80">Livraison garantie</div>
                  </div>
                  <div className="bg-white/30 box-border h-12 w-px ml-6"></div>
                  <div className="box-border ml-6">
                    <div className="text-3xl font-bold box-border leading-9">0€</div>
                    <div className="text-sm box-border leading-5 opacity-80">Maquette gratuite</div>
                  </div>
                </div>
              </div>
              <div className="box-border flex justify-center">
                <button className="text-red-600 text-lg font-bold bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] block leading-7 px-10 py-4 rounded-xl">ACHETER MA LANDING PAGE</button>
              </div>
              <p className="text-sm box-border leading-5 opacity-80 mt-4">⏰ Offre limitée - Plus que quelques places !</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
