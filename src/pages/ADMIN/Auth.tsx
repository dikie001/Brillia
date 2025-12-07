import { auth, db } from "@/firebase/config.firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  setDoc,
} from "firebase/firestore";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Loader2,
  Lock,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  // Changed from boolean to string | null to store the text
  const [loadingStatus, setLoadingStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const checkAdminExists = async () => {
    const q = query(collection(db, "admins"), limit(1));
    const snapshot = await getDocs(q);
    return !snapshot.empty;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingStatus("Initializing...");
    setError(null);
    setSuccess(null);

    const { email, username, password } = formData;

    try {
      if (isLogin) {
        // LOGIN FLOW
        setLoadingStatus("Verifying credentials...");
        await signInWithEmailAndPassword(auth, email, password);

        setLoadingStatus("Redirecting to dashboard...");
        setSuccess("Login successful!");
        navigate("/admin/dashboard");
      } else {
        // SIGN-UP FLOW
        setLoadingStatus("Checking system eligibility...");
        const adminExists = await checkAdminExists();

        if (adminExists) {
          throw new Error(
            "An administrator account already exists. Only one is allowed."
          );
        }

        setLoadingStatus("Creating secure account...");
        const userCred = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        setLoadingStatus("Setting up admin profile...");
        await setDoc(doc(db, "admins", userCred.user.uid), {
          username,
          email,
          createdAt: new Date().toISOString(),
          role: "super_admin",
        });

        setLoadingStatus("Finalizing setup...");
        setSuccess("Admin account created successfully!");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Auth error:", err);
      let msg = "An unexpected error occurred.";

      if (err.code === "auth/invalid-credential")
        msg = "Invalid email or password.";
      if (err.code === "auth/email-already-in-use")
        msg = "Email is already in use.";
      if (err.code === "auth/weak-password")
        msg = "Password should be at least 6 characters.";
      if (err.message) msg = err.message;

      setError(msg);
    } finally {
      // Only remove loading status if we didn't succeed (to keep the success message visible briefly)
      // or simply stop it immediately if you prefer.
      if (error) setLoadingStatus(null);
      else setTimeout(() => setLoadingStatus(null), 1000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="relative h-32 bg-gradient-to-r from-indigo-600 to-indigo-700 flex items-center justify-center">
          <div
            onClick={() => window.history.back()}
            className="absolute left-6 top-6 bg-black/10 z-50 dark:bg-white/10 p-2 rounded-full shadow hover:bg-black/20 dark:hover:white/20 cursor-pointer"
          >
            <ChevronLeft className="text-white" size={30} />
          </div>
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 flex flex-col items-center text-white">
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl mb-2 shadow-lg border border-white/20">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Admin Portal</h1>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {isLogin ? "Welcome Back" : "Create Admin Account"}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {isLogin
                ? "Enter your email to access the dashboard."
                : "Register the master administrator."}
            </p>
          </div>

          {/* Feedback Messages */}
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm flex items-center gap-2 border border-red-100 dark:border-red-900/50">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm flex items-center gap-2 border border-green-100 dark:border-green-900/50">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username - Only for Signup */}
            {!isLogin && (
              <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">
                  Admin Name
                </label>
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    required
                    type="text"
                    autoFocus
                    placeholder="Enter display name"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  required
                  type="email"
                  autoComplete="email"
                  placeholder="admin@company.com"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  required
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Button with Status Text */}
            <button
              disabled={!!loadingStatus}
              type="submit"
              className="w-full mt-6 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-indigo-500/20 disabled:opacity-70 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
            >
              {loadingStatus ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="animate-pulse">{loadingStatus}</span>
                </>
              ) : (
                <>
                  {isLogin ? "Sign In" : "Create Master Account"}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {isLogin ? "First time setup?" : "Already configured?"}{" "}
              <button
                type="button"
                disabled={!!loadingStatus}
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError(null);
                  setSuccess(null);
                }}
                className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline disabled:opacity-50"
              >
                {isLogin ? "Create Admin" : "Log in"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
