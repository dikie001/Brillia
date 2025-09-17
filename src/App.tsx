import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BrainTeasers from "./pages/BrainTeasers";
import FactFrenzy from "./pages/FactFrenzy";
import HomePage from "./pages/HomePage";
import MiniStories from "./pages/MiniStories";
import QuizQuest from "./pages/QuizQuest";
import SpeechDrills from "./pages/SpeechDrills";
import WisdomNuggets from "./pages/WisdomNuggets";
import NotFound from "./pages/NotFound";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brain-teasers" element={<BrainTeasers />} />{" "}
        <Route path="/mini-stories" element={<MiniStories />} />{" "}
        <Route path="/quiz-quest" element={<QuizQuest />} />{" "}
        <Route path="/wisdom-nuggets" element={<WisdomNuggets />} />{" "}
        <Route path="/speech-drills" element={<SpeechDrills />} />
        <Route path="/fact-frenzy" element={<FactFrenzy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
