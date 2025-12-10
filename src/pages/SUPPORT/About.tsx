import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_VERSION } from "@/constants";
import {
  BookOpen,
  BrainCircuit,
  Code2,
  Gem,
  Globe,
  Heart,
  Info,
  Lightbulb,
  Mic,
  Smartphone,
  Wifi,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <BrainCircuit className="w-5 h-5 text-indigo-600" />,
      title: "Quick Challenges",
      desc: "Puzzles & riddles",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-pink-600" />,
      title: "Flash Stories",
      desc: "Short tales",
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-amber-600" />,
      title: "Fun Facts",
      desc: "Daily fascination",
    },
    {
      icon: <Gem className="w-5 h-5 text-emerald-600" />,
      title: "Life Gems",
      desc: "Daily wisdom",
    },
    {
      icon: <Mic className="w-5 h-5 text-cyan-600" />,
      title: "Clear Speech",
      desc: "Pronunciation",
    },
    {
      icon: <Wifi className="w-5 h-5 text-slate-600" />,
      title: "Offline Ready",
      desc: "No internet needed",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 text-gray-900 dark:text-gray-100 selection:bg-indigo-200 dark:selection:bg-indigo-800">
      <Navbar currentPage="About" />

      <div className="pt-24 px-4 pb-12 max-w-5xl mx-auto space-y-8">
        {/* 1. SIMPLE HEADER (Restored & Minimal) */}
        <div className="text-center space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-flex p-3 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm mb-2">
            <Info className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Brillia
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Your daily companion for inspiration, learning, and fun.
          </p>
        </div>

        {/* 2. COMPACT FEATURES GRID (Smaller cards) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 animate-in fade-in slide-in-from-bottom-8 duration-500 delay-100">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="border-none shadow-sm bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                <div className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {feature.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 3. DEVELOPER & TECH (The layout you liked) */}
        <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-500 delay-200">
          {/* Developer Profile */}
          <Card className="border-none shadow-md bg-white dark:bg-gray-800 overflow-hidden">
            <CardContent className="p-8 flex flex-col items-center text-center md:items-start md:text-left gap-6 h-full justify-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-indigo-50 dark:ring-gray-700 shadow-xl">
                  <img
                    src="/images/apple.jpeg"
                    alt="Dickens Omondi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-indigo-500 text-white p-1.5 rounded-full ring-4 ring-white dark:ring-gray-800">
                  <Heart className="w-3 h-3 fill-current" />
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <h3 className="text-xl font-bold">Dickens Omondi</h3>
                  <p className="text-sm text-indigo-500 font-medium">
                    Full Stack Developer
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Passionate about crafting intuitive, high-performance web
                  experiences. Brillia is a showcase of modern PWA capabilities.
                </p>
                <a
                  href="https://dikie.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:underline mt-2"
                >
                  Visit Portfolio &rarr;
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Tech Stack */}
          <Card className="border-none shadow-md bg-white dark:bg-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Code2 className="w-5 h-5 text-indigo-500" />
                Under the Hood
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Built with a focus on performance, accessibility, and offline
                capability using the latest web standards.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "React 18",
                  "TypeScript",
                  "Tailwind CSS",
                  "Vite",
                  "PWA",
                  "Shadcn UI",
                  "Zustand",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-600"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-700 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Globe className="w-4 h-4" />
                    <span>PWA Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Smartphone className="w-4 h-4" />
                    <span>Mobile Ready</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs font-medium text-gray-400 uppercase tracking-widest pt-2">
                  <span>Version</span>
                  <span>{APP_VERSION}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;