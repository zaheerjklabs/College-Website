import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle2, Download } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export const IQACPage: React.FC = () => {
  const { showToast } = useCollege();

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Banner */}
      <div className="bg-[#181a3d] text-white pt-10 pb-12 px-4 sm:px-8 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">
            Internal Quality Assurance Cell (IQAC)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Quality Assurance & VTU Accreditations
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Ensuring continuous quality enhancement in academic delivery, research publications, faculty development, and institutional governance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10">
        
        {/* Featured Keynote & Symposium with Telecom Day photo */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-950 text-xs font-black">
              <Award className="w-3.5 h-3.5 text-blue-900" />
              <span>SIT IQAC & IEI FLAGSHIP SYMPOSIUM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#181a3d]">
              World Telecommunication & Information Society Day
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              Shanta Institute of Technology (SIT) in collaboration with Institution of Engineers (India), Kalaburagi Local Centre hosted the national symposium on <strong>"Gender Equality in Digital Transformation"</strong> at the SIT Auditorium.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 pt-1">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] text-orange-600 font-bold uppercase block">Chief Guest</span>
                <strong className="text-slate-900">Sri Anandkumar Rangrez I.T.S</strong>
                <span className="text-[11px] text-slate-500 block">Deputy Director General, Ministry of Communications</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] text-indigo-600 font-bold uppercase block">Keynote Speaker</span>
                <strong className="text-slate-900">Dr. Veena Soraganvi</strong>
                <span className="text-[11px] text-slate-500 block">Principal, Shanta Institute of Technology (SIT)</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 font-medium pt-1">
              Convened by <strong>Dr. Prashant Shahabadkar</strong> (Dean IQAC, SIT) &bull; Honored by <strong>Dr. Sridhar R. Pande</strong> (Chairman IEI) & <strong>Prof. Seetharam Munnur</strong>.
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-900 relative aspect-16/10 group">
            <img
              src="/images/world-telecommunication-day-2025.jpg"
              alt="World Telecommunication and Information Society Day at SIT Auditorium"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-3 left-3 bg-blue-950/90 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl backdrop-blur-xs border border-blue-800 flex items-center gap-1.5">
              <span>SIT Auditorium &bull; Ministry of Communications Keynote</span>
            </div>
          </div>
        </div>

        {/* IQAC Functions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-[#181a3d]">IQAC Objectives & Focus</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Development and application of quality benchmarks in academic and administrative activities.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Facilitating the creation of a learner-centric environment conducive to quality education.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Arrangement for feedback response from students, parents, and other stakeholders on quality-related institutional processes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Organization of inter and intra institutional workshops, seminars on quality-related themes.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-[#181a3d]">Approvals & Compliance Records</h3>
            <div className="space-y-3">
              {[
                { title: 'AICTE Mandatory Disclosure 2026-27', date: 'June 2026', size: '2.8 MB PDF' },
                { title: 'VTU Affiliation Continuation Order', date: 'Academic Year 2026-27', size: '1.4 MB PDF' },
                { title: 'Annual Quality Assurance Report (AQAR)', date: 'Submitted to IQAC Cell', size: '3.1 MB PDF' },
                { title: 'Institutional Feedback Analysis Report', date: 'Even Semester 2026', size: '950 KB PDF' }
              ].map((doc, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-slate-900">{doc.title}</div>
                    <div className="text-[10px] text-slate-500">{doc.date} &bull; {doc.size}</div>
                  </div>
                  <button
                    onClick={() => showToast(`Downloading ${doc.title}...`, 'info')}
                    className="p-2 rounded-lg bg-white border border-slate-200 text-indigo-900 hover:bg-indigo-50"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
