import Auth from "@/components/Auth";
import { navigationRoutes } from "@/settings/navigation/routes";
import RegisterPage from "@/templates/RegisterPage";
import Head from "next/head";


export default function Register() {
  return (
    <Auth>
      <Head>
        <title>{navigationRoutes.register.title}</title>
      </Head>
      <RegisterPage />
    </Auth>
  )
}