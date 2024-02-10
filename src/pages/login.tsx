import Auth from "@/components/Auth";
import { navigationRoutes } from "@/settings/navigation/routes";
import LoginPage from "@/templates/LoginPage";
import Head from "next/head";


export default function Login() {
  return (
    <Auth>
      <Head>
        <title>{navigationRoutes.login.title}</title>
      </Head>
      <LoginPage />
    </Auth>
  )
}
