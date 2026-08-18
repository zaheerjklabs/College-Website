import React from 'react';
import { Trees, Sparkles, Building2, Eye, MapPin, Maximize2, ShieldCheck } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export const CampusShowcaseSection: React.FC = () => {
  const { openGalleryModal, setActivePage } = useCollege();

  return (
    <section className="py-12 sm:py-16 bg-slate-50 relative overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-950 text-xs font-bold mb-2">
              <Trees className="w-3.5 h-3.5 text-emerald-600" />
              <span>22-ACRE ECO-FRIENDLY CAMPUS QUADRANGLE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-blue-950 tracking-tight">
              Inside Our Campus & Academic Courtyard
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
              A serene 4-storey collegiate building on Shahabad Highway with central amphitheatre stage and manicured green pastures.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openGalleryModal('photo-college-inside')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-blue-950 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <Maximize2 className="w-4 h-4" />
              <span>View Fullscreen Photo</span>
            </button>
            <button
              onClick={() => setActivePage('facilities')}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 transition-colors"
            >
              <span>Explore Facilities</span>
            </button>
          </div>
        </div>

        {/* Large Featured Photo Card */}
        <div 
          onClick={() => openGalleryModal('photo-college-inside')}
          className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 cursor-pointer group group-hover:border-yellow-400 transition-all duration-300"
          title="Click to view inside campus photo in full high-resolution lightbox"
        >
          {/* Main Photo Asset with responsive framing */}
          <div className="relative aspect-16/9 sm:aspect-21/9 max-h-[500px] overflow-hidden">
            <img
              src="/images/campus-building-lawn.jpg"
              alt="Shanta Institute of Technology 4-storey academic building and central green courtyard lawn"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Dark gradient overlay at bottom for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/30 to-transparent flex flex-col justify-between p-6 sm:p-10 text-white">
              
              {/* Top Tag Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-yellow-400 text-blue-950 text-xs font-black shadow-lg">
                    College inside photo.webp
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-900/80 backdrop-blur-md text-white text-xs font-semibold border border-blue-700/60">
                    Shahabad Highway NH 150, Kalaburagi
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-slate-200 text-xs font-medium border border-white/20">
                  <Eye className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Click anywhere to expand photo</span>
                </div>
              </div>

              {/* Bottom Details Banner */}
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>SHANTA INSTITUTE OF TECHNOLOGY CAMPUS</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
                  Modern Academic Architecture & Vibrant Campus Quadrangle
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed hidden sm:block">
                  Equipped with spacious ventilated lecture halls, high-performance computing centers, dedicated engineering workshops, and a central amphitheatre stage for tech symposiums and youth fests.
                </p>

                {/* Micro Key Points */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px] font-semibold text-slate-300">
                  <div className="flex items-center gap-1.5 bg-blue-900/60 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-blue-700/50">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>22-Acre Eco Grounds</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-blue-900/60 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-blue-700/50">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    <span>Amphitheatre Stage</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-blue-900/60 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-blue-700/50">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span>4-Storey Blocks</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-blue-900/60 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-blue-700/50">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    <span>VTU Code E227</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
