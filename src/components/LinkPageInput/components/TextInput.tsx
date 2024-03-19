import { ChangeEvent, ChangeEventHandler, ComponentProps, FormEventHandler, LegacyRef, MutableRefObject, ReactNode, useEffect, useRef, useState } from "react"
import * as S from "../styles"
import Icon from "@/components/Icon"
import AlertHelperText from "./AlertHelperText"

interface TextInputProps extends Omit<ComponentProps<"div">, "onChange"> {
  type?: "h1" | "h2" | "p",
  text?: string,
  onChange?: (text: string) => void,
  maxLength?: number,
  placeholder?: string,
  error?: boolean,
  helperText?: string | ReactNode
}

export default function TextInput({
  placeholder,
  text = "",
  error = false,
  helperText,
  type = "h1",
  onChange = () => { },
  maxLength, ...props }: TextInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleFocused = () => {
    inputRef.current?.focus()
  }



  const handleChangeTextarea: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    onChange(e.target.value)
    e.target.style.height = 'auto'
    e.target.style.height = (e.target.scrollHeight) + 'px'
  }
  useEffect(() => {
    // Redimensionar o textarea quando o texto mudar
    if (type === "p" && inputRef.current instanceof HTMLTextAreaElement) {
      inputRef.current.style.height = "auto"
      inputRef.current.style.height = inputRef.current.scrollHeight + "px"
    }
  }, [text, type])

  return (
    <S.TextInput type={type} {...props}>
      {type === "p" ? (
        <textarea
          placeholder={placeholder}
          maxLength={600}
          rows={1} ref={inputRef as LegacyRef<HTMLTextAreaElement>}
          spellCheck="false"
          className="textarea"
          onChange={handleChangeTextarea}
          value={text} />
      ) : (
        <input
          placeholder={placeholder}
          spellCheck="false"
          maxLength={maxLength}
          ref={inputRef}
          value={text}
          onChange={ev => onChange(ev.target.value)}
        />
      )}
      <Icon onClick={handleFocused} className="icon-paint" icon="bx bxs-paint" />
      {error && helperText ? <AlertHelperText helperText={helperText} /> : <></>}
    </S.TextInput>
  )
}
