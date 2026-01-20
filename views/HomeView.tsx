
import React from 'react';
import { ViewState, Project, Service } from '../types';

interface HomeViewProps {
  setView: (view: ViewState) => void;
  projects: Project[];
  services: Service[];
}

const HomeView: React.FC<HomeViewProps> = ({ setView, projects, services }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-900">
        <img 
          src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210617_271%2F1623915622659W53Hs_JPEG%2FDvcve-BzrRyw-CUlXPA5k4CB.jpg" 
          alt="Main Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-left">
            <h1 className="text-white text-4xl md:text-7xl font-bold mb-8 leading-[1.2] break-keep">
              공간의 가치를 만드는<br/>
              <span className="text-blue-400">주식회사 도우텐트</span>
            </h1>
            <div className="flex flex-col sm:flex-row justify-start gap-4">
              <button 
                onClick={() => setView('CONTACT')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-md font-bold text-lg transition-all shadow-lg hover:-translate-y-1"
              >
                무료 견적 상담받기
              </button>
              <button 
                onClick={() => setView('PORTFOLIO')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-md font-bold text-lg transition-all"
              >
                시공사례 보기
              </button>
            </div>
          </div>

          {/* 히어로 섹션 하단 중앙 SCROLL DOWN 표시 */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/70">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1 mb-2">
              <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-scroll-dot"></div>
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">SCROLL DOWN</span>
          </div>

          {/* 히어로 섹션 오른쪽 하단 플로팅 상담 카드 */}
          <div className="hidden lg:block absolute bottom-0 right-0 p-4 animate-in slide-in-from-right-2 duration-1000 delay-300">
            <div className="bg-[#003399] text-white p-5 rounded-[1.25rem] shadow-2xl w-[260px] border border-blue-400/10 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-16 h-16 bg-blue-500/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <span className="inline-block bg-blue-500/30 text-blue-100 px-2 py-0.5 rounded-full text-[8px] font-bold mb-3 tracking-[0.1em] uppercase">
                  CONSULTATION
                </span>
                
                <h3 className="text-lg font-bold mb-5 leading-[1.3] break-keep">
                  빠르고 친절하게<br/>상담해 드립니다
                </h3>
                
                <div className="space-y-1.5">
                  <p className="text-blue-300 font-bold text-[8px] tracking-wider text-center">지금 바로 전화 상담하기</p>
                  <div className="bg-white rounded-lg py-2.5 px-3 shadow-lg transform transition-transform hover:scale-[1.02]">
                    <a 
                      href="tel:01098396979" 
                      className="text-[#003399] text-xl font-black tracking-tighter flex items-center justify-center"
                    >
                      010-9839-6979
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col items-center text-center min-h-[280px] justify-center border border-gray-100"
              >
                <h3 className="text-xl font-extrabold mb-5 text-gray-900 tracking-tight">
                  {service.title}
                </h3>
                <div className="h-[2px] w-8 bg-blue-600 mb-5 rounded-full"></div>
                <p className="text-gray-500 text-[15px] leading-[1.6] break-keep font-medium">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">최근 시공 사례</h2>
              <p className="text-gray-500 font-medium">도우텐트의 완벽한 시공 능력을 확인하세요.</p>
            </div>
            <button 
              onClick={() => setView('PORTFOLIO')}
              className="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center"
            >
              전체보기 <span className="ml-1 text-lg">→</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="group cursor-pointer overflow-hidden rounded-2xl shadow-sm border border-gray-100">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-white border-2 border-white px-5 py-2 rounded-full font-bold text-sm tracking-widest">VIEW CASE</span>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <span className="text-[11px] bg-blue-50 text-blue-700 px-2 py-1 rounded font-bold uppercase tracking-tighter mb-2 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        @keyframes scroll-dot {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-scroll-dot {
          animation: scroll-dot 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HomeView;
