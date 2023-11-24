import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDdp2O6PgLJx2h8CnR6us56-V18FCmOAbs",
  authDomain: "proyecto-julia.firebaseapp.com",
  projectId: "proyecto-julia",
  storageBucket: "proyecto-julia.appspot.com",
  messagingSenderId: "391864768946",
  appId: "1:391864768946:web:aa6ebd28f3dd85600c6cab"
};
const app = initializeApp(firebaseConfig);
export const initFirebase = ()=> app