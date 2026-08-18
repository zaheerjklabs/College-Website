import React from 'react';
import { Trophy, Award, Medal, Users, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';
import { AchievementItem } from '../../types';

export const AchievementsSection: React.FC = () => {
  const { achievements, selectedAchievement, setSelectedAchievement, setActivePage } = useCollege();

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      
      {/* Large Watermark Text from Screenshot 2026-08-18 123626 */}
      <div className="absolute top-8 inset-x-0 flex justify-center pointer-events-none select-none opacity-[0.04]">
        <span className="text-7xl sm:text-9xl font-black tracking-widest text-slate-900">
          Achievements
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Hall of Fame & Awards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#181a3d] tracking-tight">
            Students Achievements
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Celebrating Excellence in Academics, Innovation, Sports, and Leadership.
          </p>
        </div>

        {/* 3 Main Achievement Cards matching Screenshot 2026-08-18 123626 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {achievements.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedAchievement(item)}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-slate-900 border border-slate-200/40 hover:-translate-y-1.5 flex flex-col justify-end min-h-[380px] sm:min-h-[420px]"
            >
              {/* Photo Background */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-80"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

              {/* Top Badge Pill from Screenshot */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/90 backdrop-blur-md text-slate-900 text-xs font-black shadow-lg">
                  <Trophy className="w-3.5 h-3.5 text-amber-900" />
                  <span>{item.badge}</span>
                </span>
              </div>

              {/* Bottom Details Content */}
              <div className="relative z-10 p-6 space-y-2 text-white">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-medium line-clamp-2">
                  {item.subtitle} &bull; {item.prize}
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-amber-400 font-semibold">
                  <span>{item.department}</span>
                  <span className="flex items-center gap-1 text-white group-hover:translate-x-1 transition-transform">
                    View Details <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Achievements CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setActivePage('achievements')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-orange-50 hover:text-orange-600 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200 transition-all"
          >
            <span>View All Student Awards, Patents & Innovation Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Achievement Detail Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 p-6 sm:p-8 space-y-6">
            
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                  {selectedAchievement.badge}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">{selectedAchievement.title}</h3>
                <p className="text-sm font-semibold text-orange-600">{selectedAchievement.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedAchievement(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-inner bg-slate-900 h-64 relative">
              <img
                src={selectedAchievement.imageUrl}
                alt={selectedAchievement.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs text-white">
                Prize: <strong className="text-amber-400">{selectedAchievement.prize}</strong>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Event & Organizer</h4>
                <p className="text-slate-600">{selectedAchievement.event} &bull; Organized by {selectedAchievement.organizer}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Project & Innovation Summary</h4>
                <p className="text-slate-600 leading-relaxed">{selectedAchievement.description}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-indigo-600" />
                  <span>Winning Student Team</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedAchievement.team.map((member, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-800">
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedAchievement(null)}
                className="px-5 py-2.5 bg-indigo-900 hover:bg-indigo-950 text-white rounded-xl text-xs font-bold transition-colors"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
