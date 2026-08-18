import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  PageId, 
  Department, 
  FacultyMember, 
  CourseMaterial, 
  Announcement, 
  CollegeEvent, 
  AchievementItem, 
  StudentProfile, 
  AdmissionInquiry, 
  Facility 
} from '../types';
import { 
  DEPARTMENTS, 
  FACULTY_MEMBERS, 
  INITIAL_COURSE_MATERIALS, 
  INITIAL_ANNOUNCEMENTS, 
  COLLEGE_EVENTS, 
  ACHIEVEMENTS, 
  FACILITIES, 
  DEMO_STUDENT 
} from '../data/initialData';

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  text: string;
}

interface CollegeContextType {
  // Navigation
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  selectedDepartmentId: string;
  setSelectedDepartmentId: (deptId: string) => void;
  navigateToDepartment: (deptId: string) => void;
  
  // Data Repositories
  departments: Department[];
  facultyMembers: FacultyMember[];
  courseMaterials: CourseMaterial[];
  announcements: Announcement[];
  events: CollegeEvent[];
  achievements: AchievementItem[];
  facilities: Facility[];
  
  // Student Portal Auth & State
  studentUser: StudentProfile | null;
  isStudentLoggedIn: boolean;
  loginStudent: (usn: string, dob?: string) => boolean;
  logoutStudent: () => void;
  
  // Faculty CMS Auth & State
  facultyUser: FacultyMember | null;
  isFacultyLoggedIn: boolean;
  loginFaculty: (email: string, pass?: string) => boolean;
  logoutFaculty: () => void;
  
  // CMS Operations (Course Materials & Announcements)
  addCourseMaterial: (material: Omit<CourseMaterial, 'id' | 'uploadedAt'>) => void;
  deleteCourseMaterial: (id: string) => void;
  addAnnouncement: (announcement: Omit<Announcement, 'id'>) => void;
  deleteAnnouncement: (id: string) => void;
  
  // Admissions
  admissionInquiries: AdmissionInquiry[];
  submitAdmissionInquiry: (inquiry: Omit<AdmissionInquiry, 'id' | 'status' | 'submittedAt'>) => void;
  isAdmissionModalOpen: boolean;
  openAdmissionModal: () => void;
  closeAdmissionModal: () => void;

  // Selected Detail Modals
  selectedAchievement: AchievementItem | null;
  setSelectedAchievement: (item: AchievementItem | null) => void;
  selectedFacility: Facility | null;
  setSelectedFacility: (facility: Facility | null) => void;

  // Photo Gallery Modal
  isGalleryModalOpen: boolean;
  galleryInitialPhotoId?: string;
  openGalleryModal: (photoId?: string) => void;
  closeGalleryModal: () => void;
  
  // Search & Toast
  globalSearchQuery: string;
  setGlobalSearchQuery: (query: string) => void;
  toasts: ToastMessage[];
  showToast: (text: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  removeToast: (id: string) => void;
}

const CollegeContext = createContext<CollegeContextType | undefined>(undefined);

const STORAGE_KEYS = {
  COURSE_MATERIALS: 'sit_course_materials_v1',
  ANNOUNCEMENTS: 'sit_announcements_v1',
  ADMISSION_INQUIRIES: 'sit_admission_inquiries_v1',
  STUDENT_SESSION: 'sit_student_session_v1',
  FACULTY_SESSION: 'sit_faculty_session_v1'
};

export const CollegeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<string>('cse');
  
  // Load persisted CMS data or fallback to defaults
  const [courseMaterials, setCourseMaterials] = useState<CourseMaterial[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COURSE_MATERIALS);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_COURSE_MATERIALS;
  });

  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ANNOUNCEMENTS);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_ANNOUNCEMENTS;
  });

  const [admissionInquiries, setAdmissionInquiries] = useState<AdmissionInquiry[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ADMISSION_INQUIRIES);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [
      {
        id: 'inq-101',
        studentName: 'Sneha Patil',
        email: 'sneha.patil@example.com',
        phone: '+91 98451 23456',
        coursePreferred: 'Computer Science & Engineering',
        quota: 'KCET',
        pucPercentage: '92.4%',
        city: 'Kalaburagi',
        state: 'Karnataka',
        status: 'Under Review',
        submittedAt: '2026-08-16 11:30 AM'
      }
    ];
  });

  // Auth States
  const [studentUser, setStudentUser] = useState<StudentProfile | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.STUDENT_SESSION);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return null;
  });

  const [facultyUser, setFacultyUser] = useState<FacultyMember | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.FACULTY_SESSION);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return null;
  });

  // Modals & UI
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COURSE_MATERIALS, JSON.stringify(courseMaterials));
  }, [courseMaterials]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ADMISSION_INQUIRIES, JSON.stringify(admissionInquiries));
  }, [admissionInquiries]);

  // Toast Helper
  const showToast = (text: string, type: 'success' | 'info' | 'warning' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, text, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const navigateToDepartment = (deptId: string) => {
    setSelectedDepartmentId(deptId);
    setActivePage('department');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Student Auth
  const loginStudent = (usn: string) => {
    const cleanUsn = usn.trim().toUpperCase();
    if (!cleanUsn) {
      showToast('Please enter a valid USN (e.g. 3SG21CS042)', 'warning');
      return false;
    }
    // Demo student profile or matching
    const profile: StudentProfile = {
      ...DEMO_STUDENT,
      usn: cleanUsn,
      name: cleanUsn === DEMO_STUDENT.usn ? DEMO_STUDENT.name : `Student (${cleanUsn})`
    };
    setStudentUser(profile);
    localStorage.setItem(STORAGE_KEYS.STUDENT_SESSION, JSON.stringify(profile));
    showToast(`Welcome back, ${profile.name}! Logged into Student Portal.`, 'success');
    return true;
  };

  const logoutStudent = () => {
    setStudentUser(null);
    localStorage.removeItem(STORAGE_KEYS.STUDENT_SESSION);
    showToast('Logged out of Student Portal', 'info');
  };

  // Faculty Auth
  const loginFaculty = (email: string) => {
    const cleanEmail = email.trim().toLowerCase();
    const found = FACULTY_MEMBERS.find(f => f.email.toLowerCase() === cleanEmail) || FACULTY_MEMBERS[0];
    setFacultyUser(found);
    localStorage.setItem(STORAGE_KEYS.FACULTY_SESSION, JSON.stringify(found));
    showToast(`Welcome Professor ${found.name}! Logged into Faculty CMS.`, 'success');
    return true;
  };

  const logoutFaculty = () => {
    setFacultyUser(null);
    localStorage.removeItem(STORAGE_KEYS.FACULTY_SESSION);
    showToast('Logged out of Faculty CMS', 'info');
  };

  // Course Materials CMS
  const addCourseMaterial = (materialData: Omit<CourseMaterial, 'id' | 'uploadedAt'>) => {
    const newMaterial: CourseMaterial = {
      ...materialData,
      id: `mat-${Date.now()}`,
      uploadedAt: new Date().toISOString().split('T')[0]
    };
    setCourseMaterials(prev => [newMaterial, ...prev]);
    showToast(`Published material: "${newMaterial.title}" successfully!`, 'success');
  };

  const deleteCourseMaterial = (id: string) => {
    setCourseMaterials(prev => prev.filter(m => m.id !== id));
    showToast('Course material removed from portal', 'info');
  };

  // Announcements CMS
  const addAnnouncement = (announcementData: Omit<Announcement, 'id'>) => {
    const newAnn: Announcement = {
      ...announcementData,
      id: `ann-${Date.now()}`
    };
    setAnnouncements(prev => [newAnn, ...prev]);
    showToast(`Published announcement: "${newAnn.title}"!`, 'success');
  };

  const deleteAnnouncement = (id: string) => {
    setAnnouncements(prev => prev.filter(a => a.id !== id));
    showToast('Announcement removed', 'info');
  };

  // Admissions
  const submitAdmissionInquiry = (inquiryData: Omit<AdmissionInquiry, 'id' | 'status' | 'submittedAt'>) => {
    const now = new Date();
    const formattedDate = `${now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    
    const newInquiry: AdmissionInquiry = {
      ...inquiryData,
      id: `inq-${Date.now().toString().slice(-4)}`,
      status: 'New',
      submittedAt: formattedDate
    };

    setAdmissionInquiries(prev => [newInquiry, ...prev]);
    setIsAdmissionModalOpen(false);
    showToast(`Application submitted for ${newInquiry.studentName}! Our admissions team will contact you at ${newInquiry.phone}.`, 'success');
  };

  const openAdmissionModal = () => setIsAdmissionModalOpen(true);
  const closeAdmissionModal = () => setIsAdmissionModalOpen(false);

  // Gallery Modal
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryInitialPhotoId, setGalleryInitialPhotoId] = useState<string | undefined>(undefined);

  const openGalleryModal = (photoId?: string) => {
    setGalleryInitialPhotoId(photoId);
    setIsGalleryModalOpen(true);
  };

  const closeGalleryModal = () => {
    setIsGalleryModalOpen(false);
    setGalleryInitialPhotoId(undefined);
  };

  return (
    <CollegeContext.Provider
      value={{
        activePage,
        setActivePage: (p) => {
          setActivePage(p);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        selectedDepartmentId,
        setSelectedDepartmentId,
        navigateToDepartment,
        departments: DEPARTMENTS,
        facultyMembers: FACULTY_MEMBERS,
        courseMaterials,
        announcements,
        events: COLLEGE_EVENTS,
        achievements: ACHIEVEMENTS,
        facilities: FACILITIES,
        studentUser,
        isStudentLoggedIn: !!studentUser,
        loginStudent,
        logoutStudent,
        facultyUser,
        isFacultyLoggedIn: !!facultyUser,
        loginFaculty,
        logoutFaculty,
        addCourseMaterial,
        deleteCourseMaterial,
        addAnnouncement,
        deleteAnnouncement,
        admissionInquiries,
        submitAdmissionInquiry,
        isAdmissionModalOpen,
        openAdmissionModal,
        closeAdmissionModal,
        selectedAchievement,
        setSelectedAchievement,
        selectedFacility,
        setSelectedFacility,
        isGalleryModalOpen,
        galleryInitialPhotoId,
        openGalleryModal,
        closeGalleryModal,
        globalSearchQuery,
        setGlobalSearchQuery,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </CollegeContext.Provider>
  );
};

export const useCollege = () => {
  const context = useContext(CollegeContext);
  if (!context) {
    throw new Error('useCollege must be used within a CollegeProvider');
  }
  return context;
};
