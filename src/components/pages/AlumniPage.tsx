import React, { useState } from 'react';
import { Users, Briefcase, GraduationCap, Send, CheckCircle2, Heart } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export const AlumniPage: React.FC = () => {
  const { showToast } = useCollege();
  const [alumniName, setAlumniName] = useState('');
  const [alumniBatch, setAlumniBatch] = useState('2022');
  const [alumniCompany, setAlumniCompany] = useState('');
  const [alumniEmail, setAlumniEmail] = useState('');
  const [alumniRole, setAlumniRole] = useState('');

  const alumniTestimonials = [
    { name: 'Praveen Biradar', batch: 'CSE 2018', role: 'Senior Software Engineer @ Capgemini', quote: 'The hands-on lab sessions and faculty mentorship at SIT Kalaburagi gave me the exact algorithmic foundation required to crack tier-1 product roles.' },
    { name: 'Aishwarya Kulkarni', batch: 'ECE 2020', role: 'Embedded Systems Lead @ Alten Calsoft Labs', quote: 'From our 2nd year project competitions in XPLORE to final semester placements, SIT provided non-stop industrial exposure.' },
    { name: 'Mohammed Farooq', batch: 'Civil 2019', role: 'Assistant Executive Engineer (AEE)', quote: 'The surveying and structural engineering laboratories on the 22-acre campus are among the best in the Kalaburagi region.' }
  ];

  const handleRegisterAlumni = (e: React.FormEvent) => {
    e.preventDefault();
    if (!alumniName.trim() || !alumniEmail.trim()) {
      showToast('Please provide your name and email.', 'error');
      return;
    }
    showToast(`Thank you ${alumniName}! You are now registered in the SIT Alumni Global Network.`, 'success');
    setAlumniName('');
    setAlumniEmail('');
    setAlumniCompany('');
    setAlumniRole('');
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Banner */}
      <div className="bg-[#181a3d] text-white pt-10 pb-12 px-4 sm:px-8 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">
            SIT Global Alumni Association
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Alumni Network & Mentorship
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Connecting thousands of Shanta Institute of Technology engineering alumni thriving across multinational corporations, research labs, civil services, and entrepreneurial ventures.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
        
        {/* Alumni Spotlight */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#181a3d]">
            Alumni Spotlights & Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alumniTestimonials.map((al, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic text-justify">
                  "{al.quote}"
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center text-sm">
                    {al.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">{al.name}</h4>
                    <div className="text-[11px] text-orange-600 font-semibold">{al.batch}</div>
                    <div className="text-[10px] text-slate-500">{al.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Registration Box */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm max-w-2xl mx-auto space-y-6">
          <div>
            <h3 className="text-xl font-bold text-[#181a3d]">Join the SIT Alumni Directory</h3>
            <p className="text-xs text-slate-500 mt-1">Stay updated with campus fests, mentor current students, and attend annual alumni reunions</p>
          </div>

          <form onSubmit={handleRegisterAlumni} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 uppercase mb-1">Full Name</label>
              <input
                type="text"
                placeholder="e.g. Anand Biradar"
                value={alumniName}
                onChange={(e) => setAlumniName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Graduation Batch</label>
                <select
                  value={alumniBatch}
                  onChange={(e) => setAlumniBatch(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                >
                  {['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'].map(yr => (
                    <option key={yr} value={yr}>{yr} Batch</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Current Company / Org</label>
                <input
                  type="text"
                  placeholder="e.g. Infosys / Wipro / Govt"
                  value={alumniCompany}
                  onChange={(e) => setAlumniCompany(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Job Designation</label>
                <input
                  type="text"
                  placeholder="e.g. Cloud Engineer"
                  value={alumniRole}
                  onChange={(e) => setAlumniRole(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. anand@alumni.com"
                  value={alumniEmail}
                  onChange={(e) => setAlumniEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Register as Alumni</span>
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};
