import Navbar from "@/components/app/Navbar";
import {
  Book,
  Newspaper,
  Puzzle,
  Quote,
  Sparkles,
  Trophy,
  Wand,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const sections = [
    {
      name: "Brain Teasers",
      icon: <Puzzle />,
      description: "Challenge your logical thinking",
      color: "from-purple-500 to-indigo-600",
      items: 6,
      to: "/brain-teasers",
    },
    {
      name: "Mini Stories",
      icon: <Book />,
      description: "Discover powerful narratives",
      color: "from-emerald-500 to-teal-600",
      items: 4,
      to: "/mini-stories",
    },
    {
      name: " Quiz Quest",
      icon: <Sparkles />,
      description: "Test your general knowledge",
      color: "from-cyan-500 to-blue-600",
      items: 5,
      to: "quiz-quest",
    },
    {
      name: "Wisdom Nuggets",
      icon: <Quote />,
      description: "Daily inspiration and insights",
      color: "from-amber-500 to-orange-600",
      items: 5,
      to: "wisdom-nuggets",
    },
    {
      name: "Speech Drill",
      icon: <Wand />,
      description: "Master pronunciation and fluency",
      color: "from-pink-500 to-rose-600",
      items: 5,
      to: "speech-drills",
    },
    {
      name: " Fact Frenzy",
      icon: <Newspaper />,
      description: "Test your general knowledge",
      color: "from-cyan-500 to-blue-600",
      items: 5,
      to: "fact-frenzy",
    },
  ];

  // Handle category click
  const HandleCategoryClick = (destination: string) => {
    navigate(destination);
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Background */}
      <Navbar/>

      <div className="relative z-10 max-w-6xl w-full text-center">
        {/* Header */}
        <div className="mb-8 mt-20">
    
          <p className="text-lg text-gray-600 mb-4 font-medium max-w-3xl mx-auto leading-relaxed">
            Brain challenges. Daily insights. Smarter you
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12"></div>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {sections.map((section, index) => (
            <button
              key={section.name}
              onClick={() => HandleCategoryClick(section.to)}
              className="group bg-white/80 cursor-pointer backdrop-blur-sm p-4 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${section.color} transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300`}
              ></div>

              <div className="flex flex-col items-center text-center">
                <div
                  className={`p-4 lg:p-6 rounded-3xl bg-gradient-to-r ${section.color} shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4 lg:mb-6 group-hover:scale-110`}
                >
                  {React.cloneElement(section.icon, {
                    
                    className: "text-white",
                  })}
                </div>

                <h3 className="max-sm:text-xl text-2xl font-bold text-gray-900 mb-1 lg:mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {section.name}
                </h3>
                <p className="text-gray-600 max-sm:text-sm  font-medium mb-4 leading-relaxed">
                  {section.description}
                </p>

                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
             
                  <span className="flex items-center text-green-600">
                    <Trophy className="w-4 h-4 mr-1" />0 completed
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
