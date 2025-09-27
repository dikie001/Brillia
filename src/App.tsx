import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FactFrenzy from "./pages/AmazingFacts";
import BrainTeasers from "./pages/BrainTeasers";
import HomePage from "./pages/HomePage";
import MiniStories from "./pages/MiniStories";
import NotFound from "./pages/NotFound";
import QuizQuest from "./pages/QuizQuest";
import SettingsPage from "./pages/Settings";
import TongueTwisters from "./pages/TongueTwisters";
import WisdomNuggets from "./pages/WisdomNuggets";

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brain-teasers" element={<BrainTeasers />} />{" "}
        <Route path="/mini-stories" element={<MiniStories />} />{" "}
        <Route path="/quiz-quest" element={<QuizQuest />} />{" "}
        <Route path="/wisdom-nuggets" element={<WisdomNuggets />} />{" "}
        <Route path="/tongue-twisters" element={<TongueTwisters />} />
        <Route path="/amazing-facts" element={<FactFrenzy />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
