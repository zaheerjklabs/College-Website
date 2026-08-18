import React from 'react';
import { 
  BookOpen, 
  MonitorPlay, 
  FlaskConical, 
  Bus, 
  Building2, 
  Trophy, 
  Lightbulb, 
  Clock, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export const FacilitiesPage: React.FC = () => {
  const { facilities, setSelectedFacility } = useCollege();

  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-8 h-8 text-white" />;
      case 'MonitorPlay': return <MonitorPlay className="w-8 h-8 text-white" />;
      case 'FlaskConical': return <FlaskConical className="w-8 h-8 text-white" />;
      case 'Bus': return <Bus className="w-8 h-8 text-white" />;
      case 'Building2': return <Building2 className="w-8 h-8 text-white" />;
      case 'Trophy': return <Trophy className="w-8 h-8 text-white" />;
      case 'Lightbulb': return <Lightbulb className="w-8 h-8 text-white" />;
      default: return <BookOpen className="w-8 h-8 text-white" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Banner */}
      <div className="bg-[#181a3d] text-white pt-10 pb-12 px-4 sm:px-8 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">
            22-Acre State-of-the-Art Infrastructure
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Campus Infrastructure & Facilities
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            World-class amenities built to foster innovative thinking, research, athletic wellness, and collaborative engineering excellence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8">
        
        {/* Smart Seminar Hall & Academic Block Visual Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-950 text-xs font-black">
              <Building2 className="w-3.5 h-3.5 text-orange-600" />
              <span>KUSNOOR CAMPUS SMART INFRASTRUCTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#181a3d]">
              Smart Classrooms & Air-Conditioned Seminar Halls
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              Our campus on SH 51 Kusnoor features modern tiered lecture theatres and seminar halls equipped with ceiling projectors, motorized screens, digital podiums, high-speed Wi-Fi, and acoustic sound systems for symposiums and masterclasses.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 pt-1">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 150-Seat Tiered Capacity</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Live Interactive Video Feeds</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Centralised Air-Conditioning</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Ergonomic Seating</div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-900 relative aspect-16/10 group">
            <img
              src="/images/classroom-seminar-session.jpg"
              alt="Smart Classroom and Technical Seminar Session at Shanta Institute of Technology Kusnoor Campus"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-3 left-3 bg-blue-950/90 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl backdrop-blur-xs border border-blue-800 flex items-center gap-1.5">
              <span>Shanta Institute of Technology &bull; Kusnoor, Kalaburagi</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center shadow-md shrink-0">
                    {getFacilityIcon(fac.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{fac.name}</h3>
                    <p className="text-xs font-semibold text-orange-600">{fac.tagline}</p>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
                  {fac.description}
                </p>

                {(fac.timing || fac.location) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
                    {fac.timing && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                        <span>{fac.timing}</span>
                      </div>
                    )}
                    {fac.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                        <span>{fac.location}</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-1.5 pt-2">
                  {fac.features.map((ft, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{ft}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedFacility(fac)}
                  className="text-xs font-bold text-indigo-700 hover:text-indigo-900"
                >
                  View Details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
