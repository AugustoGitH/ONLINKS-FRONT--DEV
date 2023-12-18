
import * as S from "./styles"
import { forwardRef, ComponentProps, ReactNode } from "react"

interface InputProps extends Omit<ComponentProps<"input">, "placeholder"> {
  label?: string,
  error?: boolean,
  success?: boolean,
  helperText?: string | ReactNode,
  loading?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ loading = false, success = false, label, error = false, helperText, ...props }, ref) => {
  return (
    <S.Input error={error} success={success} loading={loading}>
      <div className="content-input">
        <input ref={ref} {...props} required />
        {label && <label>{label}</label>}
      </div>
      {
        helperText && (<p className="helper-text">{helperText}</p>)
      }
    </S.Input>
  )
})


export default Input