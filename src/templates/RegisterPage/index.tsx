import Icon from "@/components/Icon"
import * as S from "./styles"
import Input from "@/components/Input"
import Link from "next/link"
import { useState } from "react"

interface StepTwoProps {
  username: string
}

const StepTwo = ({ username }: StepTwoProps) => {
  return (
    <div className="content">
      <p className="sup-helper"><span>onlinks.com.br\{username}</span> agora é seu!</p>
      <h1>Agora, crie sua conta gratuita!</h1>
      <form>
        <Input label="Nome" />
        <Input label="Email" />
        <Input label="Senha" />
        <Link href="" >Próximo</Link>
      </form>
    </div>
  )
}

interface StepOneProps {
  onAdvance: (username: string) => void
}

const StepOne = ({ onAdvance }: StepOneProps) => {
  const [username, setUsername] = useState("")
  const handleNextStep = () => {
    if (username) {
      onAdvance(username)
    }
  }

  return (
    <div className="content">
      <h1>Crie o seu On<span>Link<Icon icon="bx bx-link" /></span></h1>
      <form>
        <Input
          label="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button onClick={handleNextStep} type="button">Próximo</button>
      </form>
      <p className="sub-helper">Já tem uma conta? <Link href={"/login"}>Entrar</Link></p>
    </div>
  )
}


export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [username, setUsername] = useState("")

  const handleAdvance = (username: string) => {
    setUsername(username)
    setStep(prevStep => (
      prevStep === 1 ? 2 : 1
    ))
  }

  return (
    <S.RegisterPage>
      {
        step === 1 ? (
          <StepOne onAdvance={handleAdvance} />
        ) : (
          <StepTwo username={username} />
        )
      }
    </S.RegisterPage>
  )
}