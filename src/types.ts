export type PageId = 
  | 'home'
  | 'about'
  | 'academics'
  | 'department'
  | 'faculty-directory'
  | 'admissions'
  | 'hands-on-learning'
  | 'career-design'
  | 'campus-life'
  | 'facilities'
  | 'achievements'
  | 'student-governance'
  | 'placements'
  | 'alumni'
  | 'iqac'
  | 'student-portal'
  | 'faculty-cms'
  | 'events'
  | 'contact';

export interface Department {
  id: string;
  name: string;
  shortCode: string;
  description: string;
  intake: number;
  established: number;
  hodName: string;
  hodQualification: string;
  hodMessage: string;
  hodPhoto?: string;
  vision: string;
  mission: string[];
  labs: {
    name: string;
    description: string;
    equipment: string;
  }[];
  keyHighlights: string[];
  semesters: number;
}

export interface FacultyMember {
  id: string;
  name: string;
  departmentId: string;
  designation: 'HOD & Professor' | 'Professor' | 'Associate Professor' | 'Assistant Professor' | 'Lab Instructor';
  qualification: string;
  specialization: string;
  experienceYears: number;
  email: string;
  phone?: string;
  subjectsTaught: string[];
  publicationsCount: number;
  photoUrl: string;
  bio: string;
}

export interface CourseMaterial {
  id: string;
  title: string;
  subjectCode: string;
  subjectName: string;
  departmentId: string;
  semester: number;
  category: 'Lecture Notes' | 'Lab Manual' | 'Question Bank' | 'Assignment' | 'Syllabus Copy' | 'Reference PPT';
  facultyName: string;
  uploadedBy?: string;
  uploadedAt: string;
  fileSize: string;
  fileType: 'PDF' | 'PPT' | 'DOCX' | 'ZIP';
  downloadUrl?: string;
  fileUrl?: string;
  description?: string;
}

export interface Announcement {
  id: string;
  title: string;
  category: 'Circular' | 'VTU Notification' | 'Exam' | 'Hackathon & Workshop' | 'Placement' | 'General';
  date: string;
  departmentId?: string; // 'all' or specific dept
  isImportant?: boolean;
  priority?: 'High' | 'Normal' | 'Urgent';
  content: string;
  attachmentName?: string;
  attachmentUrl?: string;
  author: string;
}

export interface CollegeEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  venue: string;
  category: 'Technical' | 'Cultural' | 'Sports' | 'Academic' | 'Workshop';
  registeredCount?: number;
  image?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  event: string;
  organizer: string;
  prize: string;
  date: string;
  team: string[];
  department: string;
  description: string;
  imageUrl: string;
  badge: string;
}

export interface StudentProfile {
  usn: string;
  name: string;
  email: string;
  departmentId: string;
  branch?: string;
  semester: number;
  section: string;
  cgpa: number;
  attendancePercentage: number;
  mentorName: string;
  subjects: {
    code: string;
    name: string;
    faculty: string;
    attendance: number;
    internalMarks: number;
    maxMarks: number;
    grade: string;
  }[];
  fees: {
    totalFee: number;
    paidFee: number;
    pendingFee: number;
    dueDate: string;
    status: 'Paid' | 'Partial' | 'Pending';
  };
  libraryBooks: {
    title: string;
    accessionNo: string;
    issueDate: string;
    dueDate: string;
  }[];
}

export interface AdmissionInquiry {
  id: string;
  fullName?: string;
  studentName?: string;
  email: string;
  phone: string;
  branch?: string;
  coursePreferred?: string;
  quota: 'KCET' | 'COMEDK' | 'Management' | 'Lateral Entry (Diploma)';
  kcetRank?: string;
  pucPercentage?: string;
  city?: string;
  state?: string;
  status: 'New' | 'Under Review' | 'Contacted' | 'Seat Confirmed' | 'pending';
  submittedAt: string;
}

export interface Facility {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  timing?: string;
  location?: string;
}
