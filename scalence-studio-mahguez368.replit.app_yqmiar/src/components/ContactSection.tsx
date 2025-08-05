import React, { useState } from 'react';
import { contactMethods, formFields } from '../data/contact';

interface FormData {
  email: string;
  name: string;
  company: string;
  phone: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gray-50 box-border py-20">
      <div className="box-border max-w-none w-full mx-auto px-4 md:max-w-screen-xl">
        <div className="box-border text-center mb-16">
          <h2 className="text-gray-900 text-4xl font-black box-border leading-10 mb-4">Prêt à transformer votre business ?</h2>
          <p className="text-gray-600 text-xl box-border leading-7 max-w-screen-md mx-auto">
            Contactez-nous dès maintenant pour discuter de votre projet et recevoir votre landing page en 24h.
          </p>
        </div>
        <div className="box-border gap-x-12 grid grid-cols-none max-w-4xl gap-y-12 mx-auto md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <div className="box-border">
            <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] box-border rounded-xl">
              <div className="box-border p-8">
                <h3 className="text-gray-900 text-2xl font-bold box-border leading-8 mb-6">Envoyez-nous un message</h3>
                <form className="box-border" onSubmit={handleSubmit}>
                  {formFields.map((field) => (
                    <div key={field.name} className={field.containerClass}>
                      <label className="text-gray-700 text-sm font-semibold box-border block leading-5 mb-2">{field.label}</label>
                      {field.type === 'textarea' ? (
                        <textarea
                          name={field.name}
                          placeholder={field.placeholder}
                          className="text-base box-border flex leading-6 min-h-20 w-full border-gray-300 px-3 py-2 rounded-xl md:text-sm md:leading-5"
                          value={formData[field.name as keyof FormData]}
                          onChange={handleInputChange}
                          required={field.required}
                        />
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          className="text-base box-border flex h-12 leading-6 w-full border border-gray-300 px-3 py-2 rounded-xl border-solid md:text-sm md:leading-5"
                          value={formData[field.name as keyof FormData]}
                          onChange={handleInputChange}
                          required={field.required}
                        />
                      )}
                    </div>
                  ))}
                  <button type="submit" className="text-white text-sm font-bold items-center bg-violet-600 bg-[linear-gradient(to_right,rgb(37,99,235),rgb(147,51,234))] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] gap-x-2 inline-flex h-10 justify-center leading-5 gap-y-2 text-center text-nowrap w-full mt-6 p-4 rounded-xl">
                    <img src="https://c.animaapp.com/mdw08o4bblBR40/assets/icon-34.svg" alt="Icon" className="box-border shrink-0 h-4 text-nowrap w-4 mr-2" />
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="box-border">
            <div className="box-border">
              <h3 className="text-gray-900 text-2xl font-bold box-border leading-8 mb-6">Autres moyens de contact</h3>
              <div className="box-border">
                {contactMethods.map((method) => (
                  <div key={method.id} className={method.containerClass}>
                    <div className="items-center bg-[linear-gradient(to_right,rgb(74,222,128),rgb(22,163,74))] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border flex h-12 justify-center w-12 rounded-full">
                      <img src={method.icon} alt="Icon" className="text-white box-border h-6 w-6" />
                    </div>
                    <div className="box-border ml-4">
                      <h4 className="text-gray-900 font-bold box-border mb-2">{method.title}</h4>
                      <p className="text-gray-600 box-border mb-3">{method.description}</p>
                      <button className="text-green-600 text-sm font-medium items-center bg-white gap-x-2 inline-flex h-10 justify-center leading-5 gap-y-2 text-center text-nowrap border border-green-500 px-4 py-2 rounded-[10px] border-solid">{method.buttonText}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[linear-gradient(to_right,rgb(239,246,255),rgb(250,245,255))] box-border border border-blue-100 mt-8 p-6 rounded-2xl border-solid">
              <h4 className="text-gray-900 font-bold box-border mb-3">⚡ Réponse rapide garantie</h4>
              <ul className="text-gray-700 box-border list-none pl-0">
                <li className="box-border text-left">• Réponse sous 2h en jour ouvré</li>
                <li className="box-border text-left mt-2">• Conseils sur mesure pour votre projet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
