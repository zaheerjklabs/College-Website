import React from 'react';
import { ArrowRight, Briefcase, TrendingUp, CheckCircle, Award } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';
import { RECRUITERS } from '../../data/initialData';

export const PlacementsSection: React.FC = () => {
  const { setActivePage } = useCollege();

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with >>>> Chevrons from Screenshot */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 text-[#ea580c] mb-1">
            <span className="text-xl font-black">&gt;&gt;&gt;&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#181a3d] tracking-tight">
            STUDENTS PLACEMENTS
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
            Our graduates step directly into rewarding engineering and tech careers through our active Career Design Center.
          </p>
        </div>

        {/* Recruiter Logos Card matching Screenshot 2026-08-18 123845 */}
        <div className="bg-slate-50/70 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm relative">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
            
            {/* 1. INFOVISION matching screenshot */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm w-full h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <div className="text-center">
                <span className="font-serif tracking-widest text-slate-800 text-lg font-bold">INFO</span>
                <span className="font-serif tracking-widest text-red-600 text-2xl font-black italic">V</span>
                <span className="font-serif tracking-widest text-slate-800 text-lg font-bold">ISION</span>
              </div>
            </div>

            {/* 2. Capgemini matching screenshot */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm w-full h-24 flex items-center justify-center gap-2 hover:shadow-md transition-shadow">
              <span className="text-xl sm:text-2xl font-bold text-[#0070ad] tracking-tight">Capgemini</span>
              <div className="w-4 h-4 rounded-full bg-[#0070ad] transform rotate-45"></div>
            </div>

            {/* 3. ALTEN CALSOFT LABS matching screenshot */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm w-full h-24 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1.5 font-black text-slate-800 text-xs sm:text-sm tracking-wider">
                <span className="text-red-600">ALTEN</span>
                <span className="text-blue-600">CALSOFTLABS</span>
              </div>
              <span className="text-[9px] text-slate-500 font-semibold uppercase tracking-widest mt-0.5">An Alten Group Company</span>
            </div>

            {/* 4. Wipro matching screenshot */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm w-full h-24 flex items-center justify-center gap-3 hover:shadow-md transition-shadow">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="w-7 h-7 rounded-full border-4 border-dashed border-amber-500 animate-spin-slow"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <span className="text-2xl font-bold text-slate-900 lowercase tracking-tight">wipro</span>
            </div>

          </div>

          {/* Recruiter Details Row */}
          <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-xs">
              <div className="text-2xl font-black text-orange-600">12.0 LPA</div>
              <div className="text-xs text-slate-600 font-medium">Highest Package</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-xs">
              <div className="text-2xl font-black text-indigo-900">4.8 LPA</div>
              <div className="text-xs text-slate-600 font-medium">Average Package</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-xs">
              <div className="text-2xl font-black text-emerald-600">85%+</div>
              <div className="text-xs text-slate-600 font-medium">Placement Track</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-xs">
              <div className="text-2xl font-black text-amber-600">60+</div>
              <div className="text-xs text-slate-600 font-medium">Recruiting Companies</div>
            </div>
          </div>

          {/* Dots carousel indicator from screenshot */}
          <div className="flex justify-center gap-2 mt-6">
            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            <span className="w-2 h-2 rounded-full bg-slate-800"></span>
            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
          </div>

        </div>

      </div>
    </section>
  );
};
