import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemsSection } from './components/ProblemsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="text-gray-950 text-base not-italic normal-nums font-normal accent-auto bg-white box-border block tracking-[normal] leading-6 list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-plus_jakarta_sans">
      <div className="box-border">
        <div role="region" aria-label="Notifications (F8)" className="box-border">
          <ol className="fixed box-border flex flex-col-reverse list-none max-h-[1000px] max-w-none w-full z-[100] p-4 right-auto top-0 bottom-auto md:flex-col md:max-w-[420px] md:right-0 md:top-auto md:bottom-0"></ol>
        </div>
        <div className="bg-gray-50 box-border min-h-[1000px]">
          <div className="fixed bg-[radial-gradient(circle_at_20%_20%,rgba(179,102,255,0.1)_0%,rgba(0,0,0,0)_50%),radial-gradient(circle_at_80%_80%,rgba(255,51,255,0.1)_0%,rgba(0,0,0,0)_50%),radial-gradient(circle_at_40%_40%,rgba(153,153,255,0.05)_0%,rgba(0,0,0,0)_50%)] bg-size-[auto,auto,auto] box-border overflow-hidden bg-[position:0%,0%,0%_0%,0%,0%] inset-0">
            <div className="absolute bg-[linear-gradient(to_right_bottom,rgba(168,85,247,0.1),rgba(139,92,246,0.1))] box-border blur-3xl h-64 w-64 rounded-full right-20 top-20"></div>
            <div className="absolute bg-[linear-gradient(to_right_top,rgba(139,92,246,0.1),rgba(168,85,247,0.1))] box-border blur-3xl h-96 w-96 rounded-full left-20 bottom-20"></div>
            <div className="absolute bg-[linear-gradient(to_right,rgba(168,85,247,0.2),rgba(0,0,0,0))] box-border blur-2xl h-32 rotate-45 w-32 left-2/4 top-2/4"></div>
          </div>
          <Header />
          <HeroSection />
          <ProblemsSection />
          <BenefitsSection />
          <TestimonialsSection />
          <WhyChooseUsSection />
          <ProcessSection />
          <PricingSection />
          <FAQSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
