import Image from "next/image"
import * as S from "../styles"

import Icon from "@/components/Icon"
import { ChangeEvent, ReactNode, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { extractBase64FromFile } from "@/helpers/extract-base64-from-file"
import AlertHelperText from "./AlertHelperText"

interface ProfileInputProps {
  src?: string,
  onChange?: (file: File | null) => void,
  maxSizeInBytes?: number,
  reset?: boolean,
  id?: string,
  error?: boolean,
  helperText?: string | ReactNode
}

export default function ProfileInput({ error = false, helperText, id, maxSizeInBytes, src, onChange = () => { }, reset = false }: ProfileInputProps) {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(src ?? null)

  const handleChangeInputFile = (ev: ChangeEvent<HTMLInputElement>) => {
    const file = ev.target.files?.[0]
    onChange(file ?? null)
    if (!file) return
    if (maxSizeInBytes && file.size > maxSizeInBytes) {
      toast.error("Essa imagem é muito grande!")
      return
    }
    extractBase64FromFile(file, (base64) => {
      setPreview(base64)
    })

  }

  useEffect(() => {
    if (reset) {
      setPreview(null)
      onChange(null)
    }
  }, [reset])

  useEffect(() => {
    setPreview(src ?? null)
  }, [src])
  return (
    <S.ProfileInput>
      <label htmlFor={id}>
        <Icon className="icon-paint" icon="bx bxs-paint" />
      </label>
      <input accept="image/*" type="file" onChange={handleChangeInputFile} id={id} />
      {preview ? <Image src={preview as string} alt="" width={100} height={100} /> : (
        <Icon className="icon-user" icon="bx bxs-user" />
      )}
      {error && helperText ? <AlertHelperText helperText={helperText} /> : <></>}
    </S.ProfileInput>
  )
}