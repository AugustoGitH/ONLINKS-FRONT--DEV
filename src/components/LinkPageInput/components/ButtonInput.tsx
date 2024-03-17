import Icon from "@/components/Icon"
import * as S from "../styles"
import { ReactNode, useEffect, useRef, useState } from "react"
import { DirectionIconLink, ValueLinkInput } from "../types"
import ModalIcons from "@/components/ModalIcons"
import AlertHelperText from "./AlertHelperText"

interface ButtonInputProps {
  maxLengthTitle?: number,
  maxLengthHref?: number,
  onChange?: (value: Partial<ValueLinkInput>) => void,
  onDelete?: () => void,
  value?: Partial<ValueLinkInput>,
  error?: boolean,
  helperText?: string | ReactNode
}

const returnIconsDefault = (icon: [DirectionIconLink, string, string] | null) => {

  const defaultIcon: Record<DirectionIconLink, [string, string] | null> = {
    left: null,
    right: null
  }
  if (!icon) return defaultIcon
  const [direction, ...iconInf] = icon

  return {
    ...defaultIcon,
    [direction]: iconInf
  }
}

export default function ButtonInput({
  maxLengthTitle,
  error = false,
  helperText,
  maxLengthHref,
  onChange = () => { },
  value,
  onDelete = () => { } }: ButtonInputProps) {
  const inputEditTitleRef = useRef<HTMLInputElement | null>(null)
  const inputEditLinkRef = useRef<HTMLInputElement | null>(null)

  const [showInputEditLink, setShowInputEditLink] = useState(false)

  const handleClickBtnEditTitle = () => {
    inputEditTitleRef?.current?.focus()
  }
  const handleClickBtnEditLink = () => {
    setShowInputEditLink(prev => !prev)
    inputEditLinkRef?.current?.focus()
  }
  const [iconInBtn, setIconInBtn] = useState(returnIconsDefault(value?.icon ?? null))
  const [showModalIcons, setShowModalIcons] = useState({ left: false, rigth: false })


  useEffect(() => {
    if (value?.icon) {
      setIconInBtn(returnIconsDefault(value.icon))
    }
  }, [value?.icon])


  const handleSelectIcon = (icon: [string, string]) => {
    const direction = showModalIcons.left ? 'left' : showModalIcons.rigth ? 'right' : null
    if (!direction) return
    setIconInBtn({
      left: null,
      right: null,
      [direction]: icon,
    })
    onChange({
      icon: [direction, ...icon],

    })
    setShowModalIcons({
      left: false,
      rigth: false
    })
  }
  return (
    <S.ButtonInput>
      <ModalIcons onSelectIcon={handleSelectIcon}
        onClose={() => setShowModalIcons(prev => ({ left: false, rigth: false }))}
        style={{
          ...(showModalIcons.left ? {
            right: '450px'
          } : {
            left: '450px'
          })

        }} open={showModalIcons.left || showModalIcons.rigth} className="modal-select-icons" />
      <div className="button">

        <button
          onClick={() => setShowModalIcons(prev => ({ left: !prev.left, rigth: false }))}
          className="btn-add-icon"
        >
          {
            iconInBtn.left ? <Icon className="icon-select" icon={`bx ${iconInBtn.left[1]}`} /> : <Icon className="icon-add-icons" icon="bx bxs-happy-alt" />
          }
        </button>
        <input placeholder="Nome do botão" ref={inputEditTitleRef} value={value?.title} onChange={ev => onChange({ title: ev.target.value })} spellCheck="false" maxLength={maxLengthTitle} />
        <button
          onClick={() => setShowModalIcons(prev => ({ left: false, rigth: !prev.rigth }))}
          className="btn-add-icon"
        >
          {
            iconInBtn.right ? <Icon className="icon-select" icon={`bx ${iconInBtn.right[1]}`} /> : <Icon className="icon-add-icons" icon="bx bxs-happy-alt" />
          }
        </button>

      </div>

      {
        showInputEditLink && <input maxLength={maxLengthHref} placeholder="Link do botão" ref={inputEditLinkRef} className="edit-link-input" value={value?.href} onChange={ev => onChange({ href: ev.target.value })} />
      }

      <div className="controls-edit">
        <button className="btn-edit-title" onClick={handleClickBtnEditTitle}>
          <Icon className="icon" icon="bx bxs-paint" />
        </button>
        <button className="btn-edit-link" onClick={handleClickBtnEditLink}>
          <Icon className="icon" icon="bx bx-link-alt" />
        </button>
        <button className="btn-delete-link" onClick={() => onDelete()}>
          <Icon className="icon" icon="bx bxs-trash-alt" />
        </button>
      </div>

      {
        error && helperText ? <AlertHelperText helperText={helperText} /> : <></>
      }
    </S.ButtonInput>
  )
}