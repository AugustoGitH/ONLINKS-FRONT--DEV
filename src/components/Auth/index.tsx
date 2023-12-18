import AuthProvider from "@/providers/AuthProvider";
import { useCurrentUserQuery } from "@/queries/useCurrentUserQuery";
import { ReactNode } from "react";

interface AuthProps {
  children: ReactNode
}
export default function Auth({ children }: AuthProps) {
  const { data, isLoading } = useCurrentUserQuery()

  console.log(data)

  return (
    <>{children}</>
  )
}