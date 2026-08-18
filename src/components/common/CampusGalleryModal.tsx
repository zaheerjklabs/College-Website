import React, { useState } from 'react';
import { X, Image as ImageIcon, Award, Trophy, Users, Building, Sparkles, ExternalLink, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { COLLEGE_PHOTOS, CollegePhoto } from '../../data/collegeImages';

interface CampusGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPhotoId?: string;
}

export const CampusGalleryModal: React.FC<CampusGalleryModalProps> = ({
  isOpen,
  onClose,
  initialPhotoId
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<CollegePhoto | null>(
    COLLEGE_PHOTOS.find(p => p.id === initialPhotoId) || COLLEGE_PHOTOS[0]
  );

  if (!isOpen) return null;

  const categories = ['All', 'Achievement', 'Campus', 'Governance', 'Innovation', 'Hackathon'];

  const filteredPhotos = selectedCategory === 'All'
    ? COLLEGE_PHOTOS
    : COLLEGE_PHOTOS.filter(p => p.category === selectedCategory);

  const currentIndex = COLLEGE_PHOTOS.findIndex(p => p.id === activePhoto?.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % COLLEGE_PHOTOS.length;
    setActivePhoto(COLLEGE_PHOTOS[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + COLLEGE_PHOTOS.length) % COLLEGE_PHOTOS.length;
    setActivePhoto(COLLEGE_PHOTOS[prevIdx]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden border border-slate-200 flex flex-col">
        
        {/* Header Bar */}
        <div className="bg-blue-950 text-white px-6 py-4 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-yellow-400 text-blue-950 flex items-center justify-center font-black">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                SIT Campus Life & Achievements Gallery
              </h2>
              <p className="text-xs text-blue-200">
                Official moments, competition laureates, and campus landmarks
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-blue-900 transition-colors"
            aria-label="Close Gallery"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-bold text-slate-500 uppercase mr-1">Filter:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modal Main Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Active Featured Image Viewer */}
          {activePhoto && (
            <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12">
              
              {/* Photo Display (7 cols) */}
              <div className="lg:col-span-7 relative bg-black flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover max-h-[440px]"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-xs transition-colors border border-white/20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-xs transition-colors border border-white/20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-yellow-400 text-blue-950 text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg">
                  {activePhoto.prizeOrBadge || activePhoto.category}
                </div>
              </div>

              {/* Photo Details (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-900 text-white flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="text-[11px] font-bold text-yellow-400 uppercase tracking-wider">
                    {activePhoto.eventOrPlace}
                  </div>
                  <h3 className="text-xl font-black text-white leading-snug">
                    {activePhoto.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activePhoto.caption}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs text-slate-200 space-y-2">
                    <p className="leading-relaxed">{activePhoto.description}</p>
                    {activePhoto.cashPrize && (
                      <div className="text-yellow-400 font-bold flex items-center gap-1.5 pt-1 border-t border-slate-700">
                        <Trophy className="w-4 h-4 text-yellow-400" />
                        <span>Award: {activePhoto.cashPrize}</span>
                      </div>
                    )}
                  </div>

                  {activePhoto.teamOrParticipants && (
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold text-slate-400 uppercase">Key Participants / Leads:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {activePhoto.teamOrParticipants.map((name, i) => (
                          <span key={i} className="px-2.5 py-1 bg-slate-800 text-blue-200 rounded-lg text-[11px] font-medium border border-slate-700">
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-[11px] text-slate-400 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span>Uploaded Asset: <strong>{activePhoto.tag}</strong></span>
                  <span>{currentIndex + 1} of {COLLEGE_PHOTOS.length}</span>
                </div>
              </div>

            </div>
          )}

          {/* Thumbnails Grid */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
              All Photo Moments ({filteredPhotos.length})
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {filteredPhotos.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setActivePhoto(photo)}
                  className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all p-1 bg-white hover:shadow-md ${
                    activePhoto?.id === photo.id
                      ? 'border-blue-900 shadow-md ring-2 ring-blue-900/20'
                      : 'border-slate-200 opacity-80 hover:opacity-100 hover:border-slate-400'
                  }`}
                >
                  <div className="aspect-4/3 rounded-xl overflow-hidden bg-slate-900 relative">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 inset-x-1 bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded truncate text-center backdrop-blur-xs">
                      {photo.tag}
                    </div>
                  </div>
                  <div className="px-1 py-1.5">
                    <div className="text-[11px] font-bold text-slate-900 truncate">{photo.title}</div>
                    <div className="text-[10px] text-slate-500 truncate">{photo.prizeOrBadge}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-medium">Shanta Institute of Technology &bull; Gulbarga</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-full transition-colors"
          >
            Close Gallery
          </button>
        </div>

      </div>
    </div>
  );
};
