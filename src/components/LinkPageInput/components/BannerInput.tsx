import banner from "@/assets/Augusto Caetano Westphal.png"

import Image from "next/image"
import * as S from "../styles"
import Icon from "@/components/Icon"
import { ChangeEvent, ReactNode, useEffect, useId, useState } from "react"
import { toast } from "react-toastify"
import { extractBase64FromFile } from "@/helpers/extract-base64-from-file"
import AlertHelperText from "./AlertHelperText"



interface BannerInputProps {
  src?: string,
  onChange?: (file: File | null) => void,
  maxSizeInBytes?: number,
  reset?: boolean,
  id?: string,
  error?: boolean,
  helperText?: string | ReactNode
}

export default function BannerInput({ helperText, error = false, id, maxSizeInBytes, src, onChange = () => { }, reset = false }: BannerInputProps) {
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
    setPreview(src ?? null)
  }, [src])
  useEffect(() => {
    if (reset) {
      setPreview(null)
      onChange(null)
    }
  }, [reset])
  return (
    <S.BannerInput>
      <label htmlFor={id}>
        <Icon className="icon-paint" icon="bx bxs-paint" />
      </label>
      <input onChange={handleChangeInputFile} accept="image/*" type="file" id={id} />
      {preview && <Image src={preview as string} alt="" width={500} height={100} />}
      {error && helperText ? <AlertHelperText helperText={helperText} /> : <></>}
    </S.BannerInput>
  )
}