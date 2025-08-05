import React, { useState } from 'react';
import { navigationItems } from '../data/navigation';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative backdrop-blur-md bg-white/100 box-border z-50 border-gray-200 border-b border-solid">
      <nav className="box-border max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="items-center box-border flex h-16 justify-between">
          <div className="box-border shrink-0">
            <h1 className="text-gray-900 text-2xl font-bold box-border tracking-[-0.6px] leading-8">
              <span className="text-blue-600 box-border">Pro</span>
              <span className="box-border">Landing</span>
            </h1>
          </div>
          <div className="box-border hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
            <div className="items-baseline box-border flex ml-10">
              {navigationItems.map((item, index) => (
                <button 
                  key={item.id}
                  className={index === 0 ? "text-gray-700 font-medium bg-transparent block min-h-0 min-w-0 text-center p-0 md:min-h-[auto] md:min-w-[auto]" : "text-gray-700 font-medium bg-transparent block min-h-0 min-w-0 text-center ml-5 p-0 md:min-h-[auto] md:min-w-[auto]"}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="box-border block min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0">
            <button 
              className="text-sm font-medium items-center bg-transparent gap-x-2 inline-flex h-9 justify-center leading-5 gap-y-2 text-center text-nowrap px-3 py-0 rounded-[10px]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <img src="https://c.animaapp.com/mdw08o4bblBR40/assets/icon-1.svg" alt="Icon" className="box-border shrink-0 h-4 text-nowrap w-4" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
