import Icon from "@/components/Icon";
import { navigationRoutes } from "./routes";


export const navigationPanelRoutes = [
  {
    title: <><Icon className="icon" icon="bx bxs-dashboard" />Painel</>,
    href: navigationRoutes.panel.route
  },
  {
    title: <><Icon className="icon" icon="bx bx-anchor" />Página de links</>,
    href: navigationRoutes.linkPages.route
  }
]