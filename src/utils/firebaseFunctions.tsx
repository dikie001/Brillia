import { db } from "@/firebase/config.firebase";
import type { LearnerInfo } from "@/modals/Welcome";
import { addDoc, collection } from "firebase/firestore";

export const saveUserDetails = async ({
  name,
  age,
  subject,
  hobby,
}: LearnerInfo) => {
  try {
    await addDoc(collection(db, "users"), {
      fullName: name,
      age,
      favoriteSubject: subject,
      hobby,
    });
    
  } catch (err) {
    console.error(err);
  }
};
