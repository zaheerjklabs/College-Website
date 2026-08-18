import React, { useState } from 'react';
import { 
  Laptop, 
  Cpu, 
  Radio, 
  Zap, 
  Building, 
  Wrench, 
  GraduationCap, 
  Users, 
  FlaskConical, 
  Download, 
  FileText, 
  Sparkles, 
  ArrowLeft, 
  Mail, 
  BookOpen, 
  CheckCircle2,
  Calendar,
  Search,
  Filter
} from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export const DepartmentView: React.FC = () => {
  const { 
    selectedDepartmentId, 
    departments, 
    facultyMembers, 
    courseMaterials, 
    announcements,
    setActivePage, 
    openAdmissionModal,
    showToast 
  } = useCollege();

  const [activeTab, setActiveTab] = useState<'overview' | 'labs' | 'faculty' | 'materials' | 'curriculum'>('overview');
  const [materialSearch, setMaterialSearch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState<number | 'all'>('all');

  const currentDept = departments.find(d => d.id === selectedDepartmentId) || departments[0];
  const deptFaculty = facultyMembers.filter(f => f.departmentId === currentDept.id);
  const deptMaterials = courseMaterials.filter(m => m.departmentId === currentDept.id);
  const deptAnnouncements = announcements.filter(a => a.departmentId === currentDept.id || a.departmentId === 'all');

  const filteredMaterials = deptMaterials.filter(mat => {
    const matchesSearch = mat.title.toLowerCase().includes(materialSearch.toLowerCase()) ||
                          mat.subjectCode.toLowerCase().includes(materialSearch.toLowerCase()) ||
                          mat.subjectName.toLowerCase().includes(materialSearch.toLowerCase());
    const matchesSem = selectedSemester === 'all' || mat.semester === selectedSemester;
    return matchesSearch && matchesSem;
  });

  const handleDownload = (title: string) => {
    showToast(`Downloading "${title}". Check your downloads folder.`, 'info');
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-[#181a3d] text-white pt-10 pb-12 px-4 sm:px-8 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto space-y-4">
          
          <button
            onClick={() => setActivePage('home')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider">
                <span>Department of</span>
                <span>&bull;</span>
                <span>Established {currentDept.established}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white mt-1">
                {currentDept.name} ({currentDept.shortCode})
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mt-2 leading-relaxed">
                {currentDept.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={openAdmissionModal}
                className="bg-orange-600 hover:bg-orange-700 active:scale-95 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow transition-all"
              >
                Apply for {currentDept.shortCode}
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-700/60 text-xs">
            <div className="bg-slate-800/80 p-2.5 rounded-lg">
              <span className="text-slate-400 block text-[11px]">Approved Intake</span>
              <span className="text-white font-bold text-sm">{currentDept.intake} Seats / Year</span>
            </div>
            <div className="bg-slate-800/80 p-2.5 rounded-lg">
              <span className="text-slate-400 block text-[11px]">Affiliation</span>
              <span className="text-white font-bold text-sm">VTU Belagavi (KCET E227)</span>
            </div>
            <div className="bg-slate-800/80 p-2.5 rounded-lg">
              <span className="text-slate-400 block text-[11px]">Core Faculty</span>
              <span className="text-white font-bold text-sm">{deptFaculty.length + 8}+ Professors</span>
            </div>
            <div className="bg-slate-800/80 p-2.5 rounded-lg">
              <span className="text-slate-400 block text-[11px]">Specialized Labs</span>
              <span className="text-white font-bold text-sm">{currentDept.labs.length} Research Labs</span>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="sticky top-[68px] z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-2 overflow-x-auto py-2 text-xs sm:text-sm font-bold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'overview' ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Overview & HOD Message
          </button>
          <button
            onClick={() => setActiveTab('labs')}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'labs' ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Laboratories ({currentDept.labs.length})
          </button>
          <button
            onClick={() => setActiveTab('faculty')}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'faculty' ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Faculty Directory ({deptFaculty.length})
          </button>
          <button
            onClick={() => setActiveTab('materials')}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'materials' ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>Course Materials & Notes</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-amber-400 text-slate-950 font-black">
              {deptMaterials.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'curriculum' ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            VTU Scheme & Syllabus
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column (8 cols): HOD Message & Vision/Mission */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* HOD Message Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex flex-wrap items-center gap-4 border-b border-slate-100 pb-4">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl border-2 border-orange-300 overflow-hidden">
                    <img 
                      src={deptFaculty[0]?.photoUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"} 
                      alt={currentDept.hodName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-orange-600 uppercase tracking-wider">Head of Department</div>
                    <h3 className="text-xl font-bold text-slate-900">{currentDept.hodName}</h3>
                    <p className="text-xs text-slate-500 font-medium">{currentDept.hodQualification}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-2">Message from HOD</h4>
                  <p className="text-slate-700 text-sm leading-relaxed text-justify italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                    "{currentDept.hodMessage}"
                  </p>
                </div>
              </div>

              {/* Vision & Mission */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#181a3d] mb-1">Department Vision</h3>
                  <p className="text-slate-700 text-sm leading-relaxed bg-orange-50/50 p-3.5 rounded-xl border border-orange-100 text-justify">
                    {currentDept.vision}
                  </p>
                </div>

                <div className="pt-2">
                  <h3 className="text-lg font-bold text-[#181a3d] mb-2">Department Mission</h3>
                  <div className="space-y-2">
                    {currentDept.mission.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
                <h3 className="text-lg font-bold text-[#181a3d] mb-3">Key Highlights & Strengths</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentDept.keyHighlights.map((hl, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-700 leading-relaxed flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column (4 cols): Department Announcements & Quick Actions */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Department Announcements Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-[#181a3d] flex items-center justify-between">
                  <span>Department Notices</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 font-bold">
                    Live
                  </span>
                </h3>

                <div className="space-y-3">
                  {deptAnnouncements.slice(0, 3).map((ann) => (
                    <div key={ann.id} className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-colors">
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 mb-1">
                        <Calendar className="w-3 h-3 text-orange-500" />
                        <span>{ann.date}</span>
                        <span>&bull;</span>
                        <span className="font-semibold text-indigo-700">{ann.category}</span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">{ann.title}</h4>
                      <p className="text-[11px] text-slate-600 line-clamp-2 mt-1">{ann.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Materials Quick CTA */}
              <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 text-white p-6 rounded-2xl shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white">
                  <Download className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Download Course Notes & Lab Manuals</h3>
                <p className="text-xs text-indigo-200 leading-relaxed">
                  Access lecture notes, question banks, and VTU lab manuals uploaded by faculty members for {currentDept.shortCode}.
                </p>
                <button
                  onClick={() => setActiveTab('materials')}
                  className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-lg transition-colors"
                >
                  Browse {deptMaterials.length} Study Materials &rarr;
                </button>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: LABORATORIES */}
        {activeTab === 'labs' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#181a3d]">Specialized Department Laboratories</h3>
                <p className="text-xs text-slate-500">World-class experimental facilities aligned with latest VTU 2021/2024 schemes</p>
              </div>
              <FlaskConical className="w-8 h-8 text-orange-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentDept.labs.map((lab, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{lab.name}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">{lab.description}</p>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="font-bold text-indigo-900 block mb-0.5">Hardware & Software Specifications:</span>
                    <span className="text-slate-700">{lab.equipment}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: FACULTY */}
        {activeTab === 'faculty' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#181a3d]">Faculty Members - {currentDept.shortCode}</h3>
                <p className="text-xs text-slate-500">Distinguished professors, researchers, and technical mentors</p>
              </div>
              <Users className="w-8 h-8 text-orange-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deptFaculty.map((fac) => (
                <div key={fac.id} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between">
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={fac.photoUrl}
                        alt={fac.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-orange-400"
                      />
                      <div>
                        <h4 className="text-base font-bold text-slate-900 leading-tight">{fac.name}</h4>
                        <div className="text-xs font-semibold text-orange-600">{fac.designation}</div>
                        <div className="text-[11px] text-slate-500">{fac.qualification}</div>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                      <div>
                        <strong className="text-slate-800">Specialization:</strong> {fac.specialization}
                      </div>
                      <div>
                        <strong className="text-slate-800">Experience:</strong> {fac.experienceYears} Years &bull; {fac.publicationsCount} Publications
                      </div>
                      <div className="flex items-center gap-1 text-slate-700 pt-1">
                        <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span className="truncate">{fac.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 border-t border-slate-100 text-center">
                    <span className="text-[11px] font-semibold text-indigo-700">
                      Subjects: {fac.subjectsTaught.slice(0, 2).join(', ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: COURSE MATERIALS (CMS CONSUMER) */}
        {activeTab === 'materials' && (
          <div className="space-y-6">
            
            {/* Filter Bar */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
              <div className="flex-1 min-w-[240px] relative">
                <input
                  type="text"
                  placeholder="Search course notes, subject code, topic..."
                  value={materialSearch}
                  onChange={(e) => setMaterialSearch(e.target.value)}
                  className="w-full bg-slate-50 text-xs px-3.5 py-2 pl-9 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>

              {/* Semester Filter */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 font-semibold flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" /> Sem:
                </span>
                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 font-medium text-slate-700 focus:outline-none"
                >
                  <option value="all">All Semesters</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                    <option key={s} value={s}>Semester {s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Materials List */}
            <div className="space-y-3">
              {filteredMaterials.map((mat) => (
                <div 
                  key={mat.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-orange-300 hover:shadow-md transition-all flex flex-wrap items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-50 rounded-xl text-orange-600 shrink-0 mt-1">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-bold text-[10px]">
                          {mat.subjectCode}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold text-[10px]">
                          Sem {mat.semester} &bull; {mat.category}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          Uploaded on {mat.uploadedAt}
                        </span>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-slate-900">{mat.title}</h4>
                      <p className="text-xs text-slate-600 mt-1">{mat.description}</p>
                      
                      <div className="text-[11px] text-slate-500 mt-2">
                        Uploaded by: <strong className="text-slate-700">{mat.facultyName}</strong> &bull; Size: {mat.fileSize} ({mat.fileType})
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownload(mat.title)}
                    className="flex items-center gap-2 bg-indigo-900 hover:bg-indigo-950 active:scale-95 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download {mat.fileType}</span>
                  </button>
                </div>
              ))}

              {filteredMaterials.length === 0 && (
                <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center text-slate-500">
                  <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  <p className="font-semibold text-sm">No course materials found matching filter.</p>
                  <p className="text-xs text-slate-400">Faculty can publish new modules through the Faculty CMS.</p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 5: CURRICULUM */}
        {activeTab === 'curriculum' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#181a3d]">VTU B.E. Scheme & Syllabus Structure</h3>
              <p className="text-xs text-slate-500">Autonomous & Affiliated VTU Choice Based Credit System (CBCS) Structure</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { sem: '1st & 2nd Semester', focus: 'Engineering Physics, Math, Basic Electronics, Elements of Civil/Mech, Python Programming' },
                { sem: '3rd & 4th Semester', focus: 'Data Structures, Digital Design, Object Oriented Java/C++, Discrete Math, Algorithms' },
                { sem: '5th & 6th Semester', focus: 'Database Engines, Operating Systems, Computer Networks, AI/ML, Full Stack Web Lab' },
                { sem: '7th & 8th Semester', focus: 'Cloud Computing, Distributed Systems, Cryptography, Major Capstone Industry Project' }
              ].map((scheme, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="text-xs font-bold text-orange-600 uppercase">{scheme.sem}</div>
                  <p className="text-xs text-slate-700 leading-relaxed">{scheme.focus}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-600">Download complete 4-year scheme handbook (VTU 2021/2024 Scheme)</span>
              <button
                onClick={() => handleDownload(`${currentDept.shortCode} VTU Scheme PDF`)}
                className="inline-flex items-center gap-2 bg-[#003884] hover:bg-[#002860] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download {currentDept.shortCode} Syllabus PDF</span>
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
