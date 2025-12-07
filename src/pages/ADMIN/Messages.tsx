/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "@/components/app/Navbar";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/firebase/config.firebase";
import { collection, deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore";
import {
  Clock,
  Inbox,
  Mail,
  Search,
  Trash2,
  User,
  XCircle
} from "lucide-react";
import { useEffect, useState } from "react";

// --- TYPES ---
interface UserMessage {
  id: string;
  name: string;
  message: string;
  userId: string;
  createdAt: any;
}

const AdminMessages = () => {
  const [messages, setMessages] = useState<UserMessage[]>([]);
  const [selectedMsgId, setSelectedMsgId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // --- FETCH MESSAGES ---
  const fetchMessages = async () => {
    try {
      setLoading(true);
      const msgRef = collection(db, "messages");
      const q = query(msgRef, orderBy("createdAt", "desc"));
      
      const snapshot = await getDocs(q);
      const fetchedMsgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as UserMessage[];

      setMessages(fetchedMsgs);
      // Automatically select the first message if available
      if (fetchedMsgs.length > 0) {
        setSelectedMsgId(fetchedMsgs[0].id);
      }
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
  const handleDelete = async (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation(); 
    if (confirm("Delete this message permanently?")) {
      try {
        await deleteDoc(doc(db, "messages", id));
        const updated = messages.filter((msg) => msg.id !== id);
        setMessages(updated);
        
        if (selectedMsgId === id) {
          setSelectedMsgId(updated.length > 0 ? updated[0].id : null);
        }
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    }
  };

  // --- FORMAT DATE ---
  const formatDate = (timestamp: any) => {
    if (!timestamp) return "Unknown";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date);
  };

  const formatTime = (timestamp: any) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat("en-US", {
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

  const selectedMessage = messages.find((m) => m.id === selectedMsgId);

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-950 flex flex-col overflow-hidden">
      <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-4 shrink-0">
        <Navbar />
      </div>

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-6 min-h-0">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 h-full flex overflow-hidden">
          
          {/* --- LEFT SIDE: LIST VIEW --- */}
          <div className="w-full md:w-1/3 border-r border-gray-100 dark:border-gray-800 flex flex-col bg-gray-50/50 dark:bg-gray-900/50">
            {/* List Header */}
            <div className="p-4 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Inbox className="w-5 h-5 text-indigo-600" /> Inbox
                {!loading && (
                  <span className="text-xs font-normal text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                    {filteredMessages.length}
                  </span>
                )}
              </h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white transition-all"
                />
              </div>
            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto p-2 space-y-2">
              {loading ? (
                // SKELETON LIST ITEMS
                [...Array(6)].map((_, i) => (
                  <div key={i} className="p-4 rounded-xl border border-transparent bg-white dark:bg-gray-900/40">
                    <div className="flex justify-between items-center mb-2">
                      <Skeleton className="h-4 w-24 rounded-md" />
                      <Skeleton className="h-3 w-12 rounded-md" />
                    </div>
                    <Skeleton className="h-3 w-full mb-1.5 rounded-md" />
                    <Skeleton className="h-3 w-2/3 rounded-md" />
                  </div>
                ))
              ) : filteredMessages.length > 0 ? (
                filteredMessages.map((msg) => (
                  <button
                    key={msg.id}
                    onClick={() => setSelectedMsgId(msg.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 group relative border ${
                      selectedMsgId === msg.id
                        ? "bg-white dark:bg-gray-800 border-indigo-200 dark:border-indigo-500/30 shadow-md z-10"
                        : "bg-transparent border-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span
                        className={`font-semibold text-sm truncate max-w-[70%] ${
                          selectedMsgId === msg.id
                            ? "text-indigo-600 dark:text-indigo-400"
                            : "text-gray-900 dark:text-gray-100"
                        }`}
                      >
                        {msg.name}
                      </span>
                      <span className="text-[10px] text-gray-400 whitespace-nowrap">
                        {formatDate(msg.createdAt)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                      {msg.message}
                    </p>
                  </button>
                ))
              ) : (
                <div className="p-8 text-center text-gray-400 text-sm">
                  No messages found.
                </div>
              )}
            </div>
          </div>

          {/* --- RIGHT SIDE: PREVIEW PANEL --- */}
          <div className="hidden md:flex flex-1 flex-col bg-white dark:bg-gray-900 relative">
            {loading ? (
              // SKELETON PREVIEW
              <div className="flex flex-col h-full animate-pulse">
                {/* Skeleton Header */}
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-start gap-4">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-48 rounded-md" />
                    <div className="flex gap-3">
                      <Skeleton className="h-3 w-24 rounded-md" />
                      <Skeleton className="h-3 w-24 rounded-md" />
                    </div>
                  </div>
                </div>
                {/* Skeleton Body */}
                <div className="p-8 space-y-4 max-w-3xl">
                  <Skeleton className="h-4 w-24 rounded-full mb-6" />
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-[90%] rounded-md" />
                  <Skeleton className="h-4 w-[95%] rounded-md" />
                </div>
              </div>
            ) : selectedMessage ? (
              <>
                {/* Preview Header */}
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-start bg-white dark:bg-gray-900/50 backdrop-blur-sm sticky top-0 z-20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-lg uppercase shadow-sm">
                      {selectedMessage.name.charAt(0)}
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                        {selectedMessage.name}
                      </h1>
                      <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          User ID: {selectedMessage.userId.slice(0, 6)}...
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {formatTime(selectedMessage.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(selectedMessage.id)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    title="Delete Message"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Preview Body */}
                <div className="flex-1 overflow-y-auto p-8">
                  <div className="max-w-3xl">
                    <div className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium mb-6">
                      Message Content
                    </div>
                    <p className="text-gray-800 dark:text-gray-200 leading-8 whitespace-pre-wrap text-lg">
                      {selectedMessage.message}
                    </p>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
                   <div className="flex items-center gap-2 text-sm text-gray-400">
                     <Mail className="w-4 h-4"/> 
                     <span>Sent via Contact Form on {formatDate(selectedMessage.createdAt)}</span>
                   </div>
                </div>
              </>
            ) : (
              // Empty State
              <div className="flex-1 flex flex-col items-center justify-center text-gray-300 dark:text-gray-700 p-8">
                <div className="w-24 h-24 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                   <XCircle className="w-10 h-10 opacity-50" />
                </div>
                <p className="text-lg font-medium text-gray-400">Select a message to read</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;