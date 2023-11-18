
import * as S from "./styles"
import { forwardRef, ComponentProps } from "react"

interface InputProps extends Omit<ComponentProps<"input">, "placeholder"> {
  label?: string,
  error?: boolean,
  helperText?: string,
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error = false, helperText, ...props }, ref) => {
  return (
    <S.Input error={error}>
      <div className="content-input">
        <input ref={ref} {...props} required />
        {label && <label>{label}</label>}
      </div>
      {
        helperText && (<p className="helper-text">Erro exemple</p>)
      }
    </S.Input>
  )
})


export default Input