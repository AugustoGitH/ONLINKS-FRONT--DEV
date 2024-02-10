import { ReactNode } from "react"
import * as S from "./styles"
import HorizontalNavBarPanel from "../HorizontalNavBarPanel"
import Icon from "../Icon"
import Link from "next/link"
import { useRouter } from "next/router"
import { navigationRoutes } from "@/settings/navigation/routes"
import { navigationPanelRoutes } from "@/settings/navigation/panel"

interface VericalNavBarPanelProps {
  children: ReactNode
}
export default function VerticalNavBarPanel({ children }: VericalNavBarPanelProps) {
  const { pathname } = useRouter()
  return (
    <S.VerticalNavBarPanel>
      <div className="nav-bar-content">
        <Icon className="icon-onlink" icon="bx bx-link" />
        <ul className="controls-navigation">
          {
            navigationPanelRoutes.map((route, index) => (
              <li key={`route-vertical-navigation-${index}`} className={pathname === route.href ? "marked" : undefined}><Link href={route.href}>{route.title}</Link></li>
            ))
          }

        </ul>
      </div>
      <div className="panel-content">
        <HorizontalNavBarPanel />
        {children}
      </div>
    </S.VerticalNavBarPanel>
  )
}