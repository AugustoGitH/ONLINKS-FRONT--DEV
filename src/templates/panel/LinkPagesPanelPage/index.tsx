import VerticalNavBarPanel from "@/components/VerticalNavBarPanel"
import * as S from "./styles"
import LinkPageInput from "@/components/LinkPageInput"
import { useAuthContext } from "@/contexts/AuthContext"
import calculateLinkCountPermissions from "@/helpers/permissions/calculate-link-count-permissions"
import Icon from "@/components/Icon"
import { useEffect, useState } from "react"

import { api } from "@/settings/api/axios"
import TitleItem from "@/components/TitleItem"
import useLinkPagesPanel from "./hooks/useLinkPagesPanel"
import ModalIcons from "@/components/ModalIcons"
import HeaderLinkPage from "./components/HeaderLinkPage"
import { Dialog } from "@/components/Dialog"
import useLinkPagesStore from "@/stores/link-pages/useLinkPagesStore"
import sortItemsInArray from "@/helpers/sort-items-in-array"
import { ValueLinkInput, ValueLinkPageInput } from "@/components/LinkPageInput/types"




export default function LinkPagesPanelPage() {
  const { user } = useAuthContext()
  const { addLinkPage, errors, cancelLinkPage, dialogDeleteLinkPage, handleToggleShowDialogDeleteLinkPage, assignDefaultLinkPage, saveLinkPage, deleteLinkPage, changeLinkPage, isLimitLinkPages,
    linkPageInputs } = useLinkPagesPanel()
  const [
    linkPagesInStore,
  ] = useLinkPagesStore((state) => [
    state.linkPages,
  ]);

  const linkPageDefault = linkPagesInStore?.find(linkPage => linkPage.isDefault)
  const linkPagesNotFound = linkPagesInStore?.filter(linkPage => !linkPage.isDefault)

  return (
    <S.LinkPagesPanelPage>
      <div className="content">
        <VerticalNavBarPanel>
          <div className="dash">
            <h3>Página de Links</h3>
            <HeaderLinkPage
              def={{
                banner: {
                  src: linkPageDefault?.banner ?? "",
                  alt: ''
                },
                profile: {
                  src: linkPageDefault?.profile ?? "",
                  alt: ''
                }
              }}
              secondary={linkPagesNotFound?.map(linkPage => ({
                banner: {
                  alt: "",
                  src: linkPage.banner ?? ""
                },
                profile: {
                  alt: "",
                  src: linkPage.profile ?? ""
                }
              }))}
            />
            {/* <div className="line-separator"><span /></div> */}
            <div className="link-pages-grid">
              {
                linkPageInputs && (sortItemsInArray(Object.entries(linkPageInputs).map(([id, linkPage]) => ({ id, ...linkPage })), "order") as Array<ValueLinkPageInput & { id: string }>).map((linkPageIn) => (
                  <LinkPageInput
                    errors={errors[linkPageIn.id]}
                    onCancel={linkPage => cancelLinkPage(linkPageIn.id, linkPage)}
                    onSave={(linkPage) => saveLinkPage(linkPageIn.id, linkPage)}
                    onAssignDefault={state => assignDefaultLinkPage(linkPageIn.id, state)}
                    onChange={value => changeLinkPage(linkPageIn.id, value)}
                    key={linkPageIn.id}
                    value={{
                      banner: linkPageIn.banner,
                      description: linkPageIn.description,
                      isDefault: linkPageIn.isDefault,
                      links: linkPageIn.links,
                      profile: linkPageIn.profile,
                      subTitle: linkPageIn.subTitle,
                      title: linkPageIn.title,
                      order: linkPageIn.order
                    }}
                    maxLinkCreation={calculateLinkCountPermissions(user!.permissions)}
                    onDelete={() => handleToggleShowDialogDeleteLinkPage(linkPageIn.id)}
                  />
                ))
              }

              {
                isLimitLinkPages && (
                  <div className='template-add-link-page'>
                    <button onClick={addLinkPage}>
                      <Icon icon={'bx bx-plus'} />
                      <div className="ballon-info">
                        Adicionar nova <strong>Página de Links</strong>
                      </div>
                    </button>
                  </div>
                )
              }
            </div>
          </div>
        </VerticalNavBarPanel>
      </div>
      <Dialog.Card open={dialogDeleteLinkPage.show}>
        <Dialog.Title>Você deseja deletar está página de links?</Dialog.Title>
        <Dialog.Actions>
          <Dialog.Button onClick={() => deleteLinkPage()}>Sim</Dialog.Button>
          <Dialog.Button onClick={() => handleToggleShowDialogDeleteLinkPage()} color="danger">Não</Dialog.Button>
        </Dialog.Actions>
      </Dialog.Card>
    </S.LinkPagesPanelPage>
  )
}