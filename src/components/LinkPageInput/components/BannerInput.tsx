import banner from "@/assets/Augusto Caetano Westphal.png"

import Image from "next/image"
import * as S from "../styles"
import Icon from "@/components/Icon"
import { ChangeEvent, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { extractBase64FromFile } from "@/helpers/extract-base64-from-file"

interface BannerInputProps {
  src?: string,
  onChange?: (file: File | null) => void,
  maxSizeInBytes?: number,
  reset?: boolean
}

export default function BannerInput({ maxSizeInBytes, src, onChange = () => { }, reset = false }: BannerInputProps) {

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
  return (
    <S.BannerInput>
      <label htmlFor="input-banner">
        <Icon className="icon-paint" icon="bx bxs-paint" />
      </label>
      <input onChange={handleChangeInputFile} accept="image/*" type="file" id="input-banner" />
      {preview && <Image src={preview as string} alt="" width={500} height={100} />}
    </S.BannerInput>
  )
}