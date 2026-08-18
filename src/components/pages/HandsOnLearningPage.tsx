import React from 'react';
import { Laptop, Cpu, Sparkles, CheckCircle2, Download, Rocket, Compass, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export const HandsOnLearningPage: React.FC = () => {
  const { showToast, openGalleryModal } = useCollege();

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Banner */}
      <div className="bg-blue-950 text-white pt-10 pb-12 px-4 sm:px-8 border-b-4 border-yellow-400">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest">
            Experiential Pedagogy &bull; SGI Innovation Hub
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Hands-on & Project Based Learning (PBL)
          </h1>
          <p className="text-blue-100 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Transitioning engineering students from passive textbook absorption to active innovators building production-grade software, robotics hardware, and smart energy prototypes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
        
        {/* Featured Innovation Center Showcase with about innovation center.webp */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-950 text-xs font-black">
              <Sparkles className="w-3.5 h-3.5 text-blue-900" />
              <span>SIT INNOVATION & INCUBATION PAVILION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-blue-950">
              India International Innovation & Invention Expo (INEX)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              Our multidisciplinary student teams represent SIT at national and international invention exhibitions, showcasing patent-pending agricultural telemetry devices, smart healthcare sensors, and robotic mobility platforms.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => openGalleryModal('photo-inex-expo')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition-all shadow-sm"
              >
                <ImageIcon className="w-4 h-4" />
                <span>View INEX Delegation Photo</span>
              </button>
            </div>
          </div>

          <div 
            onClick={() => openGalleryModal('photo-inex-expo')}
            className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-900 cursor-pointer group relative aspect-16/10"
            title="Click to view full photo in gallery"
          >
            <img
              src="/images/inex-expo-award.jpg"
              alt="SIT Innovation Delegation at INEX India International Expo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-3 left-3 bg-blue-950/90 text-white text-[11px] font-bold px-3 py-1 rounded-xl backdrop-blur-xs border border-blue-800 flex items-center gap-1.5">
              <span>about innovation center.webp</span>
            </div>
          </div>
        </div>

        {/* Incubation & R&D Strategic Cell Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div 
            onClick={() => openGalleryModal('photo-rnd-discussion')}
            className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-900 cursor-pointer group relative aspect-16/10 order-2 lg:order-1"
            title="Click to view full photo in gallery"
          >
            <img
              src="/images/rnd-team-discussion-dr-hegde.jpg"
              alt="SITK R&D team discussion with Dr. S Hegde"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-3 left-3 bg-blue-950/90 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl backdrop-blur-xs border border-blue-800 flex items-center gap-1.5">
              <span>SITK R&D Strategic Consultation &bull; Dr. S. Hegde</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-black">
              <Rocket className="w-3.5 h-3.5 text-emerald-800" />
              <span>SPONSORED RESEARCH & GRANTS CELL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-blue-950">
              Institutional R&D & Faculty Mentorship
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              The Research & Development Cell at SIT regularly convenes with eminent academic researchers and technical consultants including <strong>Dr. S. Hegde</strong> to spearhead sponsored research grants, intellectual property rights (IPR) filing, and interdisciplinary engineering laboratories.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 pt-1">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 12+ Published Student Patents</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> VTU Research Center Grants</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> AI & IoT Prototyping Labs</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Industry Sponsored Research</div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-blue-950">Semester PBL Projects</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              Starting from 3rd semester, every engineering student completes a compulsory team project addressing local civic, agricultural, or industrial challenges in Kalyana Karnataka.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 pt-2">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Faculty Mentor Supervision</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Git & DevOps Collaboration</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Industry Evaluation Panels</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-800 flex items-center justify-center font-bold">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-blue-950">XPLORE Tech Challenges</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              In-house internal 36-hour hackathons, robotics obstacle races, and AI code challenges where students showcase prototype solutions and win cash bounties.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 pt-2">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 36-Hour Hackathon Sprints</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Cash Prizes & Seed Funding</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> National Level Team Selection</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-blue-950">Incubation & Patent Cell</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              Provides dedicated workspace, high-end compute servers, 3D printers, and legal filing assistance for patentable research prototypes and student-founded startups.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 pt-2">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free Incubation Space</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Patent Filing Support</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> SGI Angel Seed Network</li>
            </ul>
          </div>

        </div>

        {/* PPT Download Box from Screenshot */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-blue-950">Project Based Learning (PBL) Whitepaper & Guidelines</h3>
            <p className="text-xs text-slate-600 mt-1">
              Download the comprehensive presentation detailing rubric evaluation, rubrics, and industry problem sets.
            </p>
          </div>
          <button
            onClick={() => showToast('Downloading Project Based Learning PPT...', 'info')}
            className="flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold px-6 py-3.5 rounded-full transition-all shadow"
          >
            <Download className="w-4 h-4" />
            <span>Download PBL PPT Presentation</span>
          </button>
        </div>

      </div>

    </div>
  );
};
