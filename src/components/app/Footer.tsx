import { Laptop2 } from 'lucide-react';

const Footer = () => {
  return (
    <div className="mt-10 mb-4  flex sm:flex-row gap-2 justify-center items-center text-center">
      <p className="text-gray-400 text-sm">
        from code to impact -{" "}
        <span className="text-green-500 dark:text-green-400 underline font-medium">
          <a
            href="https://dikie.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            dikie.dev
          </a>
        </span>
      </p>
      <Laptop2 className="text-green-500 dark:text-green-400 w-4 h-4 sm:w-5 sm:h-5" />
    </div>
  );
}

export default Footer