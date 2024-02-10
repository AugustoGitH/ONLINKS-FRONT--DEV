
import { useRouter } from "next/router"
import * as S from "./styles"
import { ReactNode, ComponentProps } from "react"

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode,
  variant?: "solid" | "underline",
  href?: string,
  target?: "_blank"
}

export default function Button({ children, href, target, variant = "solid", ...props }: ButtonProps) {
  const router = useRouter()
  const handleNavigation = () => {
    if (href && !target) {
      router.push(href)

      return
    }
    if (href && target === "_blank") {
      window.open(href, target)
    }
  }
  return (
    <S.Button variant={variant} {...props} {...(href && { onClick: handleNavigation })}>
      {children}
    </S.Button>
  )
}