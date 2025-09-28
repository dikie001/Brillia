import { Facebook, MessageCircle, X } from "lucide-react";

type MainProps = {
  openContactAdmin: boolean;
  setOpenContactAdmin: (openContactAdmin: boolean) => void;
};

export default function ContactAdminModal({ setOpenContactAdmin }: MainProps) {
  return (
    <>
      <div
        onClick={() => setOpenContactAdmin(false)}
        className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 w-96 p-8 relative"
        >
          <button
            onClick={() => setOpenContactAdmin(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
              Contact Admin
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              Get in touch with Brillia support team
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-green-200 dark:hover:shadow-green-900/30"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">WhatsApp</span>
            </a>

            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 shadow-lg hover:shadow-indigo-200 dark:hover:shadow-indigo-900/30"
            >
              <Facebook className="w-5 h-5" />
              <span className="font-medium">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
