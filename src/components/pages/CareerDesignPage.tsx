import React from 'react';
import { TrendingUp, Briefcase, Award, CheckCircle2, Download, Building, ArrowRight } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';
import { RECRUITERS, PARTNERS } from '../../data/initialData';

export const CareerDesignPage: React.FC = () => {
  const { openAdmissionModal, showToast } = useCollege();

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Banner */}
      <div className="bg-[#181a3d] text-white pt-10 pb-12 px-4 sm:px-8 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">
            Career Design Center (CDC) &bull; 100% Placement Guidance
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Career Design & Campus Placements
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Bridging academia and industry through intensive coding bootcamps, aptitude mastery, soft-skills training, and marquee campus placement drives.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
        
        {/* Placement Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs">
            <div className="text-3xl font-black text-orange-600">12.0 LPA</div>
            <div className="text-xs text-slate-600 mt-1 font-medium">Highest Package</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs">
            <div className="text-3xl font-black text-indigo-900">4.8 LPA</div>
            <div className="text-xs text-slate-600 mt-1 font-medium">Average Package</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs">
            <div className="text-3xl font-black text-emerald-600">85%+</div>
            <div className="text-xs text-slate-600 mt-1 font-medium">Placement Track</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs">
            <div className="text-3xl font-black text-amber-600">60+</div>
            <div className="text-xs text-slate-600 mt-1 font-medium">Corporate Recruiters</div>
          </div>
        </div>

        {/* CDC Training 4-Year Roadmap */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <h2 className="text-2xl font-black text-[#181a3d]">4-Year Structured Career Design Model</h2>
            <p className="text-xs text-slate-500 mt-1">Nurturing holistic corporate readiness from Year 1 to Year 4</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-100 space-y-2">
              <span className="text-xs font-black text-orange-600 uppercase">1st Year &bull; Foundation</span>
              <h4 className="text-sm font-bold text-slate-900">Communication & Logic</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Grammar, Toastmasters speech training, basic programming in Python/C, and logical reasoning tests.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-2">
              <span className="text-xs font-black text-indigo-700 uppercase">2nd Year &bull; Core Skills</span>
              <h4 className="text-sm font-bold text-slate-900">DSA & Web Sprints</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Data structures, object-oriented concepts, mini hackathons, and industrial workshop visits.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-2">
              <span className="text-xs font-black text-amber-800 uppercase">3rd Year &bull; Industry Ready</span>
              <h4 className="text-sm font-bold text-slate-900">Internships & Mock Drives</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full-stack dev, cloud fundamentals, resume clinics, technical mock interviews, and summer internships.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
              <span className="text-xs font-black text-emerald-800 uppercase">4th Year &bull; Placements</span>
              <h4 className="text-sm font-bold text-slate-900">On-Campus Recruitment</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                On-campus corporate drives, pool campus events, offer rollouts, and final capstone project reviews.
              </p>
            </div>
          </div>
        </div>

        {/* Recruiters & MoUs */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-[#181a3d]">Leading Recruiter Network</h3>
            <p className="text-xs text-slate-500 mt-1">Our top recruiting partners hiring engineers across all disciplines</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {RECRUITERS.map((rec, i) => (
              <span key={i} className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 font-bold text-xs text-slate-800">
                {rec}
              </span>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 text-center">
            <button
              onClick={() => showToast('Downloading Placement Brochure 2026 PDF...', 'info')}
              className="inline-flex items-center gap-2 bg-indigo-900 hover:bg-indigo-950 text-white text-xs font-bold px-6 py-3 rounded-xl transition-colors shadow"
            >
              <Download className="w-4 h-4" />
              <span>Download Detailed CDC Placement Report</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
