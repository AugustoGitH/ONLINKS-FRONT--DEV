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




export default function LinkPagesPanelPage() {
  const { user } = useAuthContext()
  const { addLinkPage, errors, dialogDeleteLinkPage, handleToggleShowDialogDeleteLinkPage, assignDefaultLinkPage, saveLinkPage, deleteLinkPage, changeLinkPage, isLimitLinkPages,
    linkPages } = useLinkPagesPanel(user)



  // useEffect(() => {
  //   api.get('/link-page/restrict/v1').then(data => {
  //     console.log(data)
  //   })
  // }, [])





  return (
    <S.LinkPagesPanelPage>
      <div className="content">
        <VerticalNavBarPanel>
          <div className="dash">
            <h3>Página de Links</h3>
            {/* <HeaderLinkPage
              def={{
                banner: {
                  src: profileDefault?.banner as File,
                  alt: ''
                },
                profile: {
                  src: profileDefault?.profile as File,
                  alt: ''
                }
              }}
            /> */}
            <div className="link-pages-grid">
              {
                linkPages && Object.entries(linkPages).map(([id, linkPage]) => (
                  <LinkPageInput
                    errors={errors[id]}
                    onSave={(linkPage) => saveLinkPage(id, linkPage)}
                    onAssignDefault={state => assignDefaultLinkPage(id, state)}
                    onChange={value => changeLinkPage(id, value)}
                    key={id}
                    value={{
                      banner: linkPage.banner,
                      description: linkPage.description,
                      isDefault: linkPage.isDefault,
                      links: linkPage.links,
                      profile: linkPage.profile,
                      subTitle: linkPage.subTitle,
                      title: linkPage.title
                    }}
                    maxLinkCreation={calculateLinkCountPermissions(user!.permissions)}
                    onDelete={() => handleToggleShowDialogDeleteLinkPage(id)}
                  />
                ))
              }

              {
                isLimitLinkPages && (
                  <div className='template-add-link-page'>
                    <TitleItem title="ola">
                      <button onClick={addLinkPage}>
                        <Icon icon={'bx bx-plus'} />
                      </button>
                    </TitleItem>
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