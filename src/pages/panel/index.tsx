import Auth from "@/components/Auth";
import { navigationRoutes } from "@/settings/navigation/routes";
import PanelPage from "@/templates/panel/PanelPage";
import Head from "next/head";


export default function Panel() {
  return (
    <Auth>
      <Head>
        <title>{navigationRoutes.panel.title}</title>
      </Head>
      <PanelPage />
    </Auth>
  )
}