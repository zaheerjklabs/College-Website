import React, { useState } from 'react';
import { X, CheckCircle2, Send, Download, Phone, Mail, MapPin, Sparkles, Building2, GraduationCap } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';
import { AdmissionInquiry } from '../../types';

export const AdmissionModal: React.FC = () => {
  const { isAdmissionModalOpen, closeAdmissionModal, addAdmissionInquiry, showToast } = useCollege();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('Computer Science & Engineering');
  const [quota, setQuota] = useState('KCET (Code: E227)');
  const [kcetRank, setKcetRank] = useState('');
  const [pucPercentage, setPucPercentage] = useState('');
  const [city, setCity] = useState('');
  const [submittedInquiry, setSubmittedInquiry] = useState<AdmissionInquiry | null>(null);

  if (!isAdmissionModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      showToast('Please provide your name and phone number.', 'error');
      return;
    }

    const newInquiry: AdmissionInquiry = {
      id: `SIT-ADM-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      fullName,
      email: email || 'prospect@sit.edu',
      phone,
      branch,
      quota,
      kcetRank,
      pucPercentage,
      city: city || 'Kalaburagi',
      submittedAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'pending'
    };

    addAdmissionInquiry(newInquiry);
    setSubmittedInquiry(newInquiry);
    showToast('Admission Enquiry submitted successfully! Our counselor will reach out shortly.', 'success');
  };

  const handleResetAndClose = () => {
    setSubmittedInquiry(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setKcetRank('');
    setPucPercentage('');
    setCity('');
    closeAdmissionModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 p-6 sm:p-8 space-y-6 relative">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedInquiry ? (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black text-slate-900">Application Submitted!</h3>
              <p className="text-xs text-slate-600">
                Thank you, <strong>{submittedInquiry.fullName}</strong>. Your enquiry for Shanta Institute of Technology has been logged.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">Application Reference ID:</span>
                <span className="font-mono font-bold text-orange-600 text-sm">{submittedInquiry.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Branch:</span>
                <span className="font-bold text-slate-800">{submittedInquiry.branch}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Admission Quota:</span>
                <span className="font-bold text-slate-800">{submittedInquiry.quota}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Number:</span>
                <span className="font-bold text-slate-800">{submittedInquiry.phone}</span>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl text-[11px] text-amber-800 border border-amber-200 text-left">
              <strong>Next Steps:</strong> The Admissions Coordinator will contact you within 24 hours to assist with seat reservation, verification of documents, and scholarship eligibility.
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => showToast('Downloading Admission Prospectus PDF...', 'info')}
                className="flex-1 py-2.5 bg-indigo-900 hover:bg-indigo-950 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Prospectus</span>
              </button>
              <button
                onClick={handleResetAndClose}
                className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* Application Form */
          <>
            <div className="border-b border-slate-100 pb-4 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wide">
                <GraduationCap className="w-4 h-4" />
                <span>Admissions 2026-2027 &bull; KCET Code: E227</span>
              </div>
              <h3 className="text-2xl font-black text-[#181a3d]">
                Admission Enquiry & Registration
              </h3>
              <p className="text-xs text-slate-600">
                Direct / KCET Counseling admission counseling at Shanta Institute of Technology Kalaburagi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Student Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Patil"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Phone / Mobile No *</label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. student@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Preferred Engineering Branch</label>
                  <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none font-semibold text-slate-800"
                  >
                    <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                    <option value="Artificial Intelligence & Machine Learning">Artificial Intelligence & ML</option>
                    <option value="Electronics & Communication Engineering">Electronics & Communication</option>
                    <option value="Electrical & Electronics Engineering">Electrical & Electronics</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Admission Quota</label>
                  <select
                    value={quota}
                    onChange={(e) => setQuota(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none font-semibold text-slate-800"
                  >
                    <option value="KCET (Code: E227)">KCET Counseling (Code: E227)</option>
                    <option value="COMED-K Quota">COMED-K Quota</option>
                    <option value="Management Quota">Direct Management Quota</option>
                    <option value="Lateral Entry Diploma">Lateral Entry (Diploma 2nd Year)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">KCET Rank (if any)</label>
                  <input
                    type="text"
                    placeholder="e.g. 34500"
                    value={kcetRank}
                    onChange={(e) => setKcetRank(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">12th / PUC %</label>
                  <input
                    type="text"
                    placeholder="e.g. 84%"
                    value={pucPercentage}
                    onChange={(e) => setPucPercentage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">City / District</label>
                  <input
                    type="text"
                    placeholder="e.g. Kalaburagi"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                id="submit-admission-enquiry-btn"
                className="w-full py-3.5 bg-[#f97316] hover:bg-[#ea580c] active:scale-95 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Submit Admission Application</span>
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
};
