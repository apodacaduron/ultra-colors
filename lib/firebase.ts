import { initializeApp } from 'firebase/app';
import type { FirebaseOptions } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import {
  connectAuthEmulator,
  getAuth,
  GoogleAuthProvider,
} from 'firebase/auth';
import { connectStorageEmulator, getStorage } from 'firebase/storage';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyDzxpVYU6FJ-zLJIbGEgbgtL53N8r8UvUg',
  authDomain: 'ultra-colors-784cb.firebaseapp.com',
  projectId: 'ultra-colors-784cb',
  storageBucket: 'ultra-colors-784cb.appspot.com',
  messagingSenderId: '453359997436',
  appId: '1:453359997436:web:b526262061dae76f322279',
  measurementId: 'G-EYDVGQZ6X0',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
export const googleAuthProvider = new GoogleAuthProvider();

if (window.location.hostname === 'localhost') {
  connectFirestoreEmulator(firestore, 'localhost', 8080);
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectFunctionsEmulator(functions, 'localhost', 5001);
  connectStorageEmulator(storage, 'localhost', 9199);
}
