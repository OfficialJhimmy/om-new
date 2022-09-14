import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBt283D--iXgfvGrEY4wOeH8jh4sxPz4EY",
  authDomain: "om-associates-cbad0.firebaseapp.com",
  projectId: "om-associates-cbad0",
  storageBucket: "om-associates-cbad0.appspot.com",
  messagingSenderId: "375405782875",
  appId: "1:375405782875:web:9acfc0f2f6f08b9d145c7e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
