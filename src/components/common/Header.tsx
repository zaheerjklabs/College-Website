import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Facebook, 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X, 
  GraduationCap, 
  BookOpen, 
  UserCheck, 
  Sparkles,
  Search
} from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';
import { Logo } from './Logo';
import { PageId } from '../../types';

export const Header: React.FC = () => {
  const { 
    activePage, 
    setActivePage, 
    navigateToDepartment, 
    departments,
    openAdmissionModal,
    studentUser,
    facultyUser,
    isStudentLoggedIn,
    isFacultyLoggedIn,
    openGalleryModal
  } = useCollege();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNavClick = (page: PageId) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDeptClick = (deptId: string) => {
    navigateToDepartment(deptId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all">
      {/* 1. Exact Dark Blue/Navy Topbar */}
      <div className="bg-blue-950 text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
          {/* Left contact info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <a 
              href="tel:+918023900901" 
              className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-yellow-400" />
              <span>+91 80239 00901 / 7676522231</span>
            </a>
            <a 
              href="mailto:info@sitgulbarga.org" 
              className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-yellow-400" />
              <span>info@sitgulbarga.org</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-yellow-400" />
              <span>Shanta Education Hub, Gulbarga (Shahabad NH 150)</span>
            </div>
          </div>

          {/* Right quick shortcuts & social icons */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Quick Portal Switchers */}
            <button 
              id="header-student-portal-btn"
              onClick={() => handleNavClick('student-portal')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                isStudentLoggedIn 
                  ? 'bg-emerald-600 text-white shadow-sm' 
                  : 'bg-blue-900 text-blue-100 hover:bg-blue-800 hover:text-white border border-blue-700/50'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-yellow-400" />
              <span>{isStudentLoggedIn ? `Portal: ${studentUser?.name.split(' ')[0]}` : 'Student Portal'}</span>
            </button>

            <button 
              id="header-faculty-cms-btn"
              onClick={() => handleNavClick('faculty-cms')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                isFacultyLoggedIn 
                  ? 'bg-yellow-500 text-blue-950 shadow-sm' 
                  : 'bg-blue-900 text-blue-100 hover:bg-blue-800 hover:text-white border border-blue-700/50'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 text-yellow-400" />
              <span>{isFacultyLoggedIn ? `CMS: ${facultyUser?.name.split(' ')[1] || 'Faculty'}` : 'Faculty CMS'}</span>
            </button>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 text-slate-300 border-l border-blue-800 pl-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-blue-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-blue-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* College Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="cursor-pointer group hover:opacity-95 transition-opacity"
        >
          <Logo size="md" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 text-[13.5px] font-medium text-slate-700">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              activePage === 'home' ? 'text-blue-900 font-bold bg-blue-50' : 'hover:text-blue-900 hover:bg-slate-50'
            }`}
          >
            Home
          </button>

          {/* About SITK Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('about')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors ${
                activePage === 'about' ? 'text-blue-900 font-bold bg-blue-50' : 'hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              <span>About Institute</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>
            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 w-60 bg-white rounded-2xl shadow-xl border border-slate-200 py-2.5 z-50 animate-in fade-in slide-in-from-top-1">
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-blue-50 hover:text-blue-900 text-slate-700 font-medium"
                >
                  Overview & Vision 2011
                </button>
                <button
                  onClick={() => handleNavClick('student-governance')}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-blue-50 hover:text-blue-900 text-slate-700 font-medium"
                >
                  Student Self Governance
                </button>
                <button
                  onClick={() => handleNavClick('facilities')}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-blue-50 hover:text-blue-900 text-slate-700 font-medium"
                >
                  Campus Facilities & 22-Acre Pasture
                </button>
                <button
                  onClick={() => handleNavClick('achievements')}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-blue-50 hover:text-blue-900 text-slate-700 font-medium"
                >
                  Student Achievements & Laurels
                </button>
              </div>
            )}
          </div>

          {/* Admissions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('admissions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('admissions')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors ${
                activePage === 'admissions' ? 'text-blue-900 font-bold bg-blue-50' : 'hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              <span>Admissions</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>
            {activeDropdown === 'admissions' && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-2.5 z-50">
                <button
                  onClick={() => handleNavClick('admissions')}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-blue-50 hover:text-blue-900 text-slate-700 font-semibold"
                >
                  KCET Code E227 & Eligibility
                </button>
                <button
                  onClick={() => { setActiveDropdown(null); openAdmissionModal(); }}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-blue-50 text-blue-900 font-bold flex items-center justify-between"
                >
                  <span>Online Admission Form</span>
                  <span className="text-[10px] bg-yellow-400 text-blue-950 px-1.5 py-0.5 rounded font-black">2026</span>
                </button>
                <button
                  onClick={() => handleNavClick('admissions')}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-blue-50 hover:text-blue-900 text-slate-700 font-medium"
                >
                  Fee Structure & Scholarships
                </button>
              </div>
            )}
          </div>

          {/* Academics Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('academics')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('academics')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors ${
                activePage === 'academics' || activePage === 'department' || activePage === 'faculty-directory' ? 'text-blue-900 font-bold bg-blue-50' : 'hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              <span>Departments</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>
            {activeDropdown === 'academics' && (
              <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 py-2.5 z-50">
                <div className="px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Engineering Departments
                </div>
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => handleDeptClick(dept.id)}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-blue-50 hover:text-blue-900 text-slate-700 flex items-center justify-between font-medium"
                  >
                    <span>{dept.name}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {dept.shortCode}
                    </span>
                  </button>
                ))}
                <div className="border-t border-slate-100 my-1"></div>
                <button
                  onClick={() => handleNavClick('faculty-directory')}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-blue-50 text-blue-900 font-semibold"
                >
                  Faculty Directory & HODs
                </button>
              </div>
            )}
          </div>

          {/* Hands on Learning */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('hands-on')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('hands-on-learning')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors ${
                activePage === 'hands-on-learning' ? 'text-blue-900 font-bold bg-blue-50' : 'hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              <span>Hands-on</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>
            {activeDropdown === 'hands-on' && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-2.5 z-50">
                <button
                  onClick={() => handleNavClick('hands-on-learning')}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-blue-50 hover:text-blue-900 text-slate-700 font-medium"
                >
                  Project Based Learning (PBL)
                </button>
                <button
                  onClick={() => handleNavClick('hands-on-learning')}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-blue-50 hover:text-blue-900 text-slate-700 font-medium"
                >
                  XPLORE Tech Challenges
                </button>
                <button
                  onClick={() => handleNavClick('facilities')}
                  className="w-full text-left px-4 py-2 text-xs hover:bg-blue-50 hover:text-blue-900 text-slate-700 font-medium"
                >
                  Incubation & Patent Cell
                </button>
              </div>
            )}
          </div>

          {/* Placements & CDC */}
          <button
            onClick={() => handleNavClick('career-design')}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              activePage === 'career-design' || activePage === 'placements' ? 'text-blue-900 font-bold bg-blue-50' : 'hover:text-blue-900 hover:bg-slate-50'
            }`}
          >
            Placements
          </button>

          {/* Campus Life */}
          <button
            onClick={() => handleNavClick('campus-life')}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              activePage === 'campus-life' ? 'text-blue-900 font-bold bg-blue-50' : 'hover:text-blue-900 hover:bg-slate-50'
            }`}
          >
            Campus Life
          </button>

          {/* Alumni */}
          <button
            onClick={() => handleNavClick('alumni')}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              activePage === 'alumni' ? 'text-blue-900 font-bold bg-blue-50' : 'hover:text-blue-900 hover:bg-slate-50'
            }`}
          >
            Alumni
          </button>

          {/* IQAC */}
          <button
            onClick={() => handleNavClick('iqac')}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              activePage === 'iqac' ? 'text-blue-900 font-bold bg-blue-50' : 'hover:text-blue-900 hover:bg-slate-50'
            }`}
          >
            IQAC
          </button>

          {/* Photo Gallery */}
          <button
            onClick={() => openGalleryModal()}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-blue-950 font-bold bg-yellow-400/30 hover:bg-yellow-400/60 border border-yellow-400/50 transition-all text-xs"
            title="View full campus & achievements photo gallery"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-900" />
            <span>Gallery</span>
          </button>
        </nav>

        {/* Action Button: Admission Enquiry */}
        <div className="flex items-center gap-3">
          <button
            id="main-admission-enquiry-btn"
            onClick={openAdmissionModal}
            className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 active:scale-95 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            <span>Admission Enquiry</span>
            <ArrowRight className="w-4 h-4 text-yellow-400" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              onClick={() => handleNavClick('student-portal')}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-md bg-indigo-50 text-indigo-800 text-xs font-semibold"
            >
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <span>Student Portal</span>
            </button>
            <button
              onClick={() => handleNavClick('faculty-cms')}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-md bg-orange-50 text-orange-800 text-xs font-semibold"
            >
              <UserCheck className="w-4 h-4 text-orange-600" />
              <span>Faculty CMS</span>
            </button>
          </div>

          <div className="space-y-1">
            <button 
              onClick={() => handleNavClick('home')} 
              className="w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-orange-600"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-orange-600"
            >
              About SITK & Campus
            </button>
            <button 
              onClick={() => handleNavClick('student-governance')} 
              className="w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-orange-600"
            >
              Student Self Governance
            </button>
            
            <div className="pt-2 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
              Departments
            </div>
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => handleDeptClick(dept.id)}
                className="w-full text-left py-1.5 pl-3 text-xs font-medium text-slate-600 hover:text-orange-600 flex items-center justify-between"
              >
                <span>{dept.name}</span>
                <span className="text-[10px] text-slate-400">{dept.shortCode}</span>
              </button>
            ))}

            <button 
              onClick={() => handleNavClick('faculty-directory')} 
              className="w-full text-left py-2 text-sm font-medium text-indigo-700 hover:text-indigo-800"
            >
              Faculty Directory
            </button>
            <button 
              onClick={() => handleNavClick('admissions')} 
              className="w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-orange-600"
            >
              Admissions (KCET E227)
            </button>
            <button 
              onClick={() => handleNavClick('hands-on-learning')} 
              className="w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-orange-600"
            >
              Hands on Learning (PBL & Xplore)
            </button>
            <button 
              onClick={() => handleNavClick('career-design')} 
              className="w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-orange-600"
            >
              Career Design Center & Placements
            </button>
            <button 
              onClick={() => handleNavClick('facilities')} 
              className="w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-orange-600"
            >
              Campus Facilities
            </button>
            <button 
              onClick={() => handleNavClick('achievements')} 
              className="w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-orange-600"
            >
              Student Achievements
            </button>
            <button 
              onClick={() => handleNavClick('alumni')} 
              className="w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-orange-600"
            >
              Alumni Association
            </button>
            <button 
              onClick={() => handleNavClick('iqac')} 
              className="w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-orange-600"
            >
              IQAC Accreditation
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); openGalleryModal(); }} 
              className="w-full text-left py-2.5 px-3 rounded-xl text-sm font-bold bg-yellow-400 text-blue-950 flex items-center justify-between shadow-xs mt-2"
            >
              <span>Campus & Laurels Photo Gallery</span>
              <Sparkles className="w-4 h-4 text-blue-950" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
