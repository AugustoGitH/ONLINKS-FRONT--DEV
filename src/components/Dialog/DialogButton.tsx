import { ComponentProps, ReactNode } from "react"
import * as S from "./styles"

interface DialogButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  color?: "danger" | "third"
}
export default function DialogButton({ children, color = "third", ...props }: DialogButtonProps) {
  return (
    <S.DialogButton color={color} {...props}>
      {children}
    </S.DialogButton>
  )
}