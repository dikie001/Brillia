import { FIREBASE_TEST_RESULTS } from "@/constants";
import { db } from "@/firebase/config.firebase";
import { doc, collection, setDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";

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

    for (const result of results) {
      try {
        const customId = uuid();

        await setDoc(doc(resultsRef, customId), {
          ...result,
          syncedAt: new Date().toISOString(),
        });
        localStorage.removeItem(FIREBASE_TEST_RESULTS)
      } catch (err) {
        console.error("Record sync failed:", err);
        // Continue syncing other records instead of aborting
        continue;
      }
    }
  } catch (err) {
    console.error("Firebase sync operation failed:", err);
  }
};
