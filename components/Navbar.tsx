
import React, { useState } from 'react';
import { ViewState, SiteConfig } from '../types';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  config: SiteConfig;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, config }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: { label: string; view: ViewState }[] = [
    { label: '홈', view: 'HOME' },
    { label: '회사소개', view: 'ABOUT' },
    { label: '주요사업', view: 'SERVICES' },
    { label: '시공사례', view: 'PORTFOLIO' },
    { label: '견적문의', view: 'CONTACT' },
  ];

  const logoUrl = "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_149%2F1623912999712z9TGi_PNG%2F31tV7Z5pzct3FXwaoy3hwJtp.png";

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 cursor-pointer flex items-center group" onClick={() => setView('HOME')}>
            <img 
              src={logoUrl} 
              alt="주식회사 도우텐트 로고" 
              className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.view}
                onClick={() => setView(item.view)}
                className={`text-sm font-semibold transition-colors ${
                  currentView === item.view ? 'text-blue-700' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setView('ADMIN')}
              className="text-xs bg-gray-100 px-3 py-1.5 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-all ml-4"
            >
              관리자
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.view}
                onClick={() => {
                  setView(item.view);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-3 text-base font-medium rounded-lg ${
                  currentView === item.view ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <button
                onClick={() => {
                  setView('ADMIN');
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-400 hover:text-gray-600"
              >
                관리자 로그인
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
