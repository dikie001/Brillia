import { FIREBASE_TEST_RESULTS } from "@/constants";
import { db } from "@/firebase/config.firebase";
import { doc, collection, setDoc, serverTimestamp } from "firebase/firestore"; // Import serverTimestamp

export interface QuizResult {
  testNumber: number;
  score: number;
  totalQuestions: number;
  percentage: number;
  date: string;
  subject: string;
  timeTaken: number;
}

// ----------------------
// GET LOCAL RESULTS
// ----------------------
export const getLocalQuizResults = (): QuizResult[] => {
  try {
    const raw = localStorage.getItem(FIREBASE_TEST_RESULTS);
    if (!raw) return [];
    return JSON.parse(raw) as QuizResult[];
  } catch (err) {
    console.error("Local fetch failure:", err);
    return [];
  }
};

// ----------------------
// SYNC RESULTS TO FIREBASE
// ----------------------
export const syncQuizResultsToFirebase = async (userId: string) => {
  const results = getLocalQuizResults();
  if (results.length === 0) return;

  try {
    const userRef = doc(db, "users", userId);
    const resultsRef = collection(userRef, "quizResults");

    // We keep track if we successfully saved everything
    let allSaved = true;

    for (const result of results) {
      try {
        // FIX 1: Use Date.now() for the ID. 
        // This ensures they appear ordered in the Firestore Console.
        // We add a random suffix just in case two happen at the EXACT same millisecond.
        const timeBasedId = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;

        await setDoc(doc(resultsRef, timeBasedId), {
          ...result,
          // FIX 2: Use serverTimestamp for accurate sorting when fetching
          createdAt: serverTimestamp(), 
          syncedAt: new Date().toISOString(),
        });
        
      } catch (err) {
        console.error("Record sync failed:", err);
        allSaved = false; 
        continue;
      }
    }

    // FIX 3: Only clear storage AFTER the loop finishes
    if (allSaved) {
      localStorage.removeItem(FIREBASE_TEST_RESULTS);
    }

  } catch (err) {
    console.error("Firebase sync operation failed:", err);
  }
};