/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "@/components/app/Navbar";
import { db } from "@/firebase/config.firebase";
import { collection, deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore";
import {
  Calendar,
  MessageSquare,
  Search,
  Trash2,
  User,
  XCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import LoaderPage from "./Loader";

// --- TYPES ---
interface UserMessage {
  id: string;
  name: string;
  message: string;
  userId: string;
  createdAt: any; // Firestore Timestamp
}

const AdminMessages = () => {
  const [messages, setMessages] = useState<UserMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // --- FETCH MESSAGES ---
  const fetchMessages = async () => {
    try {
      setLoading(true);
      // Assuming collection name is 'messages' - Change this if it is 'contact' or 'feedback'
      const msgRef = collection(db, "messages");
      const q = query(msgRef, orderBy("createdAt", "desc"));
      
      const snapshot = await getDocs(q);
      const fetchedMsgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as UserMessage[];

      setMessages(fetchedMsgs);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // --- DELETE MESSAGE ---
  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this message?")) {
      try {
        await deleteDoc(doc(db, "messages", id));
        setMessages((prev) => prev.filter((msg) => msg.id !== id));
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    }
  };

  // --- FORMAT DATE ---
  const formatDate = (timestamp: any) => {
    if (!timestamp) return "Unknown date";
    // Handle Firestore Timestamp or JS Date
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  // --- FILTER ---
  const filteredMessages = messages.filter(
    (msg) =>
      msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <LoaderPage />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <Navbar />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-indigo-600" />
              User Messages
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              View and manage incoming feedback from students.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white shadow-sm"
            />
          </div>
        </div>

        {/* Messages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMessages.length > 0 ? (
            filteredMessages.map((msg) => (
              <div
                key={msg.id}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-200 flex flex-col h-full"
              >
                {/* Card Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold uppercase shrink-0">
                      {msg.name.charAt(0)}
                    </div>
                    <div className="overflow-hidden">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                        {msg.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                        <User className="w-3 h-3" />
                        <span className="truncate max-w-[120px]">
                          ID: {msg.userId.slice(0, 8)}...
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    title="Delete Message"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Message Body */}
                <div className="flex-grow mb-4">
                  <div className="relative">
                    <MessageSquare className="absolute -left-1 -top-1 w-4 h-4 text-gray-200 dark:text-gray-700 opacity-50" />
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed pl-4 pt-1 whitespace-pre-wrap">
                      {msg.message}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 mt-auto border-t border-gray-100 dark:border-gray-800 flex items-center gap-2 text-xs text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <time>{formatDate(msg.createdAt)}</time>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 flex flex-col items-center justify-center text-gray-400">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <XCircle className="w-8 h-8" />
              </div>
              <p className="text-lg font-medium">No messages found</p>
              <p className="text-sm">Try adjusting your search or come back later.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;