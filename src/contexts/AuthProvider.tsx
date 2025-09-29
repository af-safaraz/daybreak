import React, { useEffect, useState } from "react";
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/firebase/firebase";
import { AuthContext } from "@/contexts/authContext";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { isAuthChangeSuppressed } from "@/services/auth";

export interface UserProfile {
  uid: string;
  email: string | null;
  name: string | null;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // isAuthChangeSuppressed used to make sure currentUser and profile is null so the user will not be logged in after register
      if (isAuthChangeSuppressed()) {
        return;
      }
      setCurrentUser(user);
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data() as UserProfile);
        } else {
          // If user data not exist create new profile and set it
          const newProfile: UserProfile = {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
          };
          setProfile(newProfile);

          // Then add new user data to database
          await setDoc(docRef, {
            ...newProfile,
            createdAt: new Date(),
          });
        }
      } else {
        setProfile(null);
      }

      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading, profile }}>
      {children}
    </AuthContext.Provider>
  );
};
