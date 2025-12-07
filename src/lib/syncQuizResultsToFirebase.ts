import { FIREBASE_TEST_RESULTS } from "@/constants";
import { db } from "@/firebase/config.firebase";
import { 
  doc, 
  collection, 
  setDoc, 
  serverTimestamp, 
  getCountFromServer 
} from "firebase/firestore";

export interface QuizResult {
  testNumber: number;
  score: number;
  totalQuestions: number;
  percentage: number;
  date: string;
  subject: string;
  timeTaken: number;
}

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

export const syncQuizResultsToFirebase = async (userId: string) => {
  const results = getLocalQuizResults();
  if (results.length === 0) return;

  try {
    const userRef = doc(db, "users", userId);
    const resultsRef = collection(userRef, "quizResults");

    // 1. Get the current number of documents
    const snapshot = await getCountFromServer(resultsRef);
    let currentCount = snapshot.data().count;

    let allSaved = true;

    for (const result of results) {
      try {
        currentCount++; // Increment for the new doc
        
        // 2. Pad with zeros (001, 002, 003...)
        const formattedId = String(currentCount).padStart(3, '0');

        await setDoc(doc(resultsRef, formattedId), {
          ...result,
          id: formattedId, // Useful to store the ID inside the doc too
          createdAt: serverTimestamp(),
          syncedAt: new Date().toISOString(),
        });
        
      } catch (err) {
        console.error("Record sync failed:", err);
        allSaved = false;
      }
    }

    // 3. Clear local storage only if all saved successfully
    if (allSaved) {
      localStorage.removeItem(FIREBASE_TEST_RESULTS);
    }

  } catch (err) {
    console.error("Firebase sync operation failed:", err);
  }
};