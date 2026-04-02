import ExamPrep from "@/components/app/ExamPrep";
import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";

export default function ExamPrepPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
      <Navbar currentPage="Exam Prep" />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <ExamPrep initialView="subjects" />
      </main>
      <Footer />
    </div>
  );
}
