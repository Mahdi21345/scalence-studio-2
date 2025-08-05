import React from 'react';
import { pricingFeatures, additionalServices } from '../data/pricing';

export function PricingSection() {
  return (
    <section className="bg-[linear-gradient(to_right_bottom,rgb(239,246,255),rgb(255,255,255),rgb(250,245,255))] box-border py-24">
      <div className="box-border max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="box-border text-center mb-16">
          <h2 className="text-gray-900 text-4xl font-bold box-border leading-10 mb-6 md:text-5xl md:leading-[48px]">Une seule offre, tout inclus</h2>
          <p className="text-gray-600 text-xl box-border leading-7 max-w-screen-md mx-auto">
            Pas de complications, pas de choix difficiles. Une landing page professionnelle qui convertit, à prix fixe.
          </p>
        </div>
        <div className="box-border max-w-screen-md mx-auto">
          <div className="box-border">
            <div className="relative bg-[linear-gradient(to_right_bottom,rgb(37,99,235),rgb(147,51,234),rgb(30,64,175))] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] box-border p-1 rounded-3xl">
              <div className="absolute box-border translate-x-[-50.0%] z-20 left-2/4 -top-8">
                <div className="text-gray-900 text-sm font-bold items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] box-border flex leading-5 px-6 py-2 rounded-full">
                  <img src="https://c.animaapp.com/mdw08o4bblBR40/assets/icon-29.svg" alt="Icon" className="text-yellow-500 box-border h-4 w-4 mr-2" />
                  OFFRE UNIQUE
                </div>
              </div>
              <div className="bg-white box-border pt-14 pb-8 px-8 rounded-3xl">
                <div className="box-border text-center mb-8">
                  <div className="items-center box-border flex justify-center mb-3">
                    <span className="text-transparent text-6xl font-black bg-clip-text bg-[linear-gradient(to_right,rgb(37,99,235),rgb(147,51,234))] box-border block leading-[60px]">499</span>
                    <span className="text-gray-600 text-2xl font-bold box-border block leading-8 ml-2">€</span>
                  </div>
                  <p className="text-gray-600 text-lg font-semibold box-border leading-7">Landing page complète • Livraison 24h</p>
                </div>
                <div className="box-border gap-x-6 grid grid-cols-none gap-y-6 mb-8 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
                  <div className="box-border">
                    {pricingFeatures.slice(0, 4).map((feature) => (
                      <div key={feature.id} className={feature.containerClass}>
                        <div className="items-center bg-[linear-gradient(to_right,rgb(74,222,128),rgb(22,163,74))] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border flex shrink-0 h-6 justify-center w-6 mr-3 rounded-full">
                          <img src="https://c.animaapp.com/mdw08o4bblBR40/assets/icon-30.svg" alt="Icon" className="text-white font-bold box-border h-4 w-4" />
                        </div>
                        <span className="text-gray-800 font-medium box-border block">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="box-border">
                    {pricingFeatures.slice(4).map((feature) => (
                      <div key={feature.id} className={feature.containerClass}>
                        <div className="items-center bg-[linear-gradient(to_right,rgb(74,222,128),rgb(22,163,74))] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border flex shrink-0 h-6 justify-center w-6 mr-3 rounded-full">
                          <img src="https://c.animaapp.com/mdw08o4bblBR40/assets/icon-30.svg" alt="Icon" className="text-white font-bold box-border h-4 w-4" />
                        </div>
                        <span className="text-gray-800 font-medium box-border block">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[linear-gradient(to_right,rgb(239,246,255),rgb(250,245,255))] box-border border border-blue-100 mb-6 p-5 rounded-2xl border-solid">
                  <h4 className="text-gray-900 font-bold box-border mb-3">Services complémentaires</h4>
                  <div className="box-border">
                    {additionalServices.map((service) => (
                      <div key={service.id} className={service.containerClass}>
                        <div className="bg-[linear-gradient(to_right,rgb(59,130,246),rgb(168,85,247))] box-border h-2 w-2 mr-3 rounded-full"></div>
                        {service.text}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="box-border">
                  <button className="text-white text-sm font-bold items-center bg-violet-600 bg-[linear-gradient(to_right,rgb(37,99,235),rgb(147,51,234))] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] gap-x-2 inline-flex h-11 justify-center leading-5 gap-y-2 text-center text-nowrap w-full px-8 py-5 rounded-2xl">
                    <img src="https://c.animaapp.com/mdw08o4bblBR40/assets/icon-31.svg" alt="Icon" className="box-border shrink-0 h-4 text-nowrap w-4 mr-3" />
                    COMMANDER MON SITE
                  </button>
                </div>
                <div className="bg-[linear-gradient(to_right,rgb(240,253,244),rgb(220,252,231))] box-border text-center border border-green-200 mt-8 p-6 rounded-2xl border-solid">
                  <div className="text-green-800 font-bold items-center box-border flex justify-center">
                    <div className="items-center box-border flex">
                      <img src="https://c.animaapp.com/mdw08o4bblBR40/assets/icon-32.svg" alt="Icon" className="box-border h-5 w-5 mr-2" />
                      Satisfait ou remboursé
                    </div>
                    <div className="items-center box-border flex ml-8">
                      <img src="https://c.animaapp.com/mdw08o4bblBR40/assets/icon-32.svg" alt="Icon" className="box-border h-5 w-5 mr-2" />
                      Pas de frais cachés
                    </div>
                    <div className="items-center box-border flex ml-8">
                      <img src="https://c.animaapp.com/mdw08o4bblBR40/assets/icon-32.svg" alt="Icon" className="box-border h-5 w-5 mr-2" />
                      Livraison garantie
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
