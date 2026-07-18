import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrTAYos1FI3nbUFp8IR3gi-XS4zgVEa0s",
  authDomain: "skorinho-4b5d5.firebaseapp.com",
  projectId: "skorinho-4b5d5",
  storageBucket: "skorinho-4b5d5.firebasestorage.app",
  messagingSenderId: "278425196999",
  appId: "1:278425196999:web:62f752f258636e2d76a1e2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;