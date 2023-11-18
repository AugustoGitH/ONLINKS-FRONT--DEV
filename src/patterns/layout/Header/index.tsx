import Link from "next/link"
import * as S from "./styles"
import Icon from "@/components/Icon"

export default function Header() {
  return (
    <S.Header>
      <div className="content">
        <h1><Icon icon="bx bx-link" />onLinks</h1>
        <nav>
          <Link href={"/login"}>Entrar</Link>
          <Link href={"/register"}>Registrar</Link>
        </nav>
      </div>
    </S.Header>
  )
}