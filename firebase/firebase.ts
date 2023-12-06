import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported } from "@firebase/analytics";
import { Auth, getAuth, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT,
};

let firebaseApp: FirebaseApp;
let auth: Auth;

if (typeof window !== "undefined" && !getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
  auth = getAuth();
}

isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics();
    // Rest of your analytics code
  }
});

export const logout = () => {
  return signOut(auth);
};

export { firebaseApp, auth };

export const authPromise = new Promise<Auth>((resolve, reject) => {
  if (auth) {
    resolve(auth);
  } else {
    const intervalId = setInterval(() => {
      if (auth) {
        clearInterval(intervalId);
        resolve(auth);
      }
    }, 1000); // 1秒ごとにチェック
  }
});
