import { ComponentProps } from "react"
interface IconProps extends ComponentProps<"i"> {
  icon: string
}
export default function Icon({ icon, className, ...props }: IconProps) {
  return (
    <i className={`${icon} ${className ?? ""}`} {...props} />
  )
}