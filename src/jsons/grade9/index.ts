import grade9Mathematics from "./grade9Mathematics";
import grade9English from "./grade9English";
import grade9Kiswahili from "./grade9Kiswahili";
import grade9Biology from "./grade9Biology";
import grade9Chemistry from "./grade9Chemistry";
import grade9Physics from "./grade9Physics";
import grade9History from "./grade9History";
import grade9Geography from "./grade9Geography";
import grade9BusinessStudies from "./grade9BusinessStudies";
import grade9ComputerStudies from "./grade9ComputerStudies";
import type { Grade9Question } from "@/types";

export interface SubjectInfo {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  questions: Grade9Question[];
}

const grade9Subjects: SubjectInfo[] = [
  {
    id: "mathematics",
    name: "Mathematics",
    icon: "📐",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    questions: grade9Mathematics,
  },
  {
    id: "english",
    name: "English",
    icon: "📖",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    questions: grade9English,
  },
  {
    id: "kiswahili",
    name: "Kiswahili",
    icon: "🗣️",
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    borderColor: "border-amber-200 dark:border-amber-800",
    questions: grade9Kiswahili,
  },
  {
    id: "biology",
    name: "Biology",
    icon: "🧬",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
    questions: grade9Biology,
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: "⚗️",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    questions: grade9Chemistry,
  },
  {
    id: "physics",
    name: "Physics",
    icon: "⚡",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    questions: grade9Physics,
  },
  {
    id: "history",
    name: "History",
    icon: "🏛️",
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
    borderColor: "border-rose-200 dark:border-rose-800",
    questions: grade9History,
  },
  {
    id: "geography",
    name: "Geography",
    icon: "🌍",
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    borderColor: "border-teal-200 dark:border-teal-800",
    questions: grade9Geography,
  },
  {
    id: "business-studies",
    name: "Business Studies",
    icon: "💼",
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    questions: grade9BusinessStudies,
  },
  {
    id: "computer-studies",
    name: "Computer Studies",
    icon: "💻",
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    borderColor: "border-cyan-200 dark:border-cyan-800",
    questions: grade9ComputerStudies,
  },
];

export default grade9Subjects;
