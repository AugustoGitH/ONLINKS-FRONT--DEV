import { UserPublic } from "@/types/user";
import { createContext, useContext } from "react";

interface AuthContextValue {
  user: UserPublic | null;
}

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue
);

export const useAuthContext = () => useContext(AuthContext);
