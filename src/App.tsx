import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Toaster } from "sonner";
import { lazy, Suspense } from "react";
import LoadingPage from "./pages/LoadinPage";
import About from "./pages/About";
import Help from "./pages/Help";
const FactFrenzy = lazy(() => import("./pages/AmazingFacts"));
const GuidePage = lazy(() => import("./pages/Guide"));
const BrainTeasers = lazy(() => import("./pages/BrainTeasers"));
const Guide = lazy(() => import("./pages/Guide"));
const HomePage = lazy(() => import("./pages/HomePage"));
const MiniStories = lazy(() => import("./pages/MiniStories"));
const NotFound = lazy(() => import("./pages/NotFound"));
const QuizQuest = lazy(() => import("./pages/QuizQuest"));
const SettingsPage = lazy(() => import("./pages/Settings"));
const TongueTwisters = lazy(() => import("./pages/TongueTwisters"));
const WisdomNuggets = lazy(() => import("./pages/WisdomNuggets"));
const ContactDeveloper = lazy(() => import("./pages/ContactDeveloper"));

const App = () => {
  return (
    <Router>
      <Toaster richColors position="top-center" />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brain-teasers" element={<BrainTeasers />} />{" "}
          <Route path="/guide" element={<Guide />} />
          <Route path="/mini-stories" element={<MiniStories />} />{" "}
          <Route path="/quiz-quest" element={<QuizQuest />} />{" "}
          <Route path="/wisdom-nuggets" element={<WisdomNuggets />} />{" "}
          <Route path="/tongue-twisters" element={<TongueTwisters />} />
          <Route path="/amazing-facts" element={<FactFrenzy />} />
          <Route path="/contact-developer" element={<ContactDeveloper />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/guide" element={<GuidePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
