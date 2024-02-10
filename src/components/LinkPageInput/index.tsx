import Image from "next/image"
import * as S from "./styles"
import banner from "@/assets/Augusto Caetano Westphal.png"
import { v4 as uuid } from 'uuid'

import BannerInput from "./components/BannerInput"
import ProfileInput from "./components/ProfileInput"
import profile from "@/assets/Design sem nome.png"
import TextInput from "./components/TextInput"
import { useEffect, useState } from "react"
import ButtonInput from "./components/ButtonInput"
import Icon from "../Icon"
import { ValueLinkPageInput } from "./types"



interface LinkPageInputProps {
  maxLinkCreation?: number,
  value?: ValueLinkPageInput,
  onChange?: (value: ValueLinkPageInput) => void,
  onDelete?: () => void,
  onAssignDefault?: (state: boolean) => void
}

export default function LinkPageInput({ onAssignDefault = () => { }, onDelete = () => { }, maxLinkCreation = 1, value, onChange = () => { } }: LinkPageInputProps) {


  const isLimited = value?.links === null || value?.links && Object.keys(value.links).length + 1 <= maxLinkCreation


  const selectInput = (prop: string, valueInp: any) => {
    if (!value) return
    onChange({
      ...value,
      [prop]: valueInp
    })

  }



  const addLink = () => {
    if (!isLimited || !value) return
    onChange({
      ...value,
      links: {
        ...(value.links ?? {}),
        [uuid()]: {
          href: '',
          title: '',
          order: value.links ? Object.keys(value.links).length + 1 : 1
        }
      }
    })

  }

  const assignDefault = () => {
    if (!value) return
    onChange({
      ...value,
      isDefault: !value?.isDefault
    })

  }

  const deleteButton = (id: string) => {
    if (!value) return
    onChange({
      ...value,
      ...(value.links && {
        links: Object.fromEntries(Object.entries(value.links).filter(([idV]) => idV !== id))
      })
    })
  }

  return (
    <S.LinkPageInput>

      {
        value?.isDefault && (
          <span className='alert-default-helper'>~ padrão ~</span>
        )
      }
      <div className="controls">
        <button className={`btn-default ${value?.isDefault ? 'selected' : ''}`} onClick={() => assignDefault()} >
          <Icon icon='bx bxs-crown' />
        </button>
        <button className="btn-delete" onClick={() => onDelete()}>
          <Icon icon='bx bxs-trash-alt' />
        </button>

      </div>

      <header>
        <BannerInput
          src={value?.banner as string ?? undefined}
          maxSizeInBytes={5 * 1024 * 1024}
          onChange={file => selectInput("banner", file)}
        />
        <ProfileInput
          src={value?.profile as string ?? undefined}
          maxSizeInBytes={5 * 1024 * 1024}
          onChange={file => selectInput("profile", file)}
        />
      </header>
      <div className="description">
        <TextInput placeholder="Insira o Título" maxLength={40} text={value?.title || ''} type="h1" onChange={value => selectInput("title", value)} />
        <TextInput placeholder='Insira o Subtítulo' maxLength={50} text={value?.subTitle || ''} type="h2" onChange={value => selectInput("subTitle", value)} />
        <TextInput placeholder='Insira a Descrição' style={{ marginTop: ".4rem" }} onChange={value => selectInput("description", value)} text={value?.description || ''} type="p" />
      </div>
      <div className="btns">
        {
          value?.links && Object.entries(value.links).map(([id, link]) => (
            <ButtonInput onDelete={() => deleteButton(id)} onChange={valueCh => selectInput('links', {
              ...(value?.links ?? {}),
              [id]: {
                ...(value.links && {
                  ...link,
                  ...valueCh
                })
              }
            })} value={link} key={id} maxLengthTitle={32} />
          ))
        }
        {
          isLimited && (
            <button className="btn-increment-btn" onClick={addLink}>
              <Icon icon="bx bx-plus" />
            </button>
          )
        }


      </div>
    </S.LinkPageInput>
  )
}