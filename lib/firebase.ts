import { initializeApp } from 'firebase/app';
import type { FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDzxpVYU6FJ-zLJIbGEgbgtL53N8r8UvUg",
  authDomain: "ultra-colors-784cb.firebaseapp.com",
  projectId: "ultra-colors-784cb",
  storageBucket: "ultra-colors-784cb.appspot.com",
  messagingSenderId: "453359997436",
  appId: "1:453359997436:web:b526262061dae76f322279",
  measurementId: "G-EYDVGQZ6X0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const googleAuthProvider = new GoogleAuthProvider();