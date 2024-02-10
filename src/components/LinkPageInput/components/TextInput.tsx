import { ChangeEvent, ChangeEventHandler, ComponentProps, FormEventHandler, LegacyRef, MutableRefObject, useEffect, useRef, useState } from "react"
import * as S from "../styles"
import Icon from "@/components/Icon"

interface TextInputProps extends Omit<ComponentProps<"div">, "onChange"> {
  type?: "h1" | "h2" | "p",
  text?: string,
  onChange?: (text: string) => void,
  maxLength?: number,
  placeholder?: string
}

export default function TextInput({ placeholder, text = "", type = "h1", onChange = () => { }, maxLength, ...props }: TextInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleFocused = () => {
    inputRef.current?.focus()
  }


  const handleChangeTextarea: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    onChange(e.target.value)
    e.target.style.height = 'auto'
    e.target.style.height = (e.target.scrollHeight) + 'px'
  }


  return (
    <S.TextInput type={type} {...props}>
      {type === "p" ? (
        <textarea placeholder={placeholder} maxLength={600} rows={1} ref={inputRef as LegacyRef<HTMLTextAreaElement>} spellCheck="false" className="textarea" onChange={handleChangeTextarea} value={text}></textarea>
      ) : (
        <input placeholder={placeholder} spellCheck="false" maxLength={maxLength} ref={inputRef} value={text} onChange={ev => onChange(ev.target.value)} />
      )}
      <Icon onClick={handleFocused} className="icon-paint" icon="bx bxs-paint" />
    </S.TextInput>
  )
}