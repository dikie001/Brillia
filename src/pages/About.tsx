import Navbar from "@/components/app/Navbar";
import Footer from "@/components/app/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Sparkles, User, Globe } from "lucide-react";
import { APP_VERSION } from "@/constants";

const About = () => {
  const features = [
    "Brain Teasers - Challenge your mind with puzzles and riddles",
    "Mini Stories - Enjoy short, inspiring tales",
    "Quiz Quest - Test your knowledge with fun quizzes",
    "Wisdom Nuggets - Daily doses of wisdom and motivation",
    "Tongue Twisters - Improve your pronunciation skills",
    "Amazing Facts - Discover fascinating facts about the world",
    "Offline Support - Works completely offline once installed",
    "PWA Ready - Install as a native app on your device",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <Navbar currentPage="About " />

      <div className="pt-20 px-4 pb-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-indigo-100 dark:bg-gray-800">
                <Info className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              About Brillia
            </h1>
            <p className=" text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your daily companion for inspiration, learning, and fun. Discover
              amazing facts, challenge your mind, and grow every day.
            </p>
          </div>

          {/* App Details */}
          <Card className="bg-white rounded-3xl dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                App Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    What is Brillia?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Brillia is a Progressive Web App designed to inspire and
                    educate users daily. Whether you're looking to challenge
                    your brain, learn something new, or simply enjoy some
                    light-hearted content, Brillia has something for everyone.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Developer Info */}
          <Card className="bg-white rounded-3xl dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-indigo-500" />
                About the Developer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-indigo-100 dark:bg-gray-800 flex items-center justify-center">
                  <img
                    src="/images/apple.jpeg"
                    alt="dikie"
                    width={140}
                    height={140}
                    loading="lazy"
                    className="object-cover  rounded-full transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div>
                  <a
                    href="dikie.vercel.app"
                    className="text-xl text-indigo-500 underline font-semibold"
                  >
                    Dickens Omondi
                  </a>
                  <p className="text-gray-600 dark:text-gray-300">
                    Passionate developer creating inspiring web experiences
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                This app was built with ❤️ using modern web technologies
                including React, TypeScript, Tailwind CSS, and Vite. It's
                designed to be fast, accessible, and enjoyable for all users.
              </p>
            </CardContent>
          </Card>

          {/* Version & Tech */}
          <Card className="bg-white rounded-3xl dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-indigo-500" />
                Technical Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">Vite</Badge>
                <Badge variant="outline">PWA</Badge>
                <Badge variant="outline">ShadCN</Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Brillia is built as a Progressive Web App, meaning it can be
                installed on your device and works offline. All content is
                cached locally for the best user experience.
              </p>
            </CardContent>
          </Card>

          {/* App Version */}
          <Card className="bg-white rounded-3xl dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-500" />
                App Version & Updates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    Version
                  </span>
                  <Badge variant="outline">{APP_VERSION}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    Last Updated
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    5<sup>Th</sup> October 2024
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Regular updates bring new features, bug fixes, and content.
                  Check back often for the latest improvements!
                </p>
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
