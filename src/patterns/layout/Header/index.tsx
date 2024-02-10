import Link from "next/link"
import * as S from "./styles"
import Icon from "@/components/Icon"
import { navigationRoutes } from "@/settings/navigation/routes"

export default function Header() {
  return (
    <S.Header>
      <div className="content">
        <Link href={navigationRoutes.home.route}>
          <h1><span><Icon icon="bx bx-link" />on</span>Links</h1>
        </Link>
        <nav>
          <Link href={navigationRoutes.login.route}>Entrar</Link>
          <Link href={navigationRoutes.register.route}>Registrar</Link>
        </nav>
      </div>
    </S.Header>
  )
}