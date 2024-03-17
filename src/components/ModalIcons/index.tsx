import { ComponentProps, useEffect, useRef } from 'react'
import Icon from '../Icon'
import * as S from './styles'

const icons = [
  ['instagram', 'bxl-instagram'],
  ['twitter', 'bxl-twitter'],
  ['whatsapp', 'bxl-whatsapp'],
  ['linkedin', 'bxl-linkedin'],
  ['behance', 'bxl-behance'],
  ['discord', 'bxl-discord-alt'],
  ['tiktok', 'bxl-tiktok'],
  ['facebook', 'bxl-facebook'],
  ['google', 'bxl-google'],
  ['tumblr', 'bxl-tumblr'],
  ['twitch', 'bxl-twitch'],
  ['pinterest', 'bxl-pinterest'],
  ['snapchat', 'bxl-snapchat'],
]
interface ModalIconsProps extends ComponentProps<'div'> {
  onSelectIcon?: (icon: [string, string]) => void,
  open?: boolean,
  onClose?: () => void
}
const ModalIcons = ({ open = true, onSelectIcon = () => { }, onClose = () => { }, ...props }: ModalIconsProps) => {
  const modalRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const f = (ev: MouseEvent) => {
      if (!modalRef.current) return

      const isContains = modalRef.current.contains(ev.target as Node)
      if (!isContains) {
        console.log(open)
        onClose()
      }
    }
    if (open) {
      setTimeout(() => window.addEventListener('click', f), 200)
    }
    else {
      window.removeEventListener('click', f)
    }
    return () => {
      window.removeEventListener('click', f)
    }
  }, [open])

  return open && (
    <S.ModalIcons {...props} ref={modalRef}>
      <ul>
        {
          icons.map(([label, icon]) => (
            <li key={icon} onClick={() => onSelectIcon([label, icon])}>
              <Icon icon={`bx ${icon}`} />
              <span>{label}</span>
            </li>
          ))
        }
      </ul>
    </S.ModalIcons>
  )
}

export default ModalIcons