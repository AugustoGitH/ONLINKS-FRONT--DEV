import Icon from "@/components/Icon"
import * as S from "./styles"
import Link from "next/link"
import Input from "@/components/Input"
import { navigationRoutes } from "@/settings/navigation/routes"
import { useLogin } from "@/hooks/useLogin"

export default function LoginPage() {
  const { errors, loggingIn, onSubmit, registerInput } = useLogin()
  return (
    <S.LoginPage>
      <div className="content">
        <div className="header">
          <Link href="/"><h1><Icon icon="bx bx-link" />onLinks</h1></Link>
          <h1>Bem vindo de volta!</h1>
          <p>Novo no onLinks? <Link href={navigationRoutes.register.route}>Registrar-se</Link></p>
        </div>
        <form onSubmit={onSubmit} noValidate>
          <Input autoComplete="off" label="Email" {...registerInput("email")} helperText={errors?.email?.message} error={!!errors?.email} />
          <Input autoComplete="off" label="Senha" {...registerInput("password")} helperText={errors?.password?.message} error={!!errors?.password} />
          <button type="submit" disabled={loggingIn}>{loggingIn ? "Entrando..." : "Entrar"}</button>
        </form>
      </div>
    </S.LoginPage>
  )
}