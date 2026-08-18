import React from 'react';
import { Building2, Trees, ShieldCheck, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export const AboutPage: React.FC = () => {
  const { setActivePage, openAdmissionModal, openGalleryModal } = useCollege();

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Banner */}
      <div className="bg-[#181a3d] text-white pt-10 pb-12 px-4 sm:px-8 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">
            A Unit of SGI &bull; Established 2011
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            About Shanta Institute of Technology Kalaburagi
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Empowering budding engineers with technical, entrepreneurial, and research skills amidst a serene 22-acre eco-friendly campus in Gulbarga.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4 text-slate-700 text-sm leading-relaxed text-justify">
            <h2 className="text-2xl sm:text-3xl font-black text-[#181a3d]">
              Genesis & Academic Heritage
            </h2>
            <p>
              The Shanta Institute of Technology, popularly known as SIT, was established in the year 2011 under the aegis of the Shetty Group of Institutions (SGI) to empower budding engineers with technical and entrepreneurial knowledge and skills, and to assist them in having a holistic growth.
            </p>
            <p>
              Located just on the other side of the Ring Road, on the Gulbarga-Shahabad Highway (NH 150), the college nestles amidst sprawling 22 acres of lush greenery with a picturesque hilly backdrop. The campus breathes fresh air of nature and has vast green pastures, completely free from pollution and litter.
            </p>
            <p>
              The ambience is ideal for learning, research, and holistic development. With state-of-the-art laboratories, a vibrant incubation hub, and dynamic student self-governance, SIT has evolved into a premier destination for technical education in the Kalyana Karnataka region.
            </p>
          </div>

          <div 
            onClick={() => openGalleryModal('photo-college-inside')}
            className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 cursor-pointer group relative"
            title="Click to view inside campus photo in gallery"
          >
            <img 
              src="/images/campus-building-lawn.jpg" 
              alt="Shanta Institute of Technology Campus & Green Courtyard" 
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-3 left-3 bg-blue-950/90 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl border border-blue-800 backdrop-blur-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>College inside photo.webp</span>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#181a3d]">Institute Vision</h3>
            <p className="text-slate-700 text-sm leading-relaxed text-justify">
              To be a premier institution in engineering and technical education, nurturing competent professionals with strong ethical values, innovative mindset, and entrepreneurial skills to serve the evolving needs of industry and society.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#181a3d]">Institute Mission</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Provide quality technical education through outcome-based and project-based pedagogy.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Foster innovation, research, and entrepreneurship in partnership with global industry leaders.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Cultivate leadership, team spirit, and ethical responsibility via Student Self-Governance.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Core Campus Facts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-xs">
            <div className="text-3xl font-black text-orange-600">22 Acres</div>
            <div className="text-xs text-slate-600 mt-1 font-medium">Lush Eco Campus</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-xs">
            <div className="text-3xl font-black text-indigo-900">2011</div>
            <div className="text-xs text-slate-600 mt-1 font-medium">Year of Inception</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-xs">
            <div className="text-3xl font-black text-emerald-600">6 B.E.</div>
            <div className="text-xs text-slate-600 mt-1 font-medium">Engg Branches</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-xs">
            <div className="text-3xl font-black text-amber-600">100%</div>
            <div className="text-xs text-slate-600 mt-1 font-medium">VTU & AICTE Approved</div>
          </div>
        </div>

      </div>

    </div>
  );
};
