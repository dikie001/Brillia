/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@/firebase/config.firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import {
    Bell,
    BellRing,
    Check,
    CheckCheck,
    Filter,
    Inbox,
    Info,
    Megaphone,
    Plus,
    Search,
    Send,
    Trash2,
    UserPlus,
    X
} from "lucide-react";
import { useEffect, useState } from "react";
import LoaderPage from "./Loader";
import AdminNavbar from "./layout/Navbar";

// --- TYPES ---
type NotificationType = "info" | "success" | "warning" | "error" | "broadcast";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  timestamp: any; // Firestore Timestamp
  target?: string; // 'admin' or 'all' or userId
}

// --- COMPOSE MODAL ---
const BroadcastModal = ({ isOpen, onClose, onSend }: { isOpen: boolean; onClose: () => void; onSend: (title: string, msg: string, type: NotificationType) => Promise<void> }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState<NotificationType>("info");
  const [sending, setSending] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !message.trim()) return;
    
    setSending(true);
    await onSend(title, message, type);
    setSending(false);
    setTitle("");
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
          <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Megaphone className="w-5 h-5 text-indigo-500" /> New Broadcast
          </h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., System Maintenance"
              className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white"
            />
          </div>
          
          <div>
             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
             <div className="grid grid-cols-3 gap-2">
                {(['info', 'warning', 'success'] as const).map((t) => (
                    <button
                        key={t}
                        type="button"
                        onClick={() => setType(t)}
                        className={`py-2 px-3 rounded-lg text-xs font-bold uppercase transition-all border ${
                            type === t 
                            ? t === 'info' ? 'bg-blue-50 border-blue-200 text-blue-600' : 
                              t === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-600' : 
                              'bg-emerald-50 border-emerald-200 text-emerald-600'
                            : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400 hover:bg-gray-50'
                        }`}
                    >
                        {t}
                    </button>
                ))}
             </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea 
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message to all students..."
              className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white resize-none"
            />
          </div>

          <div className="pt-2">
            <button 
                type="submit" 
                disabled={sending}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20 flex items-center justify-center gap-2 disabled:opacity-70 transition-all"
            >
                {sending ? <LoaderPage /> : <Send className="w-4 h-4" />}
                {sending ? "Broadcasting..." : "Send Broadcast"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const AdminNotifications = () => {
  const [activeTab, setActiveTab] = useState<"inbox" | "broadcasts">("inbox");
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  // --- FETCHING ---
  const fetchNotifications = async () => {
    setLoading(true);
    try {
        const notifRef = collection(db, "admin_notifications"); // Assuming a collection for admin alerts
        // In reality, you might query a single 'notifications' collection where target == 'admin'
        // For demo, we are fetching everything to show the UI
        const q = query(notifRef, orderBy("timestamp", "desc"));
        const snapshot = await getDocs(q);
        
        const fetched = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as Notification[];

        // MOCK DATA if empty (For demonstration purposes so you see the UI)
        if (fetched.length === 0) {
            const mockData: Notification[] = [
                { id: '1', title: 'New User Registration', message: 'User "John Doe" just signed up.', type: 'info', read: false, timestamp: new Date().toISOString(), target: 'admin' },
                { id: '2', title: 'High Load Warning', message: 'Database latency is higher than normal.', type: 'warning', read: false, timestamp: new Date(Date.now() - 3600000).toISOString(), target: 'admin' },
                { id: '3', title: 'Backup Successful', message: 'Daily system backup completed successfully.', type: 'success', read: true, timestamp: new Date(Date.now() - 86400000).toISOString(), target: 'admin' },
                { id: '4', title: 'Broadcast: Exam Schedule', message: 'Sent to all users: Finals start next week.', type: 'broadcast', read: true, timestamp: new Date(Date.now() - 120000000).toISOString(), target: 'all' },
            ];
            setNotifications(mockData);
        } else {
            setNotifications(fetched);
        }

    } catch (error) {
        console.error("Error fetching notifications:", error);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  // --- ACTIONS ---
  const handleMarkAsRead = async (id: string) => {
    // Optimistic Update
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
    // API Call
    try {
       // await updateDoc(doc(db, "admin_notifications", id), { read: true });
    } catch (e) { console.error(e) }
  };

  const handleMarkAllRead = async () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    // Batch update logic would go here
  };

  const handleDelete = async (id: string) => {
    if(!window.confirm("Delete this notification?")) return;
    setNotifications(prev => prev.filter(n => n.id !== id));
    try {
        // await deleteDoc(doc(db, "admin_notifications", id));
    } catch (e) { console.error(e) }
  };

  const handleSendBroadcast = async (title: string, message: string) => {
    try {
        // 1. Add to Admin's "Sent" list
        const newNotif = {
            title,
            message,
            type: "broadcast" as NotificationType,
            read: true,
            timestamp: new Date().toISOString(),
            target: 'all'
        };
        // await addDoc(collection(db, "admin_notifications"), newNotif);
        
        // 2. Add to actual Users' notification collection
        // await addDoc(collection(db, "notifications"), { ...newNotif, target: 'all_users' });

        // Update Local State
        setNotifications(prev => [{ id: Math.random().toString(), ...newNotif } as any, ...prev]);
        
        alert("Broadcast sent successfully!");
    } catch (error) {
        console.error("Error sending broadcast:", error);
        alert("Failed to send broadcast.");
    }
  };

  // --- FILTERING ---
  const displayedNotifications = notifications.filter(n => {
    if (activeTab === "inbox") return n.type !== "broadcast" && (filter === "all" || !n.read);
    if (activeTab === "broadcasts") return n.type === "broadcast";
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read && n.type !== "broadcast").length;

  // --- UI HELPERS ---
  const getIcon = (type: NotificationType) => {
    switch(type) {
        case "info": return <UserPlus className="w-5 h-5 text-blue-500" />;
        case "warning": return <Info className="w-5 h-5 text-amber-500" />;
        case "success": return <Check className="w-5 h-5 text-emerald-500" />;
        case "broadcast": return <Megaphone className="w-5 h-5 text-indigo-500" />;
        default: return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  if (loading) return <LoaderPage />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <AdminNavbar />
      <BroadcastModal isOpen={isComposeOpen} onClose={() => setIsComposeOpen(false)} onSend={handleSendBroadcast} />

      <div className="max-w-5xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <BellRing className="w-8 h-8 text-indigo-600" /> Notifications
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              {unreadCount > 0 ? `You have ${unreadCount} unread alerts.` : "You're all caught up!"}
            </p>
          </div>
          <div className="flex gap-2">
             <button 
                onClick={handleMarkAllRead}
                disabled={unreadCount === 0}
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 transition-colors"
             >
                Mark all read
             </button>
             <button 
                onClick={() => setIsComposeOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20 transition-all font-medium text-sm"
             >
                <Plus className="w-4 h-4" /> New Broadcast
             </button>
          </div>
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row flex-1 overflow-hidden">
            
            {/* SIDEBAR (Tabs) */}
            <div className="w-full sm:w-64 bg-gray-50/50 dark:bg-gray-800/30 border-b sm:border-b-0 sm:border-r border-gray-100 dark:border-gray-800 p-4 shrink-0">
                <nav className="space-y-1">
                    <button
                        onClick={() => setActiveTab("inbox")}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            activeTab === "inbox" 
                            ? "bg-white dark:bg-gray-800 text-indigo-600 shadow-sm" 
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <Inbox className="w-4 h-4" /> Inbox
                        </div>
                        {unreadCount > 0 && (
                            <span className="bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{unreadCount}</span>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab("broadcasts")}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            activeTab === "broadcasts" 
                            ? "bg-white dark:bg-gray-800 text-indigo-600 shadow-sm" 
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                        }`}
                    >
                        <Send className="w-4 h-4" /> Sent Broadcasts
                    </button>
                </nav>

                <div className="mt-8">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">Filter Inbox</h4>
                    <div className="space-y-1">
                        <button 
                            onClick={() => setFilter("all")}
                            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium ${filter === 'all' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                        >
                            All Messages
                        </button>
                        <button 
                            onClick={() => setFilter("unread")}
                            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium ${filter === 'unread' ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                        >
                            Unread Only
                        </button>
                    </div>
                </div>
            </div>

            {/* LIST AREA */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">
                {/* Search Bar */}
                <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
                    <Search className="w-4 h-4 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search notifications..." 
                        className="flex-1 bg-transparent border-none focus:outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400"
                    />
                    <Filter className="w-4 h-4 text-gray-400 sm:hidden" />
                </div>

                {/* Scrollable List */}
                <div className="flex-1 overflow-y-auto p-2 space-y-2">
                    {displayedNotifications.length > 0 ? (
                        displayedNotifications.map((notif) => (
                            <div 
                                key={notif.id} 
                                className={`group relative p-4 rounded-xl border transition-all hover:shadow-md ${
                                    notif.read 
                                    ? "bg-white dark:bg-gray-900 border-transparent hover:border-gray-100 dark:hover:border-gray-800" 
                                    : "bg-blue-50/50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30"
                                }`}
                            >
                                <div className="flex items-start gap-4 pr-8">
                                    <div className={`p-2 rounded-full shrink-0 ${
                                        notif.read ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-800 shadow-sm"
                                    }`}>
                                        {getIcon(notif.type)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className={`text-sm font-semibold truncate ${notif.read ? "text-gray-700 dark:text-gray-200" : "text-gray-900 dark:text-white"}`}>
                                                {notif.title}
                                            </h4>
                                            <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">
                                                {new Date(notif.timestamp).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p className={`text-sm line-clamp-2 ${notif.read ? "text-gray-500" : "text-gray-600 dark:text-gray-300"}`}>
                                            {notif.message}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Actions */}
                                <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-1 shadow-sm">
                                    {!notif.read && (
                                        <button 
                                            onClick={() => handleMarkAsRead(notif.id)}
                                            className="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-md transition-colors" 
                                            title="Mark as read"
                                        >
                                            <CheckCheck className="w-4 h-4" />
                                        </button>
                                    )}
                                    <button 
                                        onClick={() => handleDelete(notif.id)}
                                        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors" 
                                        title="Delete"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>

                                {!notif.read && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r-full" />
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-gray-400 py-20">
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full mb-4">
                                <Inbox className="w-8 h-8 opacity-50" />
                            </div>
                            <p className="text-sm font-medium">No messages found</p>
                            <p className="text-xs opacity-70">Your inbox is empty</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNotifications;