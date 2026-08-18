import React from 'react';
import { ArrowRight, CheckCircle2, Trees, Sparkles, Building, Award } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export const AboutSection: React.FC = () => {
  const { setActivePage, openGalleryModal } = useCollege();

  return (
    <section className="py-14 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            {/* 4 Orange Chevrons from Screenshot */}
            <div className="flex items-center gap-1 text-[#ea580c]">
              <span className="text-xl font-black">&gt;&gt;&gt;&gt;</span>
            </div>

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl font-black text-[#181a3d] tracking-tight">
              ABOUT SIT
            </h2>

            {/* Exact Content from Screenshot 2026-08-18 123515 */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
              The Shanta Institute of Technology, popularly known as SIT, was established in the year 2011 to empower budding engineers with technical and entrepreneurial knowledge and skills, and to assist them in having a holistic growth. Located just on the other side of the Ring Road, on Gulbarga Shahabad Highway (NH 150), the college nestles amidst sprawling 22 acres of greenery with a hilly backdrop. The campus breathes fresh air of nature and has vast green pastures, free from pollution and litter. The ambience is ideal for learning, research and living.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-orange-50/70 border border-orange-100">
                <Trees className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">22-Acre Eco-Campus</h4>
                  <p className="text-[11px] text-slate-600">Lush green pastures on NH 150 Shahabad Highway</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-indigo-50/70 border border-indigo-100">
                <Building className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Holistic Pedagogy</h4>
                  <p className="text-[11px] text-slate-600">Technical rigor with entrepreneurship incubator</p>
                </div>
              </div>
            </div>

            {/* Orange and Blue Toggle/Slider Pill from Screenshot */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-24 h-6 bg-slate-200 rounded-full p-0.5 flex items-center">
                <div className="w-12 h-full bg-gradient-to-r from-indigo-600 to-orange-500 rounded-full"></div>
              </div>
              <span className="text-xs font-semibold text-slate-500">Established 2011 &bull; Unit of SGI</span>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActivePage('about')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#ea580c] hover:text-[#c2410c] transition-colors"
              >
                <span>Read Full Institute History & Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Image Graphic matching layout with Purple Block & Framed Campus (6 cols) */}
          <div className="lg:col-span-6 relative">
            
            {/* Background geometric wireframe accents */}
            <div className="absolute -top-4 -left-4 w-48 h-48 border-2 border-indigo-500/30 rounded-3xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full -z-10"></div>

            {/* Purple Accent Floating Box from Screenshot */}
            <div className="absolute -top-3 right-8 w-24 h-36 bg-[#876585] rounded-2xl shadow-lg -z-0 hidden sm:block"></div>

            {/* Main Campus Image in Curved Frame with College inside photo.webp */}
            <div 
              onClick={() => openGalleryModal('photo-college-inside')}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 cursor-pointer group"
              title="Click to view inside campus photo in gallery"
            >
              <img 
                src="/images/campus-building-lawn.jpg" 
                alt="Shanta Institute of Technology Kalaburagi Campus Building with Green Courtyard"
                className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 right-3 bg-yellow-400 text-blue-950 text-[10px] font-black px-2.5 py-1 rounded-full shadow">
                College inside photo.webp
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent p-5 text-white">
                <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider">SHANTA EDUCATION HUB</div>
                <div className="text-sm font-semibold text-white">22-Acre Eco-Friendly Green Quadrangle & Campus Building</div>
              </div>
            </div>

            {/* Decorative Dot Grid from Screenshot */}
            <div className="flex justify-center gap-4 mt-6">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="w-2.5 h-2.5 rounded-full border border-orange-500 bg-transparent"></span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
