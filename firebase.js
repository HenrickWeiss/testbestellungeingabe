// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDe4Vag-622YeSnp785etcVYFWNvnHdxZI",
  authDomain: "bestellsystem-c5742.firebaseapp.com",
  projectId: "bestellsystem-c5742",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
