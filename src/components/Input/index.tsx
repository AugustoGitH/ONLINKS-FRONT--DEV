
import Icon from "../Icon"
import * as S from "./styles"
import { forwardRef, ComponentProps, ReactNode, useState, MouseEventHandler } from "react"

interface InputProps extends Omit<ComponentProps<"input">, "placeholder"> {
  label?: string,
  error?: boolean,
  success?: boolean,
  helperText?: string | ReactNode,
  loading?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ loading = false, success = false, type, label, error = false, helperText, ...props }, ref) => {
  const [typeIn, setTypeIn] = useState(type)
  const handleToggleTypePass: MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.preventDefault()
    setTypeIn(prev => prev === "text" ? "password" : "text")
  }
  return (
    <S.Input error={error} success={success} loading={loading}>
      <div className="content-input">
        <input ref={ref} type={typeIn} {...props} required />
        {label && <label>{label}</label>}
        {type === "password" && (
          <button onClick={handleToggleTypePass} className="btn-toggle-pass"><Icon icon={`bx ${typeIn === "text" ? "bxs-shocked" : "bxs-tired"}`} /></button>
        )}

      </div>
      {
        helperText && (<p className="helper-text">{helperText}</p>)
      }
    </S.Input>
  )
})


export default Input