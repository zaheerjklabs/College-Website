import React from 'react';
import { HardHat, Presentation, TrendingUp, Handshake, ArrowRight, ExternalLink } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';
import { PARTNERS } from '../../data/initialData';

export const WhySITSection: React.FC = () => {
  const { setActivePage } = useCollege();

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background subtle graduate cap vectors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with >>>> Chevrons from Screenshot */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-1 text-[#ea580c] mb-1">
            <span className="text-xl font-black">&gt;&gt;&gt;&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#181a3d] tracking-tight">
            WHY SIT?
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* 4 Columns matching Screenshot 2026-08-18 123756 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Column 1: Doing Engineering */}
          <div className="flex flex-col items-center text-center space-y-3 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-[#181a3d] mb-2">
              <HardHat className="w-9 h-9" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#181a3d]">
              Doing Engineering
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
              The scope of learning new concepts and theories is never-ending at SIT. With a long list of major and minor programs in engineering and technology, you can study various specializations and subjects.
            </p>
          </div>

          {/* Column 2: Best Faculty */}
          <div className="flex flex-col items-center text-center space-y-3 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-2">
              <Presentation className="w-9 h-9" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#181a3d]">
              Best Faculty
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
              Our college boasts a distinguished faculty renowned for their expertise and dedication to academic excellence. The staff members undertaking certifications like NPTEL.
            </p>
            {/* Read More button exactly from screenshot */}
            <div className="pt-2">
              <button
                id="why-sit-faculty-readmore-btn"
                onClick={() => setActivePage('faculty-directory')}
                className="bg-[#3880ff] hover:bg-[#2563eb] text-white text-xs font-bold px-4 py-1.5 rounded shadow transition-colors"
              >
                Read More
              </button>
            </div>
          </div>

          {/* Column 3: Career Design Center */}
          <div className="flex flex-col items-center text-center space-y-3 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-[#181a3d] mb-2">
              <TrendingUp className="w-9 h-9" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#181a3d]">
              Career Design Center
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
              Under the Career Design Center, students prepare for the corporate world through internships, training programs, job fairs, externships, placements, and other resources.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActivePage('career-design')}
                className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
              >
                <span>CDC Programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 4: Partnerships & Collaborations */}
          <div className="flex flex-col items-center text-center space-y-3 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-2">
              <Handshake className="w-9 h-9" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#181a3d]">
              Partnerships & Collaborations
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
              SIT fosters partnerships and collaborations with renowned international and national organizations that facilitate the educational journey of students. Some major partnerships include, Comed Kares, Be-Practical tech solution, QSpiders, BKEC, PES, HITAM, COCUBES, ISIE India, Re Code, Excel R etc.
            </p>
          </div>

        </div>

        {/* Dynamic Partner Logo Pills */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-4">
            Official Industry Partners & Collaborative Bodies
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {PARTNERS.map((partner, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold hover:border-orange-300 hover:text-orange-700 transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
