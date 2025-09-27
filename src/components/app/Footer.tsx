import { Laptop2 } from 'lucide-react';

const Footer = () => {
  return (
    <div className="mt-10 mb-2 flex  sm:flex-row gap-2 justify-center items-center text-center">
      <p className="text-gray-400 text-sm sm:text-base">
        from code to impact -{" "}
        <span className="text-indigo-400 dark:text-indigo-300 underline font-medium">
          <a
            href="https://dikie.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            dikie.dev
          </a>
        </span>
      </p>
      <Laptop2 className="text-indigo-400 dark:text-indigo-300 w-4 h-4 sm:w-5 sm:h-5" />
    </div>
  );
}

export default Footer