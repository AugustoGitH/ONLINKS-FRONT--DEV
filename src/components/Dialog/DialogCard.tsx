import { ReactNode, useEffect, useRef } from "react"
import * as S from "./styles"


interface DialogCardProps {
  children: ReactNode,
  open: boolean,
  onClose?: () => void
}

const Dialog = ({ children, onClose = () => { } }: Omit<DialogCardProps, "open">) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const handleClick = (ev: MouseEvent) => {
      if (!cardRef.current) return
      const isInside = cardRef.current.contains(ev.target as Node)
      if (isInside) return
      console.log("close")
      onClose()
    }

    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.document.addEventListener("click", handleClick)
      }, 200)

      return () => {
        window.document.removeEventListener("click", handleClick)
      }
    }

  }, [])

  return <S.DialogCard>
    <div className="card-content" ref={cardRef}>
      {children}
    </div>
  </S.DialogCard>
}

export default function DialogCard({ children, onClose, open }: DialogCardProps) {

  return open ? (
    <Dialog onClose={onClose}>
      {children}
    </Dialog>
  ) : <></>
}