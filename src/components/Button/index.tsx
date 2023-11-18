
import * as S from "./styles"
import { ReactNode, ComponentProps } from "react"

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode,
  variant?: "solid" | "underline"
}

export default function Button({ children, variant = "solid", ...props }: ButtonProps) {
  return (
    <S.Button variant={variant} {...props}>
      {children}
    </S.Button>
  )
}