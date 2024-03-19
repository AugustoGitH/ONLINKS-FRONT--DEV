import Image from "next/image"
import * as S from "./styles"
import banner from "@/assets/Augusto Caetano Westphal.png"
import { v4 as uuid } from 'uuid'

import BannerInput from "./components/BannerInput"
import ProfileInput from "./components/ProfileInput"
import profile from "@/assets/Design sem nome.png"
import TextInput from "./components/TextInput"
import { useEffect, useId, useState } from "react"
import ButtonInput from "./components/ButtonInput"
import Icon from "../Icon"
import { ErrorsLinkPage, ValueLinkInput, ValueLinkPageInput } from "./types"
import useLinkPageInput from "./hooks/useLinkPageInput"
import sortItemsInArray from "@/helpers/sort-items-in-array"

interface LinkPageInputProps {
  maxLinkCreation?: number,
  value?: ValueLinkPageInput,
  onChange?: (value: ValueLinkPageInput) => void,
  onDelete?: () => void,
  onAssignDefault?: (state: boolean) => void,
  onSave?: (value?: ValueLinkPageInput) => Promise<boolean>,
  onCancel?: (value?: ValueLinkPageInput) => Promise<boolean>,
  errors?: ErrorsLinkPage
}



export default function LinkPageInput({
  onSave = async () => false,
  onCancel = async () => false,
  onAssignDefault = () => { },
  onDelete = () => { },
  maxLinkCreation = 1,
  value,
  errors,
  onChange = () => { } }: LinkPageInputProps) {
  const [idProfile, idBanner] = [useId(), useId()]
  const { addLink, isLimited, assignDefault, deleteLink, handleCancelLinkPage, handleSaveLinkPage, handleToggleShowSaveConfirm, selectInput, showSaveConfirm } = useLinkPageInput({
    events: {
      onAssignDefault,
      onChange,
      onSave,
      onCancel
    },
    maxLinkCreation,
    value
  })


  return (
    <S.LinkPageInput>
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
          error={!!errors?.banner}
          helperText={errors?.banner?.message}
          src={value?.banner as string ?? undefined}
          id={idBanner}
          maxSizeInBytes={5 * 1024 * 1024}
          onChange={file => selectInput("banner", file)}
        />
        <ProfileInput
          error={!!errors?.profile}
          helperText={errors?.profile?.message}
          src={value?.profile as string ?? undefined}
          id={idProfile}
          maxSizeInBytes={5 * 1024 * 1024}
          onChange={file => selectInput("profile", file)}
        />
      </header>
      <div className="description">
        <TextInput
          error={!!errors?.title}
          helperText={errors?.title?.message}
          placeholder="Insira o Título"
          maxLength={40}
          text={value?.title || ''}
          type="h1"
          onChange={value => selectInput("title", value)}
        />
        <TextInput
          error={!!errors?.subTitle}
          helperText={errors?.subTitle?.message}
          placeholder='Insira o Subtítulo'
          maxLength={50}
          text={value?.subTitle || ''}
          type="h2"
          onChange={value => selectInput("subTitle", value)}
        />
        <TextInput
          error={!!errors?.description}
          helperText={errors?.description?.message}
          placeholder='Insira a Descrição'
          style={{ marginTop: ".4rem" }}
          onChange={value => selectInput("description", value)}
          text={value?.description || ''} type="p"
        />
      </div>
      <div className="btns">
        {
          value?.links && (sortItemsInArray(Object.entries(value.links).map(([id, link]) => ({ id, ...link })), "order") as Array<ValueLinkInput & { id: string }>).map((link) => (
            <ButtonInput
              onDelete={() => deleteLink(link.id)}
              onChange={valueCh => selectInput('links', {
                ...(value?.links ?? {}),
                [link.id]: {
                  ...(value.links && {
                    ...link,
                    ...valueCh
                  })
                }
              })}
              error={!!errors?.links?.[link.id]}
              helperText={errors?.links?.[link.id]?.message}
              value={link}
              key={link.id}
              maxLengthTitle={33}
            />
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
      {
        showSaveConfirm && (
          <div className='btns-confirm-save'>
            <button className="btn-save" onClick={handleSaveLinkPage}>Salvar</button>
            <button className="btn-cancel" onClick={handleCancelLinkPage}>Cancelar</button>
          </div>
        )
      }

    </S.LinkPageInput>
  )
}