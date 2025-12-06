import { db } from "@/firebase/config.firebase";
import type { LearnerInfo } from "@/modals/Welcome";
import { doc, setDoc } from "firebase/firestore";

export const saveUserDetails = async ({
  id,
  name,
  age,
  subject,
  hobby,
  loginCount,
}: LearnerInfo) => {
  try {

    await setDoc(doc(db, "users", id), {
      id,
      fullName: name,
      age,
      favoriteSubject: subject,
      hobby,
      loginCount,
    });

  } catch (err) {
    console.error(err);
  }
};
