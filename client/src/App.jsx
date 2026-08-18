import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SimpleFooter from './components/layout/SimpleFooter';
import SocialShareBar from './components/layout/SocialShareBar';
import Home from './pages/Home';
import AboutDetails from './pages/AboutDetails';
import TechnologyDetails from './pages/TechnologyDetails';
import TopicDetails from './pages/TopicDetails';
import InputDeviceDetail from './pages/InputDeviceDetail';
import OutputDeviceDetail from './pages/OutputDeviceDetail';
import PartsComputerDetail from './pages/PartsComputerDetail';
import Scientists from './pages/Scientists';
import Books from './pages/Books';
import Projects from './pages/Projects';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import SignIn from './pages/SignIn';
import ScrollToTop from './components/layout/ScrollToTop';
import AdminRoute from './components/admin/AdminRoute';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminCurriculum from './pages/admin/AdminCurriculum';
import AdminQuizzes from './pages/admin/AdminQuizzes';
import Quizzes from './pages/Quizzes';
import QuizTake from './pages/QuizTake';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAdminArea = location.pathname.startsWith('/admin');

  if (isAdminArea) {
    return (
      <>
        <ScrollToTop />
        <Routes>
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="curriculum" element={<AdminCurriculum />} />
            <Route path="quizzes" element={<AdminQuizzes />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Route>
        </Routes>
      </>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-sky-50 via-indigo-50/40 to-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/quizzes/:id" element={<QuizTake />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/about-details" element={<AboutDetails />} />
          <Route path="/technologies" element={<TechnologyDetails />} />
          <Route path="/class2/input-devices/:deviceSlug" element={<InputDeviceDetail />} />
          <Route path="/class3/output-devices/:deviceSlug" element={<OutputDeviceDetail />} />
          <Route path="/class4/parts-of-computer-3/:deviceSlug" element={<PartsComputerDetail fixedClassId="4" />} />
          <Route path="/class5/parts-of-computer-4/:deviceSlug" element={<PartsComputerDetail fixedClassId="5" />} />
          <Route path="/class6/parts-of-computer-5/:deviceSlug" element={<PartsComputerDetail fixedClassId="6" />} />
          <Route path="/:classSlug/:topicIdHtml" element={<TopicDetails />} />
          <Route path="/class:classId/:topicIdHtml" element={<TopicDetails />} />
          <Route path="/class/:classId/topic/:topicId" element={<TopicDetails />} />
          <Route path="/scientists" element={<Scientists />} />
          <Route path="/books" element={<Books />} />
          <Route path="/skills" element={<Navigate to="/quizzes" replace />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
        </Routes>
      </main>
      <SocialShareBar />
      {isHome ? <Footer /> : <SimpleFooter />}
      <ScrollToTop />
    </div>
  );
}

export default App;
