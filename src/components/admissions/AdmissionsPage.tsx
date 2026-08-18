import React from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  Download, 
  Phone, 
  Mail, 
  MapPin, 
  Building2, 
  HelpCircle, 
  ArrowRight, 
  FileText,
  ShieldCheck
} from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export const AdmissionsPage: React.FC = () => {
  const { openAdmissionModal, showToast } = useCollege();

  const feeStructures = [
    { branch: 'Computer Science & Engineering (CSE)', intake: 120, kcetFee: '₹ 65,000/yr', comedkFee: '₹ 1,35,000/yr', managementFee: 'Contact Office' },
    { branch: 'Artificial Intelligence & Machine Learning (AI&ML)', intake: 60, kcetFee: '₹ 65,000/yr', comedkFee: '₹ 1,35,000/yr', managementFee: 'Contact Office' },
    { branch: 'Electronics & Communication Engineering (ECE)', intake: 60, kcetFee: '₹ 65,000/yr', comedkFee: '₹ 1,20,000/yr', managementFee: 'Contact Office' },
    { branch: 'Electrical & Electronics Engineering (EEE)', intake: 60, kcetFee: '₹ 65,000/yr', comedkFee: '₹ 1,10,000/yr', managementFee: 'Contact Office' },
    { branch: 'Civil Engineering (CIVIL)', intake: 60, kcetFee: '₹ 65,000/yr', comedkFee: '₹ 1,00,000/yr', managementFee: 'Contact Office' },
    { branch: 'Mechanical Engineering (MECH)', intake: 60, kcetFee: '₹ 65,000/yr', comedkFee: '₹ 1,00,000/yr', managementFee: 'Contact Office' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-[#181a3d] text-white pt-10 pb-12 px-4 sm:px-8 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold">
            <GraduationCap className="w-4 h-4" />
            <span>Admissions Open 2026-2027 &bull; KCET Code: E227</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Engineering Admissions & Eligibility
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Begin your four-year transformative engineering journey at Shanta Institute of Technology Kalaburagi. Comprehensive guidance for KCET, COMED-K, and Management admissions.
          </p>

          <div className="pt-2">
            <button
              onClick={openAdmissionModal}
              className="bg-orange-600 hover:bg-orange-700 active:scale-95 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-xs sm:text-sm"
            >
              Fill Online Admission Application &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10">
        
        {/* 3 Steps Guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 font-black text-base flex items-center justify-center">
              1
            </div>
            <h3 className="text-base font-bold text-slate-900">Check Eligibility</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Candidate must have passed 10+2 / PUC II year with Physics and Mathematics as compulsory subjects along with Chemistry / Bio-Tech / Computer Science with min 45% aggregate (40% for SC/ST/OBC).
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 font-black text-base flex items-center justify-center">
              2
            </div>
            <h3 className="text-base font-bold text-slate-900">KCET Choice Filling</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Use Karnataka Examination Authority (KEA) CET College Code <strong>E227</strong> during option entry rounds for Shanta Institute of Technology Kalaburagi.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 font-black text-base flex items-center justify-center">
              3
            </div>
            <h3 className="text-base font-bold text-slate-900">Direct Counseling & Verification</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Visit our campus admission cell on Shahabad Highway with original marks cards, study certificates, transfer certificate, and caste/income certificate (if applicable).
            </p>
          </div>
        </div>

        {/* Seat Matrix & Fee Structure Table */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-xl font-bold text-[#181a3d]">Undergraduate B.E. Intake & Fee Structure</h3>
              <p className="text-xs text-slate-500">Government approved fee guidelines per Karnataka Higher Education Council</p>
            </div>
            <button
              onClick={() => showToast('Downloading Official Fee Structure & Scholarships Circular PDF...', 'info')}
              className="flex items-center gap-2 bg-[#003884] hover:bg-[#002860] text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Fee PDF</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-700 uppercase font-bold text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">Engineering Branch</th>
                  <th className="py-3.5 px-4 text-center">Annual Intake</th>
                  <th className="py-3.5 px-4 text-center">KCET Govt Quota (Code: E227)</th>
                  <th className="py-3.5 px-4 text-center">COMED-K Quota</th>
                  <th className="py-3.5 px-4 text-center">Management Quota</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {feeStructures.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{row.branch}</td>
                    <td className="py-3.5 px-4 text-center font-semibold text-slate-700">{row.intake}</td>
                    <td className="py-3.5 px-4 text-center font-bold text-emerald-700 bg-emerald-50/50">{row.kcetFee}</td>
                    <td className="py-3.5 px-4 text-center text-slate-700">{row.comedkFee}</td>
                    <td className="py-3.5 px-4 text-center font-semibold text-orange-600">{row.managementFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scholarships & Documents Required */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-[#181a3d] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-orange-500" />
              <span>Scholarships & Financial Assistance</span>
            </h3>
            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-3 bg-orange-50/60 rounded-xl border border-orange-100">
                <strong className="block text-slate-900 mb-1">State Scholarship Portal (SSP):</strong>
                Full tuition fee reimbursement for SC/ST/Cat-1/OBC students as per Karnataka Government social welfare department norms.
              </div>
              <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100">
                <strong className="block text-slate-900 mb-1">SGI Merit Scholarship:</strong>
                Up to 50% tuition waiver for students scoring above 90% in 12th PCM or securing top KCET ranks.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="block text-slate-900 mb-1">National Scholarship Portal (NSP):</strong>
                Central sector scholarship for meritorious students and children of defense personnel.
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-[#181a3d] flex items-center gap-2">
              <FileText className="w-5 h-5 text-orange-500" />
              <span>Mandatory Documents Required</span>
            </h3>
            <div className="space-y-2 text-xs text-slate-700">
              {[
                '10th Standard / SSLC Marks Card (Original & 3 Copies)',
                '12th Standard / PUC Marks Card (Original & 3 Copies)',
                'KCET / COMED-K Allotment Order and Rank Card',
                'Transfer Certificate (TC) & Migration Certificate (for non-Karnataka students)',
                'Study / Character Certificate for 7 continuous years in Karnataka',
                'Caste & Income Certificate (if claiming quota benefits)',
                '6 Passport size photographs & Aadhar Card copy'
              ].map((doc, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
