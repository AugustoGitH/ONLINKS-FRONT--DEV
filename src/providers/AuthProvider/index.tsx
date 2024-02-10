import { AuthContext } from "@/contexts/AuthContext";
import { UserPublic } from "@/types/user";
import { ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode,
  credentials: UserPublic
}

export default function AuthProvider({ children, credentials }: AuthProviderProps) {

  return (
    <AuthContext.Provider value={{ user: credentials }}>
      {children}
    </AuthContext.Provider>
  )
}