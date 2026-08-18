import React from 'react';
import { 
  BookOpen, 
  MonitorPlay, 
  FlaskConical, 
  Bus, 
  Building2, 
  Trophy, 
  Lightbulb, 
  ChevronRight,
  Clock,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';
import { Facility } from '../../types';

export const FacilitiesSection: React.FC = () => {
  const { facilities, selectedFacility, setSelectedFacility, setActivePage } = useCollege();

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
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with >>>> Chevrons from Screenshot */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-1 text-[#ea580c] mb-1">
            <span className="text-xl font-black">&gt;&gt;&gt;&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#181a3d] tracking-tight">
            FACILITIES
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
            State-of-the-art infrastructure across 22 acres designed to enrich academic and campus life.
          </p>
        </div>

        {/* Facilities Grid matching layout in Screenshot 2026-08-18 123815 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden group hover:-translate-y-1"
            >
              {/* Orange Arch Header with Vector Icon matching Screenshot */}
              <div className="w-full pt-8 pb-4 flex flex-col items-center relative overflow-hidden">
                <div className="w-24 h-24 rounded-full bg-gradient-to-b from-orange-500 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {getFacilityIcon(item.icon)}
                </div>
              </div>

              {/* Title */}
              <div className="px-6 pb-2">
                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h3>
              </div>

              {/* Short snippet matching Screenshot text */}
              <div className="px-6 pb-4 flex-1">
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* "Read More >" exact Link from Screenshot */}
              <div className="w-full border-t border-slate-100 py-3 bg-slate-50/50">
                <button
                  id={`facility-readmore-${item.id}`}
                  onClick={() => setSelectedFacility(item)}
                  className="text-xs font-bold text-slate-800 hover:text-orange-600 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read More</span>
                  <ChevronRight className="w-3.5 h-3.5 text-orange-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Facilities Row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {facilities.slice(4).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedFacility(item)}
              className="bg-slate-50 hover:bg-orange-50/60 p-5 rounded-2xl border border-slate-200/80 transition-all cursor-pointer flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                {getFacilityIcon(item.icon)}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-700">{item.name}</h4>
                <p className="text-xs text-slate-600 line-clamp-2 mt-0.5">{item.tagline}</p>
                <div className="text-[11px] font-bold text-orange-600 flex items-center gap-0.5 mt-1">
                  <span>Explore facility</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 p-6 sm:p-8 space-y-6">
            
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-md">
                  {getFacilityIcon(selectedFacility.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">{selectedFacility.name}</h3>
                  <p className="text-xs font-semibold text-orange-600">{selectedFacility.tagline}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedFacility(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Detailed Overview</h4>
                <p className="text-slate-600 leading-relaxed text-justify">{selectedFacility.description}</p>
              </div>

              {(selectedFacility.timing || selectedFacility.location) && (
                <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                  {selectedFacility.timing && (
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>{selectedFacility.timing}</span>
                    </div>
                  )}
                  {selectedFacility.location && (
                    <div className="flex items-center gap-2 text-slate-700">
                      <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>{selectedFacility.location}</span>
                    </div>
                  )}
                </div>
              )}

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Key Highlights & Features</h4>
                <div className="space-y-2">
                  {selectedFacility.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedFacility(null)}
                className="px-5 py-2 bg-indigo-900 hover:bg-indigo-950 text-white rounded-xl text-xs font-bold transition-colors"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
