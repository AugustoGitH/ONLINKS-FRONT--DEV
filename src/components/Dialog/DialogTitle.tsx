import { ComponentProps, ReactNode } from "react"
import * as S from "./styles"

interface DialogTitleProps extends ComponentProps<"p"> {
  children: ReactNode
}

export default function DialogTitle({ children, ...props }: DialogTitleProps) {
  return (
    <S.DialogTitle {...props}>
      {children}
    </S.DialogTitle>
  )
}