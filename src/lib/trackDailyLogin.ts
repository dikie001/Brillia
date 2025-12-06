import { db } from "@/firebase/config.firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function trackDailyLogin(userId: string) {
  const today = new Date().toISOString().split("T")[0]; // "2025-12-06"
  const lastLogin = localStorage.getItem("last_login");

  // Already logged today → exit
  if (lastLogin === today) return;

  // Record today locally
  localStorage.setItem("last_login", today);

  // Firestore doc
  const ref = doc(db, "users", userId);
  const snap = await getDoc(ref);

  let count = 1;

  if (snap.exists()) {
    const data = snap.data();
    count = (data.total || 0) + 1;
  }

  await setDoc(ref, { totalLogins: count, lastLogin: today }, { merge: true });

  return count;
}
