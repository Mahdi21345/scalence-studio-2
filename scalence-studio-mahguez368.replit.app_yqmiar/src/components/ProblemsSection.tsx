import React from 'react';
import { problems } from '../data/problems';

export function ProblemsSection() {
  return (
    <section className="bg-white box-border py-20">
      <div className="box-border max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="box-border text-center mb-16">
          <h2 className="text-gray-900 text-3xl font-bold box-border leading-9 mb-4 md:text-4xl md:leading-10">Pourquoi ProLanding transformera votre business ?</h2>
          <p className="text-gray-600 text-xl box-border leading-7 max-w-screen-md mx-auto">
            Nous comprenons les défis uniques de votre business et avons développé une méthode efficace pour les surmonter.
          </p>
        </div>
        <div className="box-border gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          {problems.map((problem) => (
            <div key={problem.id} className="box-border">
              <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border h-full border border-gray-200 rounded-xl border-solid">
                <div className="box-border p-6">
                  <div className="items-center box-border flex mb-4">
                    <div className="items-center bg-red-500 box-border flex h-12 justify-center w-12 mr-4 rounded-xl">
                      <img src={problem.icon} alt="Icon" className="text-white box-border h-6 w-6" />
                    </div>
                    <h3 className="text-red-600 text-lg font-semibold box-border leading-7">Votre problème :</h3>
                  </div>
                  <p className="text-gray-600 box-border mb-4">{problem.description}</p>
                  <div className="box-border border-gray-200 pt-4 border-t border-solid">
                    <div className="items-start box-border flex">
                      <div className="items-center bg-[linear-gradient(to_right,rgb(34,197,94),rgb(5,150,105))] box-border flex shrink-0 h-8 justify-center w-8 mr-3 mt-0.5 rounded-full">
                        <img src="https://c.animaapp.com/mdw08o4bblBR40/assets/icon-8.svg" alt="Icon" className="text-white box-border h-4 w-4" />
                      </div>
                      <p className="text-gray-800 font-medium box-border">{problem.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
