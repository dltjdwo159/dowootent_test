
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
            <p className="text-gray-300 text-lg md:text-xl mb-10 font-medium leading-relaxed break-keep max-w-lg">
              25년 경력의 노하우로 대형천막 및 철구조물 시공의<br/> 
              완벽한 설루션을 제공합니다.
            </p>
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

          {/* 히어로 섹션 오른쪽 하단 플로팅 상담 카드 */}
          <div className="hidden lg:block absolute bottom-12 right-8 animate-in slide-in-from-bottom-10 duration-1000 delay-300">
            <div className="bg-[#003399] text-white p-8 rounded-[2rem] shadow-2xl w-80 border border-blue-400/20 backdrop-blur-sm">
              <span className="inline-block bg-blue-500/40 text-blue-100 px-3 py-1 rounded-full text-[10px] font-bold mb-4 tracking-widest uppercase">Consultation</span>
              <h3 className="text-xl font-bold mb-3 leading-tight">빠르고 친절하게<br/>상담해 드립니다</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed mb-6 font-light break-keep">
                산업용 천막, 물류창고 시공 등<br/>
                전문가가 직접 도움을 드립니다.
              </p>
              <div className="bg-white rounded-2xl py-3 px-4 shadow-inner text-center">
                <p className="text-[#003399] text-xs font-bold mb-1">지금 바로 전화 상담하기</p>
                <a 
                  href="tel:01098396979" 
                  className="text-[#003399] text-xl font-black tracking-tight hover:scale-105 transition-transform inline-block"
                >
                  010-9839-6979
                </a>
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
    </div>
  );
};

export default HomeView;
