import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Book,
    CheckCircle,
    ChevronRight,
    Home,
    Newspaper,
    Puzzle,
    Quote,
    Sparkles,
    Star,
    Wand
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Guide = () => {
  const navigate = useNavigate();

  const features = [
    {
      name: "Brain Teasers",
      icon: Puzzle,
      description: "Challenge your logical thinking with puzzles and riddles.",
      steps: [
        "Navigate to Brain Teasers from the menu.",
        "Choose a category or view all.",
        "Read the teaser and think of the answer.",
        "Click 'Show Answer' when ready.",
        "Mark as favorite if you like it."
      ],
      to: "/brain-teasers"
    },
    {
      name: "Mini Stories",
      icon: Book,
      description: "Discover powerful narratives and life lessons.",
      steps: [
        "Go to Mini Stories section.",
        "Browse stories by category or favorites.",
        "Click on a story to read.",
        "Use pagination to navigate pages.",
        "Save favorites for later."
      ],
      to: "/mini-stories"
    },
    {
      name: "Quiz Quest",
      icon: Sparkles,
      description: "Test your general knowledge with fun quizzes.",
      steps: [
        "Select Quiz Quest from the menu.",
        "Choose a quiz category.",
        "Answer questions within time limit.",
        "View your score and review answers.",
        "Track progress in your profile."
      ],
      to: "/quiz-quest"
    },
    {
      name: "Wisdom Nuggets",
      icon: Quote,
      description: "Daily inspiration and insightful quotes.",
      steps: [
        "Visit Wisdom Nuggets page.",
        "Read daily quotes and wisdom.",
        "Filter by categories if available.",
        "Share quotes with friends.",
        "Add to favorites."
      ],
      to: "/wisdom-nuggets"
    },
    {
      name: "Tongue Twisters",
      icon: Wand,
      description: "Master pronunciation and fluency with fun phrases.",
      steps: [
        "Access Tongue Twisters section.",
        "Select a twister to practice.",
        "Click play to hear pronunciation.",
        "Try saying it fast multiple times.",
        "Challenge yourself with harder ones."
      ],
      to: "/tongue-twisters"
    },
    {
      name: "Amazing Facts",
      icon: Newspaper,
      description: "Learn cool and interesting random facts.",
      steps: [
        "Go to Amazing Facts page.",
        "Browse through various facts.",
        "Filter by categories.",
        "Read and learn new information.",
        "Share interesting facts."
      ],
      to: "/amazing-facts"
    }
  ];

  const generalTips = [
    "Use the menu button (☰) to navigate between sections.",
    "Toggle dark/light theme with the sun/moon icon.",
    "Install the app for offline access using PWA install.",
    "Your progress and favorites are saved locally.",
    "Check settings for more customization options."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:bg-gray-900 dark:from-transparent dark:via-transparent dark:to-transparent">
      <Navbar currentPage="Guide" />

      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            How to Use Brillia
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Welcome to Brillia! This guide will help you get started with all the amazing features designed to boost your brainpower and knowledge.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg">
                      <IconComponent className="w-6 h-6 text-indigo-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.name}</CardTitle>
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 mb-4">
                    {feature.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <Button
                    onClick={() => navigate(feature.to)}
                    className="w-full"
                    variant="outline"
                  >
                    Try {feature.name}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              General Tips
            </CardTitle>
            <CardDescription>
              Helpful tips to make the most of your Brillia experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {generalTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-indigo-600">{index + 1}</span>
                  </div>
                  <span className="text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button onClick={() => navigate("/")} size="lg">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Guide;
