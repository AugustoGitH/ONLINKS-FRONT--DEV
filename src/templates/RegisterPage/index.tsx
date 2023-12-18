
import * as S from "./styles"
import { useState } from "react"
import StepTwoRegister from "./components/StepTwoRegister"
import StepOneRegister from "./components/StepOneRegister"



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
          <StepOneRegister onAdvance={handleAdvance} />
        ) : (
          <StepTwoRegister username={username} />
        )
      }
    </S.RegisterPage>
  )
}