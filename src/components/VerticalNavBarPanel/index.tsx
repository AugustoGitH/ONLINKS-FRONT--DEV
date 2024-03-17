import { ReactNode } from "react"
import * as S from "./styles"
import HorizontalNavBarPanel from "../HorizontalNavBarPanel"
import Icon from "../Icon"
import Link from "next/link"
import { useRouter } from "next/router"
import { navigationRoutes } from "@/settings/navigation/routes"
import { navigationPanelRoutes } from "@/settings/navigation/panel"
import { useAuthContext } from "@/contexts/AuthContext"
import nameThroughPermissions from "@/helpers/permissions/name-through-permissions"
import Ellipsis from "../Elllipsis"
import tratedName from "@/helpers/trated-name"

interface VericalNavBarPanelProps {
  children: ReactNode
}
export default function VerticalNavBarPanel({ children }: VericalNavBarPanelProps) {
  const { pathname } = useRouter()
  const { user } = useAuthContext()


  return (
    <S.VerticalNavBarPanel>
      <div className="nav-bar-content">
        <div className='head-nav'>
          <Icon className="icon-onlink" icon="bx bx-link" />
          <span>Seja bem vindo(a) <br /><strong><Ellipsis width="200px">{user?.name ? tratedName(user.name) : '*****'}</Ellipsis></strong></span>
        </div>
        <ul className="controls-navigation">
          {
            navigationPanelRoutes.map((route, index) => (
              <li key={`route-vertical-navigation-${index}`} className={pathname === route.href ? "marked" : undefined}>
                <Link href={route.href}>
                  <span>
                    {route.title}
                  </span>
                </Link>
              </li>
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