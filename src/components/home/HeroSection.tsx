import React from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, Users, BookOpen, ChevronRight } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export const HeroSection: React.FC = () => {
  const { setActivePage, openAdmissionModal, openGalleryModal } = useCollege();

  return (
    <section className="relative overflow-hidden bg-slate-50 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Hero Card with Professional Polish Deep Blue Gradient */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-blue-900/20 bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-900 text-white p-6 sm:p-10 lg:p-12">
          
          {/* Subtle geometric lines */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border-8 border-yellow-400"></div>
            <div className="absolute left-1/3 -bottom-20 w-72 h-72 rounded-full border-4 border-dashed border-white"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Gold Admissions Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400 text-blue-950 text-xs font-black shadow-sm tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-blue-950" />
                <span>ADMISSIONS 2026-2027 &bull; KCET CODE: E227</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <div className="text-blue-200 text-xs sm:text-sm font-bold uppercase tracking-widest">
                  A Unit of Shetty Group of Institutions (SGI) &bull; Estd 2011
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                  Empowering Minds,<br />
                  <span className="text-yellow-400">Engineering the Future.</span>
                </h1>
              </div>

              <p className="text-blue-100 text-sm sm:text-base max-w-xl leading-relaxed">
                Shanta Institute of Technology provides state-of-the-art 22-acre campus facilities, cutting-edge GPU labs, and industry-aligned curriculum under VTU Belagavi to foster innovation and leadership.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  id="hero-apply-btn"
                  onClick={openAdmissionModal}
                  className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-200 text-sm sm:text-base hover:scale-105 active:scale-95"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-know-more-btn"
                  onClick={() => setActivePage('about')}
                  className="flex items-center gap-2 bg-blue-800/80 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full border border-blue-600/50 transition-all duration-200 text-sm sm:text-base"
                >
                  <span>Explore Campus</span>
                </button>
              </div>

              {/* Stat counters */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-blue-800/80 max-w-lg">
                <div className="p-3 bg-blue-950/60 rounded-2xl border border-blue-800/60 backdrop-blur-sm text-center">
                  <div className="text-xl sm:text-2xl font-black text-yellow-400">2011</div>
                  <div className="text-[11px] text-blue-200 font-medium">Established</div>
                </div>
                <div className="p-3 bg-blue-950/60 rounded-2xl border border-blue-800/60 backdrop-blur-sm text-center">
                  <div className="text-xl sm:text-2xl font-black text-white">22 Acres</div>
                  <div className="text-[11px] text-blue-200 font-medium">Eco Campus</div>
                </div>
                <div className="p-3 bg-blue-950/60 rounded-2xl border border-blue-800/60 backdrop-blur-sm text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">100%</div>
                  <div className="text-[11px] text-blue-200 font-medium">Placement Guidance</div>
                </div>
              </div>

            </div>

            {/* Right Graphic / Photo Frame with banner_circle asset */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div 
                onClick={() => openGalleryModal('photo-banner-circle')}
                className="relative w-full max-w-sm aspect-4/3 sm:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-800/80 bg-slate-900 group cursor-pointer hover:border-yellow-400 transition-all"
                title="Click to view full photo & gallery"
              >
                <img 
                  src="/images/student-robotics-innovation.jpg" 
                  alt="Students of Shanta Institute of Technology with Robotics Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating pill */}
                <div className="absolute bottom-4 inset-x-4 bg-blue-950/90 backdrop-blur-md text-white p-3 rounded-2xl border border-blue-800 shadow-xl flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-yellow-400 uppercase">SIT Innovation Hub</div>
                    <div className="text-xs font-semibold text-slate-200">Robotics & AI Prototype Showcase</div>
                  </div>
                  <span className="px-2 py-1 bg-yellow-400 text-blue-950 text-[10px] font-black rounded-lg">
                    banner_circle
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
