import React from 'react';
import { CollegeProvider, useCollege } from './context/CollegeContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/home/HeroSection';
import { AboutSection } from './components/home/AboutSection';
import { ProgrammesSection } from './components/home/ProgrammesSection';
import { AchievementsSection } from './components/home/AchievementsSection';
import { PedagogySection } from './components/home/PedagogySection';
import { WhySITSection } from './components/home/WhySITSection';
import { FacilitiesSection } from './components/home/FacilitiesSection';
import { CampusShowcaseSection } from './components/home/CampusShowcaseSection';
import { PlacementsSection } from './components/home/PlacementsSection';
import { StudentGovernanceSection } from './components/home/StudentGovernanceSection';
import { DepartmentView } from './components/academics/DepartmentView';
import { FacultyDirectory } from './components/academics/FacultyDirectory';
import { StudentPortal } from './components/portal/StudentPortal';
import { FacultyCMS } from './components/cms/FacultyCMS';
import { AdmissionsPage } from './components/admissions/AdmissionsPage';
import { AdmissionModal } from './components/admissions/AdmissionModal';
import { AboutPage } from './components/pages/AboutPage';
import { AchievementsPage } from './components/pages/AchievementsPage';
import { CampusLifePage } from './components/pages/CampusLifePage';
import { CareerDesignPage } from './components/pages/CareerDesignPage';
import { HandsOnLearningPage } from './components/pages/HandsOnLearningPage';
import { FacilitiesPage } from './components/pages/FacilitiesPage';
import { IQACPage } from './components/pages/IQACPage';
import { AlumniPage } from './components/pages/AlumniPage';
import { CampusGalleryModal } from './components/common/CampusGalleryModal';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const GalleryContainer: React.FC = () => {
  const { isGalleryModalOpen, galleryInitialPhotoId, closeGalleryModal } = useCollege();
  return (
    <CampusGalleryModal
      isOpen={isGalleryModalOpen}
      initialPhotoId={galleryInitialPhotoId}
      onClose={closeGalleryModal}
    />
  );
};

const ToastContainer: React.FC = () => {
  const { toast, setToast } = useCollege();
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl border text-xs sm:text-sm font-semibold ${
        toast.type === 'success'
          ? 'bg-emerald-900 text-emerald-100 border-emerald-700'
          : toast.type === 'error'
          ? 'bg-rose-900 text-rose-100 border-rose-700'
          : 'bg-slate-900 text-slate-100 border-slate-700'
      }`}>
        {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
        {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
        {toast.type === 'info' && <Info className="w-5 h-5 text-amber-400 shrink-0" />}
        <span>{toast.message}</span>
        <button
          onClick={() => setToast(null)}
          className="ml-2 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const MainContent: React.FC = () => {
  const { activePage } = useCollege();

  // Route pages according to active state
  switch (activePage) {
    case 'department':
      return <DepartmentView />;
    case 'faculty-directory':
      return <FacultyDirectory />;
    case 'student-portal':
      return <StudentPortal />;
    case 'faculty-cms':
      return <FacultyCMS />;
    case 'admissions':
      return <AdmissionsPage />;
    case 'about':
      return <AboutPage />;
    case 'achievements':
      return <AchievementsPage />;
    case 'campus-life':
      return <CampusLifePage />;
    case 'career-design':
    case 'placements':
      return <CareerDesignPage />;
    case 'hands-on-learning':
      return <HandsOnLearningPage />;
    case 'facilities':
      return <FacilitiesPage />;
    case 'iqac':
      return <IQACPage />;
    case 'alumni':
      return <AlumniPage />;
    case 'student-governance':
      return (
        <div className="bg-slate-50 min-h-screen pb-16">
          <StudentGovernanceSection />
        </div>
      );
    case 'home':
    default:
      return (
        <main>
          <HeroSection />
          <AboutSection />
          <CampusShowcaseSection />
          <ProgrammesSection />
          <AchievementsSection />
          <PedagogySection />
          <WhySITSection />
          <FacilitiesSection />
          <PlacementsSection />
          <StudentGovernanceSection />
        </main>
      );
  }
};

export function App() {
  return (
    <CollegeProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
        <Header />
        <div className="flex-1">
          <MainContent />
        </div>
        <Footer />
        <AdmissionModal />
        <GalleryContainer />
        <ToastContainer />
      </div>
    </CollegeProvider>
  );
}

export default App;
