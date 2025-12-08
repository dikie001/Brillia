import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Toaster } from "sonner";
import { lazy, Suspense, useEffect } from "react";
import LoadingPage from "./pages/LoadinPage";
import About from "./pages/SUPPORT/About";
import Help from "./pages/SUPPORT/Help";
import Results from "./pages/Results";
import AdminDashboard from "./pages/ADMIN/AdminDashboard";
import { trackDailyLogin } from "./lib/trackDailyLogin";
import { USER_INFO } from "./constants";
import { syncQuizResultsToFirebase } from "./lib/syncQuizResultsToFirebase";
import AdminAuth from "./pages/ADMIN/Auth";
import AdminMessages from "./pages/ADMIN/Messages";
import UsersPage from "./pages/ADMIN/Users";
import AdminSettings from "./pages/ADMIN/Settings";
import AdminReports from "./pages/ADMIN/Reports";
import AdminNotifications from "./pages/ADMIN/Notifications";
import VocabularyPage from "./pages/Vocabulary";
import { useUpdateListener } from "./hooks/useUpdateListener";
import PracticeCommunication from "./pages/PracticeCommunication";
const FactFrenzy = lazy(() => import("./pages/AmazingFacts"));
const BrainTeasers = lazy(() => import("./pages/BrainTeasers"));
const HomePage = lazy(() => import("./pages/HomePage"));
const MiniStories = lazy(() => import("./pages/MiniStories"));
const NotFound = lazy(() => import("./pages/NotFound"));
const QuizQuest = lazy(() => import("./pages/QuizQuest"));
const SettingsPage = lazy(() => import("./pages/Settings"));
const TongueTwisters = lazy(() => import("./pages/TongueTwisters"));
const WisdomNuggets = lazy(() => import("./pages/WisdomNuggets"));
const ContactDeveloper = lazy(() => import("./pages/SUPPORT/ContactDeveloper"));

const App = () => {
  //Initialize the listener
  useUpdateListener();

  // Track daily logins
  useEffect(() => {
    const userData = localStorage.getItem(USER_INFO);
    if (!userData) return;

    const parsedData = userData ? JSON.parse(userData) : [];
    try {
      trackDailyLogin(parsedData.id);
      syncQuizResultsToFirebase(parsedData.id);
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <Router>
      <Toaster richColors position="top-center" />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brain-teasers" element={<BrainTeasers />} />{" "}
          <Route path="/mini-stories" element={<MiniStories />} />{" "}
          <Route path="/quiz-quest" element={<QuizQuest />} />{" "}
          <Route path="/wisdom-nuggets" element={<WisdomNuggets />} />{" "}
          <Route path="/tongue-twisters" element={<TongueTwisters />} />
          <Route path="/amazing-facts" element={<FactFrenzy />} />
          <Route path="/results" element={<Results />} />
          <Route path="/communication" element={<PracticeCommunication />} />
          <Route path="/vocabulary" element={<VocabularyPage />} />
          <Route path="/contact-developer" element={<ContactDeveloper />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/help" element={<Help />} />
          <Route path="/admin-auth" element={<AdminAuth />} />
          <Route path="/admin/messages" element={<AdminMessages />} />
          <Route path="/admin/users" element={<UsersPage />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/notifications" element={<AdminNotifications />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
