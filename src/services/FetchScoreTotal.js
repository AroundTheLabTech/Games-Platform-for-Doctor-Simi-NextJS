// services/FetchScoreTotal.js
import { doc, getDocs, collection } from "firebase/firestore";
import { db } from "../../lib/firebase";

export const FetchScoreTotal = async (userId) => {
  let totalScore = 0;

  const scoresCollection = collection(db, "scores", userId, "sessions");
  const scoreDocs = await getDocs(scoresCollection);

  scoreDocs.forEach((doc) => {
    totalScore += Object.values(doc.data()).reduce(
      (acc, curr) => acc + (typeof curr === "number" ? curr : 0),
      0
    );
  });

  return totalScore;
};
