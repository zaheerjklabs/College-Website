import React from 'react';
import { Building2, Lightbulb, Compass, Laptop, ArrowRight } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export const PedagogySection: React.FC = () => {
  const { setActivePage } = useCollege();

  const pedagogyPillars = [
    {
      title: 'Undergraduate',
      icon: <Building2 className="w-12 h-12 text-[#181a3d]" strokeWidth={1.5} />,
      content: 'Our engineering college prioritizes delivering high-quality undergraduate education, emphasizing a robust curriculum, hands-on learning experiences, and cutting-edge faculty ensures a nurturing environment, fostering critical thinking and problem-solving skills essential for future engineers. We take pride in preparing students to meet industry demands and contribute meaningfully to the field of engineering.'
    },
    {
      title: 'Research & Development',
      icon: <Lightbulb className="w-12 h-12 text-[#181a3d]" strokeWidth={1.5} />,
      content: 'Embarking on a journey in research and development, our institution is committed to fostering innovation and exploration. As we initiate this endeavor, our focus is on creating a dynamic R&D environment that encourages collaboration, curiosity, and breakthrough discoveries. By investing in state-of-the-art labs, interdisciplinary projects, and partnerships with industry leaders, we aim to lay the foundation for groundbreaking research that pushes the boundaries of technology.'
    },
    {
      title: 'XPLORE',
      icon: <Compass className="w-12 h-12 text-[#181a3d]" strokeWidth={1.5} />,
      content: 'In our college, we actively encourage students to engage in competitions that showcase their prowess in new technologies. Through participation in various tech challenges and hackathons, students have the opportunity to apply classroom knowledge, foster creativity, and collaborate on innovative solutions. This commitment to competitive exploration not only hones their skills but also instills a competitive spirit, preparing them for emerging technologies.'
    },
    {
      title: 'Project Based Learning',
      icon: <Laptop className="w-12 h-12 text-[#181a3d]" strokeWidth={1.5} />,
      content: 'Project-based learning at our college is designed to provide students with a hands-on and immersive educational experience. By engaging in real-world projects, students gain practical skills, problem-solving abilities, and a deeper understanding of theoretical concepts. Through project-based learning, we aim to equip students with the practical knowledge and confidence needed for success in their future endeavors.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with >>>> Chevrons from Screenshot */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-1 text-[#ea580c] mb-1">
            <span className="text-xl font-black">&gt;&gt;&gt;&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#181a3d] tracking-tight">
            COURSES AND PEDAGOGY
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* 4 Pillars Grid matching Screenshot 2026-08-18 123726 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {pedagogyPillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4 group">
              {/* Icon Container */}
              <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-200/80 group-hover:bg-orange-50 group-hover:border-orange-200 transition-all duration-300 shadow-sm">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#181a3d] group-hover:text-orange-600 transition-colors min-h-[32px] flex items-center justify-center">
                {pillar.title}
              </h3>

              {/* Body Text */}
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed text-justify">
                {pillar.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
