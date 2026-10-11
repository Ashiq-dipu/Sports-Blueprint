import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Toaster } from 'sonner';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AssessmentModal } from './components/AssessmentModal';
import { VideoModal } from './components/VideoModal';
import { LightboxModal } from './components/LightboxModal';
import { ConsultationModal } from './components/ConsultationModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ServicesPage } from './pages/ServicesPage';
import { AthletesPage } from './pages/AthletesPage';
import { CoachesPage } from './pages/CoachesPage';
import { TrainingPage } from './pages/TrainingPage';
import { ResultsPage } from './pages/ResultsPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { VideosPage } from './pages/VideosPage';
import { PhotosPage } from './pages/PhotosPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { ContactPage } from './pages/ContactPage';

const queryClient = new QueryClient();

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const activePage = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  const [preselectedProgram, setPreselectedProgram] = useState('');
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<any>(null);
  const [lightboxPhoto, setLightboxPhoto] = useState<any>(null);
  const [lightboxList, setLightboxList] = useState<any[]>([]);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleNav = (page: string) => {
    navigate(page === 'home' ? '/' : `/${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProgramEnrollment = (programName: string) => {
    setPreselectedProgram(programName);
    navigate('/registration');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLightbox = (photo: any, list: any[]) => {
    setLightboxPhoto(photo);
    setLightboxList(list);
  };

  return (
    <div className="app-container min-h-screen flex flex-col">
      {/* Toast Notice */}
      {toastMessage && (
        <div className="toast-notice">
          <span style={{ color: 'var(--accent-volt)', fontWeight: 800 }}>⚡</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNav}
        openAssessment={() => setIsAssessmentOpen(true)}
        openConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Dynamic Page Views with Swift Transitions */}
      <main key={activePage} className="page-transition-swift flex-1">
        <Routes>
          <Route path="/" element={<HomePage setActivePage={handleNav} onOpenVideo={setActiveVideo} openAssessment={() => setIsAssessmentOpen(true)} />} />
          <Route path="/about" element={<AboutPage setActivePage={handleNav} />} />
          <Route path="/programs" element={<ProgramsPage setActivePage={handleNav} openAssessment={() => setIsAssessmentOpen(true)} onSelectProgramToRegister={handleProgramEnrollment} />} />
          <Route path="/services" element={<ServicesPage setActivePage={handleNav} openConsultation={() => setIsConsultationOpen(true)} />} />
          <Route path="/athletes" element={<AthletesPage setActivePage={handleNav} />} />
          <Route path="/coaches" element={<CoachesPage setActivePage={handleNav} openConsultation={() => setIsConsultationOpen(true)} />} />
          <Route path="/training" element={<TrainingPage setActivePage={handleNav} openConsultation={() => setIsConsultationOpen(true)} />} />
          <Route path="/results" element={<ResultsPage setActivePage={handleNav} />} />
          <Route path="/testimonials" element={<TestimonialsPage setActivePage={handleNav} onOpenVideo={setActiveVideo} />} />
          <Route path="/videos" element={<VideosPage onOpenVideo={setActiveVideo} showToast={showToast} />} />
          <Route path="/photos" element={<PhotosPage onOpenLightbox={handleOpenLightbox} showToast={showToast} />} />
          <Route path="/resources" element={<ResourcesPage showToast={showToast} openAssessment={() => setIsAssessmentOpen(true)} />} />
          <Route path="/registration" element={<RegistrationPage preselectedProgram={preselectedProgram} showToast={showToast} />} />
          <Route path="/contact" element={<ContactPage openConsultation={() => setIsConsultationOpen(true)} showToast={showToast} />} />
          <Route path="*" element={<HomePage setActivePage={handleNav} onOpenVideo={setActiveVideo} openAssessment={() => setIsAssessmentOpen(true)} />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer
        setActivePage={handleNav}
        showToast={showToast}
      />

      {/* Modals */}
      <AssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        onSelectProgram={handleProgramEnrollment}
      />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        showToast={showToast}
      />
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
        onEnroll={() => {
          setActiveVideo(null);
          handleProgramEnrollment('Elite Athlete Program');
        }}
      />
      <LightboxModal
        photo={lightboxPhoto}
        photos={lightboxList}
        onClose={() => setLightboxPhoto(null)}
        onNavigate={(p: any) => setLightboxPhoto(p)}
      />
    </div>
  );
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
