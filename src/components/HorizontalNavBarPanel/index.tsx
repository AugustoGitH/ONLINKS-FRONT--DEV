import { useAuthContext } from "@/contexts/AuthContext"
import * as S from "./styles"
import { formatNameShortLines } from "@/helpers/format-name-short-lines"
import { useLoaderContents } from "@/hooks/useLoaderContents"
import Icon from "../Icon"
import Link from "next/link"
import { navigationRoutes } from "@/settings/navigation/routes"
import TitleItem from "../TitleItem"
import { useLogout } from "@/hooks/useLogout"
import { Dialog } from "../Dialog"
import { useState } from "react"
export default function HorizontalNavBarPanel() {
  const { user } = useAuthContext()
  // const {  isLoading } = useLoaderContents(user?.name)
  const { handleLogout, isLoggedOut, handleToggleShowDialog, showDialog } = useLogout()


  return (
    <>
      <S.HorizontalNavBarPanel>
        <Link href={navigationRoutes.panel.route} className="title-main-panel">

          <span className="sub-title-onlinks">Seu painel</span>
          <span className="title-onlinks"><span>On</span>Links</span>
        </Link>
        <div className="btns-action">
          <button onClick={handleToggleShowDialog}><Icon className="icon" icon="bx bxs-log-out" /></button>
        </div>
      </S.HorizontalNavBarPanel>
      <Dialog.Card open={showDialog} onClose={!isLoggedOut ? handleToggleShowDialog : undefined}>
        <Dialog.Title>Você deseja sair da sua conta?</Dialog.Title>
        <Dialog.Actions>
          <Dialog.Button disabled={isLoggedOut} onClick={handleLogout}>{isLoggedOut ? "Saindo..." : "Sim"}</Dialog.Button>
          <Dialog.Button disabled={isLoggedOut} onClick={!isLoggedOut ? handleToggleShowDialog : undefined} color="danger">Não</Dialog.Button>
        </Dialog.Actions>
      </Dialog.Card>
    </>
  )
}