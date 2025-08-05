import React from 'react';
import { processSteps } from '../data/process';

export function ProcessSection() {
  return (
    <section className="bg-white box-border py-24">
      <div className="box-border max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="box-border text-center mb-20">
          <h2 className="text-gray-900 text-4xl font-bold box-border leading-10 mb-6 md:text-5xl md:leading-[48px]">Comment ça marche ?</h2>
          <p className="text-gray-600 text-xl box-border leading-7 max-w-screen-md mx-auto">
            Un processus simple et transparent pour transformer votre vision en résultats concrets.
          </p>
        </div>
        <div className="box-border gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
          {processSteps.map((step) => (
            <div key={step.id} className="relative box-border text-center">
              <div className="text-white text-lg font-bold items-center bg-blue-600 box-border flex h-12 justify-center leading-7 w-12 mb-6 mx-auto rounded-full">{step.number}</div>
              <div className={step.iconClass}>
                <img src={step.icon} alt="Icon" className="text-blue-600 box-border h-10 w-10" />
              </div>
              <h3 className="text-gray-900 text-xl font-bold box-border leading-7 mb-4">{step.title}</h3>
              <p className="text-gray-600 box-border leading-[26px]">{step.description}</p>
              {step.showConnector && (
                <div className="absolute box-border hidden w-8 -right-4 top-16 md:block">
                  <div className="bg-gray-300 box-border h-0.5 w-6"></div>
                  <div className="absolute border-l-gray-300 border-r-gray-200 box-border h-0 transform-none w-0 border-l-4 border-y-transparent border-y-2 border-solid right-0 top-0 md:-translate-y-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="box-border text-center mt-16">
          <button className="text-white text-sm font-semibold items-center bg-blue-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] gap-x-2 inline-flex h-11 justify-center leading-5 gap-y-2 text-nowrap px-8 py-4 rounded-xl">
            <img src="https://c.animaapp.com/mdw08o4bblBR40/assets/icon-5.svg" alt="Icon" className="box-border shrink-0 h-4 text-nowrap w-4 mr-2" />
            Démarrer mon projet
          </button>
        </div>
      </div>
    </section>
  );
}
