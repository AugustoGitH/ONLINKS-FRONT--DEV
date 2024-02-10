import Button from "@/components/Button"
import Input from "@/components/Input"
import { useRegister } from "@/hooks/useRegister"
import Link from "next/link"


interface StepTwoRegisterProps {
  username: string
}

export default function StepTwoRegister({ username }: StepTwoRegisterProps) {
  const { onSubmit, registerInput, errors, registering } = useRegister({ username })
  return (
    <div className="content">
      <p className="sup-helper"><span>onlinks.com.br\{username.toLowerCase()}</span> agora é seu!</p>
      <h1>Agora, crie sua conta gratuita!</h1>
      <form onSubmit={onSubmit} noValidate>
        <Input autoComplete="off" label="Nome" {...registerInput("name")} error={!!errors?.name} helperText={errors?.name?.message} />
        <Input autoComplete="off" label="Email"  {...registerInput("email")} error={!!errors?.email} helperText={errors?.email?.message} />
        <Input autoComplete="off" label="Senha" type="password" {...registerInput("password")} error={!!errors?.password} helperText={errors?.password?.message} />
        <Button variant="underline" type="submit" disabled={registering}>{registering ? "Registrando..." : "Registrar"}</Button>
      </form>
    </div>
  )
}