import Icon from "@/components/Icon"
import * as S from "../styles"
import { useRef, useState } from "react"
import { ValueLinkInput } from "../types"

interface ButtonInputProps {
  maxLengthTitle?: number,
  maxLengthHref?: number,
  onChange?: (value: Partial<ValueLinkInput>) => void,
  onDelete?: () => void,
  value?: Partial<ValueLinkInput>
}

export default function ButtonInput({ maxLengthTitle, maxLengthHref, onChange = () => { }, value, onDelete = () => { } }: ButtonInputProps) {
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


  return (
    <S.ButtonInput>
      <div className="button">
        <input placeholder="Nome do botão" ref={inputEditTitleRef} value={value?.title} onChange={ev => onChange({ title: ev.target.value })} spellCheck="false" maxLength={maxLengthTitle} />
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


    </S.ButtonInput>
  )
}