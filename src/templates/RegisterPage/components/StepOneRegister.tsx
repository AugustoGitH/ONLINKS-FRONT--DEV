import Icon from "@/components/Icon"
import Input from "@/components/Input"
import normalizeString from "@/helpers/normalize-string"
import { verifyUsernameService } from "@/services/auth/verifyUsernameService"
import { navigationRoutes } from "@/settings/navigation/routes"
import Link from "next/link"
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react"

interface StepOneProps {
  onAdvance: (username: string) => void
}

interface UsernameAvailable {
  available: boolean | null,
  isLoading: boolean,
  username: string
}

const tratedValueUsername = (username: string = "") => {
  return normalizeString(username).toLowerCase().replace(/ /g, "").trim()
}

export default function StepOneRegister({ onAdvance }: StepOneProps) {
  const [usernameAvailable, setUsernameAvailable] = useState<UsernameAvailable>({
    available: null,
    isLoading: false,
    username: ""
  })
  const [interval, setInterval] = useState<ReturnType<typeof setTimeout> | null>(null)

  const handleNextStep = () => {
    if (usernameAvailable.username && usernameAvailable.available && !usernameAvailable.isLoading) {
      onAdvance(usernameAvailable.username)
      setUsernameAvailable({
        available: null,
        isLoading: false,
        username: ""
      })
    }
  }

  const handleChange = async (ev: ChangeEvent<HTMLInputElement>) => {

    let { value } = ev.target
    value = tratedValueUsername(value)

    setUsernameAvailable(prev => ({
      ...prev,
      isLoading: !!value,
      available: null,
      username: value
    }))

    clearInterval(interval!)

    if (!value) return

    setInterval(setTimeout(() => {
      verifyUsernameService(value).then(({ message, error, found }) => {
        setUsernameAvailable(prev => ({
          ...prev,
          available: !error ? !found : null,
          isLoading: false
        }))
      })
    }, 1000))


  }

  return (
    <div className="content">
      <h1>Crie o seu On<span>Link<Icon icon="bx bx-link" /></span></h1>
      <form>
        <Input
          label="Username"
          value={usernameAvailable.username}
          onChange={handleChange}
          error={usernameAvailable.available === false}
          success={usernameAvailable.available ?? undefined}
          loading={usernameAvailable.isLoading}
          {...(usernameAvailable.isLoading && {
            helperText: "Verificando se o nome existe..."
          })}
          {...(usernameAvailable.available && {
            helperText: "Este nome está disponível!"
          })}
          {...(usernameAvailable.available === false && {
            helperText: "Este nome já está em uso!"
          })}
        />
        <button disabled={!!usernameAvailable.isLoading || !usernameAvailable.available} onClick={handleNextStep} type="button">Próximo</button>
      </form>
      <p className="sub-helper">Já tem uma conta? <Link href={navigationRoutes.login.route}>Entrar</Link></p>
    </div>
  )
}
