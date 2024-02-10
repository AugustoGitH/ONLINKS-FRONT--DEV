import { ReactNode } from "react"
import * as S from "./styles"

interface DialogActionsProps {
  children: ReactNode
}

export default function DialogActions({ children }: DialogActionsProps) {
  return (
    <S.DialogActions>
      {children}
    </S.DialogActions>
  )
}