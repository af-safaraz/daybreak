import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import type { User } from "firebase/auth";

import { auth, googleProvider, db } from "@/firebase/firebase";

import { doc, setDoc } from "firebase/firestore";

let suppressAuthChange = false;
// SuppressAuthChange used so the user not automatically login after register
export const isAuthChangeSuppressed = () => suppressAuthChange;

export const register = async (
  email: string,
  password: string,
  name: string
) => {
  suppressAuthChange = true;

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  updateProfile(user, { displayName: name });

  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    email: user.email,
    name: name,
    createdAt: new Date(),
  });

  await signOut(auth);
  suppressAuthChange = false;

  return userCredential;
};

export const login = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
};

export const loginWithGoogle = async () => {
  const userCredential = await signInWithPopup(auth, googleProvider);
  return userCredential;
};

export const logout = () => {
  return signOut(auth);
};

export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
