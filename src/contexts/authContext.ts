import { createContext } from "react";
import type { User } from "firebase/auth";
import type { UserProfile } from "@/contexts/AuthProvider";

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  profile: UserProfile | null;
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: true,
  profile: null,
});
