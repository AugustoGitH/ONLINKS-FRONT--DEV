import Auth from "@/components/Auth";
import { navigationRoutes } from "@/settings/navigation/routes";
import LinkPagesPanelPage from "@/templates/panel/LinkPagesPanelPage";
import Head from "next/head";


export default function LinkPages() {
  return (
    <Auth>
      <Head>
        <title>{navigationRoutes.linkPages.title}</title>
      </Head>
      <LinkPagesPanelPage />
    </Auth>
  )
}