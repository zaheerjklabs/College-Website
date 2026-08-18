import React, { useState } from 'react';
import { 
  Laptop, 
  Cpu, 
  Radio, 
  Zap, 
  Building, 
  Download, 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { navigateToDepartment, events, setActivePage, openAdmissionModal, showToast } = useCollege();
  const [eventSearch, setEventSearch] = useState('');

  const filteredEvents = events.filter(evt => 
    evt.title.toLowerCase().includes(eventSearch.toLowerCase()) ||
    evt.description.toLowerCase().includes(eventSearch.toLowerCase()) ||
    evt.date.toLowerCase().includes(eventSearch.toLowerCase())
  );

  const handleDownload = (type: string) => {
    showToast(`Downloading ${type}... Your document will open in a moment.`, 'info');
  };

  return (
    <footer className="bg-blue-950 text-white pt-12 pb-8 border-t-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Big Shield Logo and Overview (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="p-5 bg-blue-900/40 rounded-3xl border border-blue-800/60 shadow-inner w-full flex flex-col items-center">
              <Logo variant="footer" size="xl" />
              <p className="mt-4 text-xs text-blue-200 leading-relaxed text-center">
                A Unit of SGI &bull; Shanta Institute of Technology Gulbarga, established in 2011 on 22 acres of lush green campus, shaping future engineering leaders.
              </p>
              
              <div className="mt-4 pt-4 border-t border-blue-800/60 w-full flex flex-col gap-2 text-xs text-blue-200">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Shanta Education Hub, Shahabad NH 150, Gulbarga 585106</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>+91 80239 00901 / 7676522231</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>info@sitgulbarga.org</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column: Programs Under SGI, Scholarship, Project Based Learning (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-base font-bold text-white tracking-wide mb-3 flex items-center gap-2">
                <span>Undergraduate Engineering</span>
              </h3>
              <ul className="space-y-2 text-xs text-blue-200">
                <li>
                  <button 
                    onClick={() => navigateToDepartment('cse')} 
                    className="flex items-center gap-2 hover:text-yellow-400 transition-colors text-left group"
                  >
                    <Laptop className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                    <span>Computer Science & Engineering</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToDepartment('aiml')} 
                    className="flex items-center gap-2 hover:text-yellow-400 transition-colors text-left group"
                  >
                    <Cpu className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                    <span>Artificial Intelligence & ML</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToDepartment('ece')} 
                    className="flex items-center gap-2 hover:text-yellow-400 transition-colors text-left group"
                  >
                    <Radio className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                    <span>Electronics & Communication</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToDepartment('eee')} 
                    className="flex items-center gap-2 hover:text-yellow-400 transition-colors text-left group"
                  >
                    <Zap className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                    <span>Electrical & Electronics</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToDepartment('civil')} 
                    className="flex items-center gap-2 hover:text-yellow-400 transition-colors text-left group"
                  >
                    <Building className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                    <span>Civil Engineering</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Quick Document Download Box */}
            <div className="pt-2 border-t border-blue-900">
              <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-2">
                Mandatory Institutional Downloads
              </h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleDownload('SIT Admission Brochure 2026 PDF')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-[11px] font-semibold transition-colors border border-blue-800"
                >
                  <Download className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Prospectus 2026 PDF</span>
                </button>
                <button
                  onClick={() => handleDownload('Project Based Learning Guidelines PPT')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-[11px] font-semibold transition-colors border border-blue-800"
                >
                  <Download className="w-3.5 h-3.5 text-yellow-400" />
                  <span>PBL Guidelines PPT</span>
                </button>
                <button
                  onClick={() => handleDownload('Placement Report 2026 PDF')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-[11px] font-semibold transition-colors border border-blue-800"
                >
                  <Download className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Placement Report PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Events Table & Search (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white tracking-wide">
                Campus Events & Hackathons
              </h3>
              <span className="text-[11px] text-yellow-400 font-semibold">Live Calendar</span>
            </div>

            {/* Event Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search events, workshops..."
                value={eventSearch}
                onChange={(e) => setEventSearch(e.target.value)}
                className="w-full bg-blue-900/60 border border-blue-800 rounded-xl px-3 py-2 pl-9 text-xs text-white placeholder-blue-300 focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
              <Search className="w-4 h-4 text-blue-300 absolute left-2.5 top-2.5" />
            </div>

            {/* Events List Box */}
            <div className="bg-blue-900/30 rounded-2xl border border-blue-800/60 p-3 space-y-2 max-h-56 overflow-y-auto">
              {filteredEvents.map((evt) => (
                <div key={evt.id} className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-900 text-xs hover:border-yellow-400/50 transition-colors">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-yellow-400">{evt.date}</span>
                    <span className="text-[10px] text-blue-300">{evt.department}</span>
                  </div>
                  <h5 className="font-bold text-white mt-0.5">{evt.title}</h5>
                  <p className="text-[11px] text-blue-200 mt-0.5 line-clamp-1">{evt.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright line with Professional Polish Links */}
        <div className="mt-10 pt-6 border-t border-blue-900 flex flex-wrap items-center justify-between gap-4 text-[11px] text-blue-300">
          <p>
            &copy; 2026 Shanta Institute of Technology (SIT), Kalaburagi. All Rights Reserved. Affiliated to VTU Belagavi & Approved by AICTE New Delhi.
          </p>
          <div className="flex items-center gap-4 text-blue-200">
            <button onClick={() => setActivePage('iqac')} className="hover:text-yellow-400">IQAC Cell</button>
            <button onClick={() => setActivePage('about')} className="hover:text-yellow-400">AICTE Disclosure</button>
            <button onClick={() => setActivePage('admissions')} className="hover:text-yellow-400">KCET Code E227</button>
            <button onClick={() => setActivePage('alumni')} className="hover:text-yellow-400">Alumni Association</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
