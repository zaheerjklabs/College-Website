import React, { useState } from 'react';
import { Plus, ArrowRight, GraduationCap, Laptop, Cpu, Radio, Zap, Building, Wrench, BookOpen, Users, CheckCircle, X } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';
import { Department } from '../../types';

export const ProgrammesSection: React.FC = () => {
  const { departments, navigateToDepartment, openAdmissionModal } = useCollege();
  const [activeModalDept, setActiveModalDept] = useState<Department | null>(null);

  // Helper for program icons
  const getDeptIcon = (id: string) => {
    switch (id) {
      case 'cse': return <Laptop className="w-9 h-9 text-blue-900" />;
      case 'aiml': return <Cpu className="w-9 h-9 text-blue-900" />;
      case 'ece': return <Radio className="w-9 h-9 text-blue-900" />;
      case 'eee': return <Zap className="w-9 h-9 text-blue-900" />;
      case 'civil': return <Building className="w-9 h-9 text-blue-900" />;
      case 'mech': return <Wrench className="w-9 h-9 text-blue-900" />;
      default: return <GraduationCap className="w-9 h-9 text-blue-900" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-1 text-blue-900 mb-1 font-black text-sm uppercase tracking-widest">
              <span>Undergraduate Engineering Programmes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
              Academic Disciplines & Degrees
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              Four-Year Bachelor of Engineering (B.E.) Degree programs affiliated to VTU Belagavi and approved by AICTE New Delhi.
            </p>
          </div>

          <button
            onClick={openAdmissionModal}
            className="hidden sm:inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow transition-all"
          >
            <span>Seat Matrix & Eligibility</span>
            <ArrowRight className="w-3.5 h-3.5 text-yellow-400" />
          </button>
        </div>

        {/* Grid of Programme Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-slate-50 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 hover:border-blue-300"
            >
              {/* Upper Card Content */}
              <div 
                onClick={() => navigateToDepartment(dept.id)}
                className="p-6 sm:p-8 flex flex-col items-start cursor-pointer"
              >
                <div className="w-full flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-slate-200 shadow-sm">
                    {getDeptIcon(dept.id)}
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-black">
                    {dept.shortCode}
                  </span>
                </div>

                {/* Department Name */}
                <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-900 transition-colors">
                  {dept.name}
                </h3>

                <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {dept.description}
                </p>

                <div className="grid grid-cols-2 gap-2 w-full mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 font-medium">
                  <div>Intake: <strong className="text-slate-800">{dept.intake} Seats</strong></div>
                  <div>Duration: <strong className="text-slate-800">4 Years (8 Sem)</strong></div>
                </div>
              </div>

              {/* Lower Card Action Bar */}
              <div className="px-6 py-3.5 bg-white border-t border-slate-200/80 flex items-center justify-between text-xs">
                <button
                  onClick={() => navigateToDepartment(dept.id)}
                  className="font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                
                <button
                  onClick={() => setActiveModalDept(dept)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-blue-900 transition-colors"
                  title="Quick View"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Expander Modal for Quick View */}
        {activeModalDept && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 p-6 sm:p-8 space-y-6">
              
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                    {getDeptIcon(activeModalDept.id)}
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 text-xs font-black">
                      {activeModalDept.shortCode} &bull; {activeModalDept.intake} Seats
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">
                      {activeModalDept.name}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalDept(null)}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>{activeModalDept.description}</p>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900">Head of Department (HOD)</div>
                  <div className="text-slate-800 font-semibold">{activeModalDept.hodName}</div>
                  <div className="text-xs text-slate-500">{activeModalDept.hodQualification}</div>
                  <p className="text-xs italic text-slate-600 mt-1 border-t border-slate-200 pt-2">
                    "{activeModalDept.hodMessage}"
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="font-bold text-slate-900">Key Laboratories & Compute Studios:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalDept.labs.map((lab, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-blue-50/50 border border-blue-100 text-xs">
                        <strong className="text-blue-950 block">{lab.name}</strong>
                        <span className="text-slate-500 text-[11px]">{lab.equipment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    const id = activeModalDept.id;
                    setActiveModalDept(null);
                    navigateToDepartment(id);
                  }}
                  className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-full transition-colors"
                >
                  View Full Department & Notes &rarr;
                </button>
                <button
                  onClick={() => setActiveModalDept(null)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-full transition-colors"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
