import React, { useState } from 'react';
import { Plus, Minus, Users, Shield, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export const StudentGovernanceSection: React.FC = () => {
  const { setActivePage, openGalleryModal } = useCollege();
  const [accordionOpen, setAccordionOpen] = useState(true);

  const councilPositions = [
    { role: 'Student Principal', holder: 'Pooja Patil', dept: 'CSE - 8th Sem', sash: 'Golden Sash' },
    { role: 'Student Director', holder: 'Syeda Fatima', dept: 'AI & ML - 8th Sem', sash: 'Golden Sash' },
    { role: 'Student Dean Academics', holder: 'Radhika Kulkarni', dept: 'ECE - 8th Sem', sash: 'Golden Sash' },
    { role: 'Vice President Toastmasters Club', holder: 'Sneha Deshmukh', dept: 'Civil - 6th Sem', sash: 'Blue Sash' },
    { role: 'President Coding & Hackathon Club', holder: 'Zaheer Khan', dept: 'CSE - 7th Sem', sash: 'Blue Sash' },
    { role: 'President Green & Energy Club', holder: 'Meenakshi Hiremath', dept: 'EEE - 6th Sem', sash: 'Green Sash' }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading matching Screenshot 2026-08-18 124058 */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#181a3d] tracking-tight uppercase">
            STUDENT SELF GOVERNANCE
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Accordion Item: "Importance Of Students Governance" matching Screenshot */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="border border-slate-300 rounded-2xl overflow-hidden shadow-xs bg-white">
            <button
              id="governance-accordion-toggle-btn"
              onClick={() => setAccordionOpen(!accordionOpen)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <span className="text-base sm:text-lg font-bold text-[#181a3d]">
                Importance Of Students Governance
              </span>
              <span className="p-1 rounded-full bg-slate-100 text-slate-700">
                {accordionOpen ? <Minus className="w-5 h-5 text-orange-600" /> : <Plus className="w-5 h-5" />}
              </span>
            </button>

            {accordionOpen && (
              <div className="px-6 pb-6 pt-2 text-slate-700 text-sm leading-relaxed border-t border-slate-100 space-y-3 bg-slate-50/50">
                <p>
                  At Shanta Institute of Technology, student self-governance empowers young engineers to take active leadership in administrative decisions, technical symposiums, disciplinary frameworks, and campus welfare. Elected student leaders gain real-world organizational acumen, crisis management experience, and ethical governance skills.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Democratic representation across all engineering branches</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Direct collaboration with Dean & Principal on student welfare</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Management of technical fests, hackathons, and community outreach</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Peer-to-peer mentoring and academic grievance redressing</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Student Council Photo matching student self governence.webp */}
        <div 
          onClick={() => openGalleryModal('photo-student-governance')}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 relative cursor-pointer group"
          title="Click to view full student self governance photo in gallery"
        >
          <img
            src="/images/student-self-governance.jpg"
            alt="Shanta Institute of Technology Student Self Governance Council with Leadership Sashes"
            className="w-full h-[360px] sm:h-[480px] object-cover object-top group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/50 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400 text-blue-950 text-xs font-black w-fit">
                <Shield className="w-3.5 h-3.5" />
                <span>SIT STUDENT COUNCIL EXECUTIVE BODY</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-900/90 text-blue-100 text-[10px] font-bold border border-blue-700">
                student self governence.webp
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Pioneering Youth Leadership & Self Governance
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl mt-1">
              Representing student dean academics, student principal, student director, and club leadership at Shanta Institute of Technology. Click to view high-res photo in gallery.
            </p>
          </div>
        </div>

        {/* Roles Breakdown Grid */}
        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {councilPositions.map((pos, idx) => (
            <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-orange-600">{pos.sash}</div>
              <div className="text-xs font-bold text-slate-900 leading-tight">{pos.role}</div>
              <div className="text-[11px] text-slate-600">{pos.holder}</div>
              <div className="text-[10px] text-slate-400">{pos.dept}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
