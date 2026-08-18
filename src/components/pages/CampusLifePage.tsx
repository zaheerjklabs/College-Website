import React from 'react';
import { Sparkles, Trophy, Music, Compass, Bus, Home, Coffee, Users, CheckCircle2 } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export const CampusLifePage: React.FC = () => {
  const { openAdmissionModal } = useCollege();

  const clubs = [
    { name: 'Coding & Hackathon Club', desc: 'Competitive programming, web sprints, and algorithmic problem solving on LeetCode & CodeChef.', lead: 'Zaheer Khan (CSE)' },
    { name: 'Robotics & IoT Club', desc: 'Hands-on hardware development, drone manufacturing, and participation in national e-Yantra challenges.', lead: 'Kiran Biradar (ECE)' },
    { name: 'Toastmasters International', desc: 'Public speaking, debate tournaments, confidence building, and professional communication.', lead: 'Sneha Deshmukh (Civil)' },
    { name: 'Green & Solar Energy Club', desc: 'Eco-campus initiatives, rainwater harvesting, solar panel monitoring, and tree plantation drives.', lead: 'Meenakshi H. (EEE)' },
    { name: 'Cultural & Performing Arts Club', desc: 'Music, classical dance, drama, street plays, and annual college fest SGI Utsav organization.', lead: 'Pooja Patil (Council)' },
    { name: 'Sports & Athletics Cell', desc: 'Inter-collegiate VTU cricket, volleyball, football, badminton, and annual sports meet.', lead: 'Mohammed Imran (Sports Sec.)' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Banner */}
      <div className="bg-[#181a3d] text-white pt-10 pb-12 px-4 sm:px-8 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">
            Vibrant Student Experience &bull; 22-Acre Campus
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Campus Life at SIT Kalaburagi
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Experience a rich blend of tech hackathons, cultural festivals, student governance, sports tournaments, and eco-friendly hostel living.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
        
        {/* Authentic Campus Life Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Student Council Investiture */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
            <div className="h-64 sm:h-72 overflow-hidden bg-slate-900 relative">
              <img
                src="/images/student-self-governance.jpg"
                alt="SIT Student Self Governance Council Executive Body"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-yellow-400 text-blue-950 text-xs font-black px-3 py-1 rounded-full shadow">
                Student Self Governance Council
              </div>
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-lg font-black text-[#181a3d]">Pioneering Student Self Governance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Student Principal, Student Director, Dean Academics, Toastmasters VP, and Club Presidents leading technical symposiums and campus administration.
              </p>
            </div>
          </div>

          {/* Engineers Day & Cultural Heritage */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
            <div className="h-64 sm:h-72 overflow-hidden bg-slate-900 relative">
              <img
                src="/images/engineers-day-celebration.jpg"
                alt="Engineers Day and Academic Commemoration at SIT"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full shadow">
                Engineers Day Celebration
              </div>
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-lg font-black text-[#181a3d]">Campus Heritage & Engineering Honors</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Faculty leadership and student engineers assembled at the main academic quadrangle honoring Sir M. Visvesvaraya and celebrating academic milestones.
              </p>
            </div>
          </div>

        </div>

        {/* Student Clubs Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#181a3d]">
              Active Student Clubs & Societies
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Driven entirely by student self-governance to cultivate leadership and passions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{club.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{club.desc}</p>
                <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                  Student Convener: <strong className="text-slate-800">{club.lead}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hostel & Transport Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#181a3d]">Hostel & Dining Infrastructure</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              Separate secure residential hostels for boys and girls on campus. High-speed Wi-Fi, 24/7 solar hot water, CCTV surveillance, recreation rooms, and a hygienic vegetarian mess providing wholesome nutritious regional meals.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 pt-2">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 24/7 Security</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> High-Speed Wi-Fi</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Solar Water</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> RO Purified Water</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Bus className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#181a3d]">Transportation Fleet</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              A fleet of 10+ college buses covers every corner of Kalaburagi city, Shahabad, Wadi, Sedam, and Aland. Experienced drivers and GPS tracking ensure convenient, safe commuting for day scholars.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 pt-2">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Gulbarga City Routes</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Shahabad & Wadi</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> GPS Tracked Buses</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Concessional Passes</div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
