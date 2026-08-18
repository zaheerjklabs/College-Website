import React from 'react';
import { Trophy, Award, Medal, Users, ArrowRight, Sparkles, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export const AchievementsPage: React.FC = () => {
  const { achievements, setSelectedAchievement, openGalleryModal } = useCollege();

  const photoMapping: Record<string, string> = {
    'ach-1': 'photo-robo-soccer-runnerup',
    'ach-2': 'photo-comed-kares-ui',
    'ach-3': 'photo-vtu-bootcamp',
    'ach-4': 'photo-inex-expo',
    'ach-5': 'photo-student-governance',
    'ach-6': 'photo-telecom-day'
  };

  const tagMapping: Record<string, string> = {
    'ach-1': 'runner up in technova.webp',
    'ach-2': '1st prize in ui design at comed karees.webp',
    'ach-3': '2nd rank in vtu bootamp.webp',
    'ach-4': 'about innovation center.webp',
    'ach-5': 'student self governence.webp',
    'ach-6': 'telecom-day.webp'
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Banner */}
      <div className="bg-blue-950 text-white pt-10 pb-12 px-4 sm:px-8 border-b-4 border-yellow-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400 text-blue-950 text-xs font-black">
              <Trophy className="w-4 h-4" />
              <span>HONORING STUDENT EXCELLENCE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white">
              Student Achievements & Laurels
            </h1>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
              Explore the remarkable championship trophies, cash awards, and national recognitions won by students of Shanta Institute of Technology.
            </p>
          </div>

          <button
            onClick={() => openGalleryModal()}
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-950 px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg transition-all"
          >
            <ImageIcon className="w-4 h-4" />
            <span>Open High-Res Photo Gallery</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10">
        
        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                const photoId = photoMapping[item.id];
                if (photoId) {
                  openGalleryModal(photoId);
                } else {
                  setSelectedAchievement(item);
                }
              }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group hover:-translate-y-1 hover:border-blue-300"
            >
              <div className="h-56 relative overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-yellow-400 text-blue-950 text-xs font-black px-3 py-1 rounded-full shadow">
                  {item.badge}
                </div>
                <div className="absolute bottom-3 right-3 bg-blue-950/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-xs border border-blue-800">
                  {item.prize}
                </div>
                {tagMapping[item.id] && (
                  <div className="absolute bottom-3 left-3 bg-black/75 text-white text-[9px] font-mono px-2 py-0.5 rounded backdrop-blur-xs">
                    {tagMapping[item.id]}
                  </div>
                )}
              </div>

              <div className="p-6 space-y-3">
                <div className="text-xs font-bold text-blue-900 uppercase">{item.department}</div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium truncate max-w-[180px]">Event: {item.event}</span>
                  <span className="font-bold text-blue-900 flex items-center gap-1">
                    View Photo <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
