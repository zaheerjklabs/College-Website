import React, { useState } from 'react';
import { 
  GraduationCap, 
  User, 
  Lock, 
  LogOut, 
  BookOpen, 
  Award, 
  Calendar, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Download, 
  FileText, 
  Printer, 
  ShieldCheck, 
  Send,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';
import { SAMPLE_STUDENTS } from '../../data/initialData';

export const StudentPortal: React.FC = () => {
  const { 
    studentUser, 
    isStudentLoggedIn, 
    loginStudent, 
    logoutStudent, 
    courseMaterials,
    showToast 
  } = useCollege();

  const [usnInput, setUsnInput] = useState('');
  const [dobInput, setDobInput] = useState('');
  const [activeTab, setActiveTab] = useState<'attendance' | 'marks' | 'materials' | 'fees' | 'library' | 'feedback'>('attendance');
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackCategory, setFeedbackCategory] = useState('Academics');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!usnInput.trim()) {
      showToast('Please enter your University Seat Number (USN).', 'error');
      return;
    }
    const success = loginStudent(usnInput.trim());
    if (!success) {
      showToast(`USN "${usnInput}" not found. Try one-click demo login below.`, 'error');
    }
  };

  const handleDemoLogin = (usn: string) => {
    loginStudent(usn);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;
    showToast('Your feedback has been submitted to the Student Governance Council & Dean.', 'success');
    setFeedbackText('');
  };

  const relevantMaterials = courseMaterials.filter(
    m => !studentUser || m.departmentId === studentUser.departmentId
  );

  // If not logged in, render Login View
  if (!isStudentLoggedIn || !studentUser) {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 rounded-2xl bg-orange-100 text-orange-600 shadow-inner">
              <GraduationCap className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black text-[#181a3d] tracking-tight">
              SIT Student Portal
            </h2>
            <p className="text-xs text-slate-600">
              Access your Attendance, Internal Marks, VTU Results & Course Notes
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl space-y-6">
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  University Seat Number (USN)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. 3ST22CS042"
                    value={usnInput}
                    onChange={(e) => setUsnInput(e.target.value.toUpperCase())}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 pl-10 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 uppercase placeholder:normal-case"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Date of Birth / Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={dobInput}
                    onChange={(e) => setDobInput(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 pl-10 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                </div>
              </div>

              <button
                type="submit"
                id="student-login-submit-btn"
                className="w-full py-3 bg-[#f97316] hover:bg-[#ea580c] active:scale-95 text-white font-bold text-sm rounded-xl shadow-md transition-all duration-200"
              >
                Sign In to Student Dashboard
              </button>
            </form>

            {/* Quick One-Click Demo Access */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center">
                Quick Demo Login (One-Click)
              </div>
              <div className="space-y-2">
                {SAMPLE_STUDENTS.map((stud) => (
                  <button
                    key={stud.usn}
                    type="button"
                    onClick={() => handleDemoLogin(stud.usn)}
                    className="w-full p-2.5 rounded-xl border border-indigo-100 bg-indigo-50/60 hover:bg-indigo-100 text-left flex items-center justify-between transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-bold text-indigo-950 group-hover:text-orange-600">
                        {stud.name}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {stud.usn} &bull; {stud.branch} Sem {stud.semester}
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-indigo-900 text-white">
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

  // If Logged in, render Full Portal Dashboard
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Student Profile Header Banner */}
      <div className="bg-[#181a3d] text-white pt-8 pb-10 px-4 sm:px-8 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          
          {/* Profile Overview */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-orange-400 shrink-0 bg-slate-800 shadow-lg">
              <img
                src={studentUser.avatarUrl}
                alt={studentUser.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-orange-600 text-white text-[10px] font-extrabold uppercase tracking-wide">
                  Student Portal
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-semibold">
                  Section {studentUser.section}
                </span>
              </div>
              <h1 className="text-xl sm:text-3xl font-black text-white mt-1">
                {studentUser.name}
              </h1>
              <div className="text-xs text-slate-300 font-medium mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>USN: <strong className="text-amber-400">{studentUser.usn}</strong></span>
                <span>&bull;</span>
                <span>{studentUser.branch} (Sem {studentUser.semester})</span>
                <span>&bull;</span>
                <span>Mentor: {studentUser.mentorName}</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Logout */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
              <div className="text-center px-2">
                <div className="text-[10px] text-slate-400">Cumulative CGPA</div>
                <div className="text-lg font-black text-emerald-400">{studentUser.cgpa}</div>
              </div>
              <div className="border-l border-slate-700 pl-3 text-center px-2">
                <div className="text-[10px] text-slate-400">Overall Attendance</div>
                <div className="text-lg font-black text-orange-400">
                  {Math.round(
                    studentUser.attendance.reduce((acc, a) => acc + (a.attended / a.totalClasses) * 100, 0) /
                    studentUser.attendance.length
                  )}%
                </div>
              </div>
            </div>

            <button
              id="student-logout-btn"
              onClick={logoutStudent}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-red-900/60 text-slate-200 hover:text-white text-xs font-bold transition-colors border border-slate-700"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>

        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="sticky top-[68px] z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-2 overflow-x-auto py-2 text-xs sm:text-sm font-bold">
          <button
            onClick={() => setActiveTab('attendance')}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'attendance' ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Subject Attendance Tracker
          </button>
          <button
            onClick={() => setActiveTab('marks')}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'marks' ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Internal Assessment & Marks
          </button>
          <button
            onClick={() => setActiveTab('materials')}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'materials' ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Course Notes & Manuals ({relevantMaterials.length})
          </button>
          <button
            onClick={() => setActiveTab('fees')}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'fees' ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Fee Status & Receipts
          </button>
          <button
            onClick={() => setActiveTab('library')}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'library' ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Library Issued Books
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'feedback' ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Student Grievance / Feedback
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        
        {/* TAB 1: ATTENDANCE TRACKER */}
        {activeTab === 'attendance' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-[#181a3d]">Semester {studentUser.semester} Attendance Status</h3>
                <p className="text-xs text-slate-500">VTU minimum attendance compliance rule is 75% per course</p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Safe (&gt;85%)
                </span>
                <span className="flex items-center gap-1 text-amber-700 font-semibold ml-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Caution (75-85%)
                </span>
                <span className="flex items-center gap-1 text-red-700 font-semibold ml-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Shortage (&lt;75%)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentUser.attendance.map((sub, idx) => {
                const percentage = Math.round((sub.attended / sub.totalClasses) * 100);
                const isSafe = percentage >= 85;
                const isWarning = percentage < 75;

                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                          {sub.subjectCode}
                        </span>
                        <h4 className="text-base font-bold text-slate-900 mt-1">{sub.subjectName}</h4>
                      </div>
                      <span className={`text-xl font-black ${
                        isWarning ? 'text-red-600' : isSafe ? 'text-emerald-600' : 'text-amber-600'
                      }`}>
                        {percentage}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isWarning ? 'bg-red-500' : isSafe ? 'bg-emerald-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                        <span>Attended: <strong>{sub.attended}</strong> / {sub.totalClasses} classes</span>
                        <span>Missed: {sub.totalClasses - sub.attended}</span>
                      </div>
                    </div>

                    {isWarning && (
                      <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-[11px] text-red-700 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>Warning: Attendance below VTU 75% threshold!</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: INTERNAL ASSESSMENT & VTU MARKS CARD */}
        {activeTab === 'marks' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-[#181a3d]">Continuous Internal Evaluation (CIE) Marks Card</h3>
                <p className="text-xs text-slate-500">Official VTU Internal Assessment Records &bull; Semester {studentUser.semester}</p>
              </div>

              <button
                onClick={() => showToast('Printing Official Marks Card...', 'info')}
                className="flex items-center gap-2 bg-indigo-900 hover:bg-indigo-950 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>Print Marks Card</span>
              </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider font-bold">
                  <tr>
                    <th className="py-3 px-4">Subject Code</th>
                    <th className="py-3 px-4">Subject Title</th>
                    <th className="py-3 px-4 text-center">IA-1 (20)</th>
                    <th className="py-3 px-4 text-center">IA-2 (20)</th>
                    <th className="py-3 px-4 text-center">IA-3 (20)</th>
                    <th className="py-3 px-4 text-center">Assignment (10)</th>
                    <th className="py-3 px-4 text-center font-black text-orange-600">Total CIE (50)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {studentUser.marks.map((mk, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-indigo-900">{mk.subjectCode}</td>
                      <td className="py-3.5 px-4 font-semibold text-slate-800">{mk.subjectName}</td>
                      <td className="py-3.5 px-4 text-center">{mk.ia1}</td>
                      <td className="py-3.5 px-4 text-center">{mk.ia2}</td>
                      <td className="py-3.5 px-4 text-center">{mk.ia3}</td>
                      <td className="py-3.5 px-4 text-center">{mk.assignment}</td>
                      <td className="py-3.5 px-4 text-center font-bold text-orange-600 text-base">{mk.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Previous Semesters SGPA history */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-base font-bold text-[#181a3d] mb-3">VTU Semester Exam History (SGPA Progression)</h4>
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
                {[
                  { sem: 'Sem 1', sgpa: '8.60', status: 'First Class with Dist.' },
                  { sem: 'Sem 2', sgpa: '8.75', status: 'First Class with Dist.' },
                  { sem: 'Sem 3', sgpa: '8.80', status: 'First Class with Dist.' },
                  { sem: 'Sem 4', sgpa: '8.68', status: 'First Class with Dist.' },
                  { sem: 'Sem 5', sgpa: '8.72', status: 'First Class with Dist.' },
                  { sem: 'Sem 6', sgpa: 'Current', status: 'Ongoing' }
                ].map((s, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-[11px] font-bold text-slate-500 uppercase">{s.sem}</div>
                    <div className="text-lg font-black text-indigo-900 my-0.5">{s.sgpa}</div>
                    <div className="text-[9px] text-emerald-600 font-bold truncate">{s.status}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: COURSE MATERIALS */}
        {activeTab === 'materials' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#181a3d]">Course Materials & Notes for {studentUser.branch}</h3>
                <p className="text-xs text-slate-500">Uploaded and approved by your departmental faculty</p>
              </div>
              <Download className="w-8 h-8 text-orange-500" />
            </div>

            <div className="space-y-3">
              {relevantMaterials.map((mat) => (
                <div key={mat.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-orange-50 rounded-xl text-orange-600 shrink-0 mt-0.5">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-bold text-[10px]">
                          {mat.subjectCode}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          Sem {mat.semester} &bull; {mat.category}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{mat.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{mat.description}</p>
                      <div className="text-[11px] text-slate-500 mt-1">
                        Uploaded by: <strong>{mat.facultyName}</strong> &bull; Size: {mat.fileSize}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => showToast(`Downloading ${mat.title}...`, 'info')}
                    className="flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: FEES */}
        {activeTab === 'fees' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#181a3d]">Academic Year 2026-2027 Fee Summary</h3>
              <p className="text-xs text-slate-500">Official Finance & Accounts Division</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-slate-500 font-medium">Total Annual Fee</span>
                <div className="text-2xl font-black text-slate-900 mt-1">₹{studentUser.feeStatus.total.toLocaleString()}</div>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="text-xs text-emerald-700 font-medium">Paid Amount</span>
                <div className="text-2xl font-black text-emerald-800 mt-1">₹{studentUser.feeStatus.paid.toLocaleString()}</div>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <span className="text-xs text-amber-700 font-medium">Pending Balance</span>
                <div className="text-2xl font-black text-amber-800 mt-1">₹{studentUser.feeStatus.pending.toLocaleString()}</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-600">
                Last payment of ₹45,000 received on 10 July 2026 via Online Net Banking (Ref: SIT2026PAY9910)
              </div>
              <button
                onClick={() => showToast('Downloading Official Fee Receipt PDF...', 'info')}
                className="flex items-center gap-2 bg-[#003884] hover:bg-[#002860] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Fee Receipt</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 5: LIBRARY */}
        {activeTab === 'library' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#181a3d]">Central Library Issued Books</h3>
              <p className="text-xs text-slate-500">Automated RFID Library circulation records</p>
            </div>

            <div className="space-y-3">
              {studentUser.libraryBooks.map((bk, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{bk.title}</h4>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Accession No: <strong>{bk.accessionNo}</strong> &bull; Due Date: <strong className="text-orange-600">{bk.dueDate}</strong>
                    </div>
                  </div>
                  <button
                    onClick={() => showToast(`Book renewal request placed for "${bk.title}".`, 'success')}
                    className="px-3.5 py-1.5 bg-indigo-900 hover:bg-indigo-950 text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    Request Renewal
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: FEEDBACK & GRIEVANCE */}
        {activeTab === 'feedback' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 max-w-3xl">
            <div>
              <h3 className="text-xl font-bold text-[#181a3d]">Student Self Governance Grievance Redressal</h3>
              <p className="text-xs text-slate-500">Your concerns will be reviewed directly by the Student Council & Principal</p>
            </div>

            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category</label>
                <select
                  value={feedbackCategory}
                  onChange={(e) => setFeedbackCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium focus:outline-none"
                >
                  <option value="Academics">Academics & Labs</option>
                  <option value="Hostel">Hostel & Mess</option>
                  <option value="Transport">Transportation & Bus routes</option>
                  <option value="Library">Library & Digital Resources</option>
                  <option value="Events">Clubs & Cultural Fests</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Feedback / Suggestion</label>
                <textarea
                  rows={4}
                  placeholder="Describe your issue or suggestion constructively..."
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Grievance</span>
              </button>
            </form>
          </div>
        )}

      </div>

    </div>
  );
};
