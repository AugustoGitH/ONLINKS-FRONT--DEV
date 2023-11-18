import Icon from "@/components/Icon"
import * as S from "./styles"
import Link from "next/link"
import Input from "@/components/Input"

export default function LoginPage() {
  return (
    <S.LoginPage>
      <div className="content">
        <div className="header">
          <Link href="/"><h1><Icon icon="bx bx-link" />onLinks</h1></Link>
          <h1>Bem vindo de volta!</h1>
          <p>Novo no onLinks? <Link href={"/register"}>Registrar-se</Link></p>
        </div>
        <form>
          <Input label="Email" />
          <Input label="Senha" />
          <Link href="/panel">Entrar</Link>
        </form>
      </div>
    </S.LoginPage>
  )
}