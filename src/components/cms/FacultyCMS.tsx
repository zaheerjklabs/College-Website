import React, { useState } from 'react';
import { 
  UserCheck, 
  BookOpen, 
  Bell, 
  UploadCloud, 
  Trash2, 
  Plus, 
  CheckCircle2, 
  FileText, 
  Calendar, 
  Lock, 
  LogOut, 
  Users, 
  Search,
  Filter,
  Sparkles,
  Inbox,
  AlertCircle
} from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';
import { CourseMaterial, Announcement } from '../../types';

export const FacultyCMS: React.FC = () => {
  const { 
    facultyUser, 
    isFacultyLoggedIn, 
    loginFaculty, 
    logoutFaculty, 
    facultyMembers,
    departments, 
    courseMaterials, 
    announcements, 
    addCourseMaterial, 
    deleteCourseMaterial, 
    addAnnouncement, 
    deleteAnnouncement,
    admissionInquiries,
    updateInquiryStatus,
    showToast 
  } = useCollege();

  const [activeCmsTab, setActiveCmsTab] = useState<'materials' | 'announcements' | 'inquiries'>('materials');
  const [facultyEmailInput, setFacultyEmailInput] = useState('');
  const [facultyPasswordInput, setFacultyPasswordInput] = useState('');

  // Form states for Course Material
  const [matTitle, setMatTitle] = useState('');
  const [matDept, setMatDept] = useState('cse');
  const [matSem, setMatSem] = useState(6);
  const [matSubCode, setMatSubCode] = useState('21CS61');
  const [matSubName, setMatSubName] = useState('Full Stack Development');
  const [matCategory, setMatCategory] = useState<'Lecture Notes' | 'Lab Manual' | 'Question Bank' | 'Syllabus' | 'PPT'>('Lecture Notes');
  const [matFileType, setMatFileType] = useState('PDF');
  const [matFileSize, setMatFileSize] = useState('3.2 MB');
  const [matDesc, setMatDesc] = useState('');

  // Form states for Announcement
  const [annTitle, setAnnTitle] = useState('');
  const [annDept, setAnnDept] = useState('cse');
  const [annCategory, setAnnCategory] = useState<'Academics' | 'Event' | 'Examination' | 'Placement' | 'Sports' | 'Admission'>('Academics');
  const [annPriority, setAnnPriority] = useState<'high' | 'normal'>('high');
  const [annDate, setAnnDate] = useState('24 Aug 2026');
  const [annContent, setAnnContent] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!facultyEmailInput.trim()) {
      showToast('Please enter faculty email address.', 'error');
      return;
    }
    const success = loginFaculty(facultyEmailInput.trim());
    if (!success) {
      showToast('Faculty not found. Use one of the quick demo buttons below.', 'error');
    }
  };

  const handleAddMaterialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!matTitle.trim() || !matSubCode.trim()) {
      showToast('Please fill in material title and subject code.', 'error');
      return;
    }

    const newMaterial: CourseMaterial = {
      id: `mat-${Date.now()}`,
      departmentId: matDept,
      semester: Number(matSem),
      subjectCode: matSubCode.toUpperCase(),
      subjectName: matSubName,
      title: matTitle,
      category: matCategory,
      uploadedBy: facultyUser?.id || 'fac-1',
      facultyName: facultyUser?.name || 'Faculty Member',
      uploadedAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      fileUrl: '#',
      fileSize: matFileSize,
      fileType: matFileType,
      description: matDesc || `Comprehensive study material for ${matSubName}`
    };

    addCourseMaterial(newMaterial);
    showToast(`Published "${matTitle}" to live student portal & department view!`, 'success');
    setMatTitle('');
    setMatDesc('');
  };

  const handleAddAnnouncementSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!annTitle.trim() || !annContent.trim()) {
      showToast('Please enter announcement title and body content.', 'error');
      return;
    }

    const newAnnouncement: Announcement = {
      id: `ann-${Date.now()}`,
      departmentId: annDept,
      title: annTitle,
      category: annCategory,
      priority: annPriority,
      date: annDate,
      content: annContent,
      author: facultyUser?.name || 'Department Office'
    };

    addAnnouncement(newAnnouncement);
    showToast(`Announcement "${annTitle}" is now live on the website!`, 'success');
    setAnnTitle('');
    setAnnContent('');
  };

  // If faculty is not logged in, render Faculty Login
  if (!isFacultyLoggedIn || !facultyUser) {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 rounded-2xl bg-amber-100 text-amber-700 shadow-inner">
              <UserCheck className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black text-[#181a3d] tracking-tight">
              SIT Faculty CMS
            </h2>
            <p className="text-xs text-slate-600">
              Departmental Content Management System for Notes, Circulars & Announcements
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl space-y-6">
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Faculty Email ID
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="e.g. anandkumar.cs@sitgulbarga.org"
                    value={facultyEmailInput}
                    onChange={(e) => setFacultyEmailInput(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 pl-10 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  CMS Security Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={facultyPasswordInput}
                    onChange={(e) => setFacultyPasswordInput(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 pl-10 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                </div>
              </div>

              <button
                type="submit"
                id="faculty-login-submit-btn"
                className="w-full py-3 bg-[#ea580c] hover:bg-[#c2410c] active:scale-95 text-white font-bold text-sm rounded-xl shadow-md transition-all duration-200"
              >
                Access Faculty Publishing Console
              </button>
            </form>

            {/* Quick Demo Logins for Faculty */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center">
                One-Click Faculty Demo Access
              </div>
              <div className="space-y-2">
                {facultyMembers.slice(0, 3).map((fac) => (
                  <button
                    key={fac.id}
                    type="button"
                    onClick={() => loginFaculty(fac.email)}
                    className="w-full p-2.5 rounded-xl border border-amber-100 bg-amber-50/50 hover:bg-amber-100 text-left flex items-center justify-between transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-amber-700">
                        {fac.name}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {fac.designation} &bull; {fac.email}
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-amber-700 text-white">
                      Login &rarr;
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }

  // If Logged in, render Full CMS Console
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* CMS Header Bar */}
      <div className="bg-[#181a3d] text-white pt-8 pb-10 px-4 sm:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-400 shrink-0 bg-slate-800 shadow-lg">
              <img
                src={facultyUser.photoUrl}
                alt={facultyUser.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-amber-600 text-white text-[10px] font-extrabold uppercase tracking-wide">
                  Faculty CMS Workspace
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-semibold">
                  {facultyUser.departmentId.toUpperCase()} Dept
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white mt-1">
                {facultyUser.name}
              </h1>
              <div className="text-xs text-slate-300 font-medium mt-0.5">
                {facultyUser.designation} &bull; {facultyUser.qualification}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right text-xs text-slate-300 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700">
              <div>Total Published Notes: <strong className="text-amber-400">{courseMaterials.length}</strong></div>
              <div>Live Announcements: <strong className="text-orange-400">{announcements.length}</strong></div>
            </div>

            <button
              id="faculty-logout-btn"
              onClick={logoutFaculty}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-red-900/60 text-slate-200 hover:text-white text-xs font-bold transition-colors border border-slate-700"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout CMS</span>
            </button>
          </div>

        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-[68px] z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-2 overflow-x-auto py-2 text-xs sm:text-sm font-bold">
          <button
            onClick={() => setActiveCmsTab('materials')}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeCmsTab === 'materials' ? 'bg-amber-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Course Materials & Notes ({courseMaterials.length})</span>
          </button>
          
          <button
            onClick={() => setActiveCmsTab('announcements')}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeCmsTab === 'announcements' ? 'bg-amber-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Bell className="w-4 h-4" />
            <span>Department Announcements ({announcements.length})</span>
          </button>

          <button
            onClick={() => setActiveCmsTab('inquiries')}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeCmsTab === 'inquiries' ? 'bg-amber-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Inbox className="w-4 h-4" />
            <span>Admission Inquiries ({admissionInquiries.length})</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        
        {/* TAB 1: COURSE MATERIALS PUBLISHING */}
        {activeCmsTab === 'materials' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Publishing Form (5 cols) */}
            <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-black text-lg border-b border-slate-100 pb-3">
                <UploadCloud className="w-5 h-5 text-amber-600" />
                <span>Upload & Publish Material</span>
              </div>

              <form onSubmit={handleAddMaterialSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Title of Material</label>
                  <input
                    type="text"
                    placeholder="e.g. Module 3: Deep Neural Networks & Backprop"
                    value={matTitle}
                    onChange={(e) => setMatTitle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Department</label>
                    <select
                      value={matDept}
                      onChange={(e) => setMatDept(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                    >
                      {departments.map((d) => (
                        <option key={d.id} value={d.id}>{d.name} ({d.shortCode})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Semester</label>
                    <select
                      value={matSem}
                      onChange={(e) => setMatSem(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                        <option key={s} value={s}>Semester {s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Subject Code</label>
                    <input
                      type="text"
                      placeholder="e.g. 21CS61"
                      value={matSubCode}
                      onChange={(e) => setMatSubCode(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none font-semibold uppercase"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Category</label>
                    <select
                      value={matCategory}
                      onChange={(e) => setMatCategory(e.target.value as any)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                    >
                      <option value="Lecture Notes">Lecture Notes</option>
                      <option value="Lab Manual">Lab Manual</option>
                      <option value="Question Bank">Question Bank</option>
                      <option value="PPT">Presentation PPT</option>
                      <option value="Syllabus">VTU Syllabus</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Subject Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Full Stack Web Development"
                    value={matSubName}
                    onChange={(e) => setMatSubName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">File Format</label>
                    <select
                      value={matFileType}
                      onChange={(e) => setMatFileType(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                    >
                      <option value="PDF">PDF Document</option>
                      <option value="PPTX">PowerPoint (PPTX)</option>
                      <option value="DOCX">Word Document</option>
                      <option value="ZIP">Lab Code Archive (ZIP)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Approx Size</label>
                    <input
                      type="text"
                      placeholder="e.g. 4.2 MB"
                      value={matFileSize}
                      onChange={(e) => setMatFileSize(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Short Description</label>
                  <textarea
                    rows={2}
                    placeholder="Brief description of chapters covered..."
                    value={matDesc}
                    onChange={(e) => setMatDesc(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="cms-publish-material-btn"
                  className="w-full py-3 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-bold rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish Material Immediately</span>
                </button>
              </form>
            </div>

            {/* Published Materials List & Management (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Manage Published Course Materials</h3>
                  <p className="text-xs text-slate-500">Live content visible on student portal and academic department pages</p>
                </div>
                <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full font-bold text-xs">
                  {courseMaterials.length} Active
                </span>
              </div>

              <div className="space-y-3">
                {courseMaterials.map((mat) => (
                  <div
                    key={mat.id}
                    className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-start justify-between gap-3 hover:border-amber-300 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 bg-amber-50 rounded-xl text-amber-700 shrink-0 mt-0.5">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-1.5 mb-1">
                          <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded">
                            {mat.subjectCode}
                          </span>
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-semibold rounded">
                            {departments.find(d => d.id === mat.departmentId)?.shortCode || mat.departmentId} &bull; Sem {mat.semester}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {mat.uploadedAt}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">{mat.title}</h4>
                        <p className="text-[11px] text-slate-600 mt-0.5">{mat.description}</p>
                        <div className="text-[10px] text-slate-500 mt-1">
                          Author: <strong>{mat.facultyName}</strong> &bull; {mat.fileSize} ({mat.fileType})
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => deleteCourseMaterial(mat.id)}
                      className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors shrink-0"
                      title="Delete Material"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: ANNOUNCEMENTS PUBLISHING */}
        {activeCmsTab === 'announcements' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Form */}
            <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-black text-lg border-b border-slate-100 pb-3">
                <Bell className="w-5 h-5 text-amber-600" />
                <span>Post Department Notice / News</span>
              </div>

              <form onSubmit={handleAddAnnouncementSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Announcement Headline</label>
                  <input
                    type="text"
                    placeholder="e.g. Schedule for VTU Internal Assessment 2 (IA-2)"
                    value={annTitle}
                    onChange={(e) => setAnnTitle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none font-medium"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Target Department</label>
                    <select
                      value={annDept}
                      onChange={(e) => setAnnDept(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                    >
                      <option value="all">Entire Institute (All Branches)</option>
                      {departments.map((d) => (
                        <option key={d.id} value={d.id}>{d.name} ({d.shortCode})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Category</label>
                    <select
                      value={annCategory}
                      onChange={(e) => setAnnCategory(e.target.value as any)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                    >
                      <option value="Academics">Academics</option>
                      <option value="Examination">Examination</option>
                      <option value="Event">Event / Hackathon</option>
                      <option value="Placement">Placements</option>
                      <option value="Sports">Sports</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Priority</label>
                    <select
                      value={annPriority}
                      onChange={(e) => setAnnPriority(e.target.value as any)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none font-bold text-orange-600"
                    >
                      <option value="high">High Priority</option>
                      <option value="normal">Normal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 uppercase mb-1">Display Date</label>
                    <input
                      type="text"
                      value={annDate}
                      onChange={(e) => setAnnDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Full Announcement Body</label>
                  <textarea
                    rows={4}
                    placeholder="Enter detailed notice, instructions, timings or venue..."
                    value={annContent}
                    onChange={(e) => setAnnContent(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="cms-publish-announcement-btn"
                  className="w-full py-3 bg-[#ea580c] hover:bg-[#c2410c] active:scale-95 text-white font-bold rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Broadcast Notice to Feed</span>
                </button>
              </form>
            </div>

            {/* List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Active Campus Circulars</h3>
                  <p className="text-xs text-slate-500">Visible on homepage, departmental feeds and footer events</p>
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-900 rounded-full font-bold text-xs">
                  {announcements.length} Published
                </span>
              </div>

              <div className="space-y-3">
                {announcements.map((ann) => (
                  <div
                    key={ann.id}
                    className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-start justify-between gap-3 hover:border-orange-300 transition-colors"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          ann.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {ann.priority === 'high' ? 'High Priority' : 'Standard'}
                        </span>
                        <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-semibold rounded">
                          {ann.category}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {ann.date}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{ann.title}</h4>
                      <p className="text-xs text-slate-600 mt-1">{ann.content}</p>
                      <div className="text-[10px] text-slate-400 mt-1.5">
                        Author: {ann.author} &bull; Target: {ann.departmentId === 'all' ? 'All College' : ann.departmentId.toUpperCase()}
                      </div>
                    </div>

                    <button
                      onClick={() => deleteAnnouncement(ann.id)}
                      className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors shrink-0"
                      title="Delete Notice"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: ADMISSION INQUIRIES */}
        {activeCmsTab === 'inquiries' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-bold text-[#181a3d]">Admissions & Prospect Inquiries CRM</h3>
                <p className="text-xs text-slate-500">Student applications submitted via Admission Enquiry forms</p>
              </div>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full font-bold text-xs">
                {admissionInquiries.length} Inquiries Received
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 uppercase font-bold text-[11px]">
                  <tr>
                    <th className="py-3 px-3">Date</th>
                    <th className="py-3 px-3">Applicant Name</th>
                    <th className="py-3 px-3">Phone & Email</th>
                    <th className="py-3 px-3">Branch Chosen</th>
                    <th className="py-3 px-3">Quota</th>
                    <th className="py-3 px-3">Rank/Marks</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {admissionInquiries.map((inq) => (
                    <tr key={inq.id} className="hover:bg-slate-50">
                      <td className="py-3 px-3 text-slate-500 whitespace-nowrap">{inq.submittedAt}</td>
                      <td className="py-3 px-3 font-bold text-slate-900">{inq.fullName}</td>
                      <td className="py-3 px-3 text-slate-600">
                        <div>{inq.phone}</div>
                        <div className="text-[10px] text-slate-400">{inq.email}</div>
                      </td>
                      <td className="py-3 px-3 font-semibold text-indigo-900 uppercase">{inq.branch}</td>
                      <td className="py-3 px-3 text-slate-700 font-medium">{inq.quota}</td>
                      <td className="py-3 px-3 text-slate-700">{inq.kcetRank ? `KCET: ${inq.kcetRank}` : `PUC: ${inq.pucPercentage}%`}</td>
                      <td className="py-3 px-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          inq.status === 'verified' 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : inq.status === 'contacted'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {inq.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <select
                          value={inq.status}
                          onChange={(e) => updateInquiryStatus(inq.id, e.target.value as any)}
                          className="bg-slate-100 border border-slate-200 rounded px-2 py-1 text-[11px] font-medium"
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="verified">Verified</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
