import React, { useState } from 'react';
import { faqItems } from '../data/faq';

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="bg-white box-border py-20">
      <div className="box-border max-w-4xl mx-auto px-4 md:px-8">
        <div className="box-border text-center mb-16">
          <h2 className="text-gray-900 text-3xl font-bold box-border leading-9 mb-4 md:text-4xl md:leading-10">Questions fréquentes</h2>
          <p className="text-gray-600 text-xl box-border leading-7">Nous répondons à vos interrogations en toute transparence.</p>
        </div>
        <div className="box-border">
          {faqItems.map((item, index) => (
            <div key={item.id} className={index === 0 ? "box-border" : "box-border mt-4"}>
              <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border border border-gray-200 overflow-hidden rounded-xl border-solid">
                <button 
                  className="items-center bg-transparent flex justify-between text-left w-full px-6 py-4"
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="text-gray-900 font-semibold box-border block pr-4">{item.question}</span>
                  <img src="https://c.animaapp.com/mdw08o4bblBR40/assets/icon-33.svg" alt="Icon" className="text-gray-400 box-border shrink-0 h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
