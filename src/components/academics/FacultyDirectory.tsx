import React, { useState } from 'react';
import { Search, Filter, Mail, Award, BookOpen, User, GraduationCap, ArrowLeft } from 'lucide-react';
import { useCollege } from '../../context/CollegeContext';

export const FacultyDirectory: React.FC = () => {
  const { facultyMembers, departments, setActivePage, navigateToDepartment } = useCollege();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDeptFilter, setSelectedDeptFilter] = useState('all');

  const filteredFaculty = facultyMembers.filter(f => {
    const matchesDept = selectedDeptFilter === 'all' || f.departmentId === selectedDeptFilter;
    const matchesSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          f.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          f.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          f.subjectsTaught.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-[#181a3d] text-white pt-10 pb-12 px-4 sm:px-8 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto space-y-3">
          <button
            onClick={() => setActivePage('home')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 hover:text-orange-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Distinguished Faculty Directory
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Meet the experienced educators, doctorates, and researchers guiding students at Shanta Institute of Technology Kalaburagi.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        
        {/* Filter Controls */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-wrap items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="flex-1 min-w-[260px] relative">
            <input
              type="text"
              placeholder="Search faculty by name, specialization, subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 text-xs sm:text-sm px-4 py-2.5 pl-10 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          </div>

          {/* Department Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 text-xs">
            <button
              onClick={() => setSelectedDeptFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-colors whitespace-nowrap ${
                selectedDeptFilter === 'all' ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Departments ({facultyMembers.length})
            </button>
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDeptFilter(dept.id)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors whitespace-nowrap ${
                  selectedDeptFilter === dept.id ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {dept.shortCode}
              </button>
            ))}
          </div>

        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaculty.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-6 space-y-4">
                
                {/* Photo & Basic Info */}
                <div className="flex items-start gap-4">
                  <div className="w-18 h-18 rounded-2xl overflow-hidden border-2 border-orange-400 shrink-0 bg-slate-100 shadow-md group-hover:scale-105 transition-transform">
                    <img
                      src={faculty.photoUrl}
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                      {departments.find(d => d.id === faculty.departmentId)?.shortCode || 'Engineering'}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-1 leading-snug">{faculty.name}</h3>
                    <div className="text-xs font-semibold text-orange-600">{faculty.designation}</div>
                    <div className="text-[11px] text-slate-500 font-medium">{faculty.qualification}</div>
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <div>
                    <strong className="text-slate-800">Specialization:</strong> {faculty.specialization}
                  </div>
                  <div className="flex items-center justify-between text-slate-700">
                    <span><strong>Experience:</strong> {faculty.experienceYears} Years</span>
                    <span><strong>Research:</strong> {faculty.publicationsCount} Papers</span>
                  </div>
                  <div>
                    <strong className="text-slate-800">Subjects:</strong>{' '}
                    <span className="text-slate-600">{faculty.subjectsTaught.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700 pt-1">
                    <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span className="text-[11px] truncate">{faculty.email}</span>
                  </div>
                </div>

              </div>

              {/* Card Footer Action */}
              <div className="bg-slate-50 p-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">SIT Kalaburagi Faculty</span>
                <button
                  onClick={() => navigateToDepartment(faculty.departmentId)}
                  className="text-xs font-bold text-indigo-700 hover:text-indigo-900 transition-colors"
                >
                  View Department &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center text-slate-500">
            <User className="w-12 h-12 text-slate-300 mx-auto mb-2" />
            <p className="font-bold text-base">No faculty found matching your search.</p>
            <p className="text-xs text-slate-400 mt-1">Try searching by branch or a different keyword.</p>
          </div>
        )}

      </div>

    </div>
  );
};
