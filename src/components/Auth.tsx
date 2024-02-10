import AuthProvider from "@/providers/AuthProvider";
import { useCurrentUserQuery } from "@/queries/useCurrentUserQuery";
import { ReactNode } from "react";
import LoadingPage from "./pages/Loading";
import NotAllowedPage from "./pages/NotAllowed";
import { useRouter } from "next/router";
import { navigationRoutes } from "@/settings/navigation/routes";
import Redirect from "./Redirect";

interface AuthProps {
  children: ReactNode
}
export default function Auth({ children }: AuthProps) {
  const { data, isLoading, isError } = useCurrentUserQuery()

  const { pathname } = useRouter()

  const settings = Object.entries(navigationRoutes).find(([, sett]) => sett.route === pathname)?.[1]

  if (!settings) {
    return <>Configurações de navegação não encontradas para está pagina</>
  }

  if (!settings.security) return children



  if (isLoading && !data && settings.security.type !== "exit") {
    return <LoadingPage />
  }

  const isAuth = data?.permissions.some(per => settings.permissions.includes(per))

  if (settings.security.type === "exit" && isAuth) {
    return <Redirect href={settings.security.redirect} />
  }

  if (settings.security.type === "exit" && !isAuth) return children

  if (!isAuth || !data) {
    return <NotAllowedPage />
  }
  return (
    <AuthProvider credentials={data}>
      {children}
    </AuthProvider>
  )
}