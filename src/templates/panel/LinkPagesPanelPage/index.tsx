import VerticalNavBarPanel from "@/components/VerticalNavBarPanel"
import * as S from "./styles"
import LinkPageInput from "@/components/LinkPageInput"
import { useAuthContext } from "@/contexts/AuthContext"
import calculateLinkCountPermissions from "@/helpers/permissions/calculateLinkCountPermissions"
import Icon from "@/components/Icon"
import { useState } from "react"
import { ValueLinkPageInput } from "@/components/LinkPageInput/types"
import { v4 as uuid } from 'uuid'
import calculateLinkPageCountPermissions from "@/helpers/permissions/calculateLinkPageCountPermissions"
import Image from "next/image"
import HeaderLinkPage from "./components/HeaderLinkPage"




export default function LinkPagesPanelPage() {
  const { user } = useAuthContext()
  const [linkPages, setLinkPages] = useState<Record<string, ValueLinkPageInput & { order: number }>>({})


  const isLimitLinkPages = Object.keys(linkPages).length + 1 <= calculateLinkPageCountPermissions(user!.permissions)

  const editLinkPage = (id: string, value: ValueLinkPageInput) => {
    setLinkPages(prevLinkPages => ({
      ...prevLinkPages,
      [id]: {
        ...prevLinkPages[id],
        ...value
      }
    }))
  }


  const addLinkPage = () => {
    setLinkPages(prevLinkPages => {
      const quantityLinkPages = Object.keys(prevLinkPages).length
      return {
        ...prevLinkPages,
        [uuid()]: {
          banner: null,
          description: null,
          isDefault: quantityLinkPages + 1 === 1,
          links: null,
          profile: null,
          subTitle: null,
          title: null,
          order: quantityLinkPages + 1
        }
      }
    })
  }

  const deleteLinkPage = (id: string) => {
    setLinkPages(prevLinkPages => Object.fromEntries(Object.entries(prevLinkPages).filter(([idV]) => idV !== id)))
  }

  const profileDefault = Object.entries(linkPages).find(([id, { isDefault }]) => isDefault)?.[1]

  console.log(linkPages)

  return (
    <S.LinkPagesPanelPage>
      <div className="content">
        <VerticalNavBarPanel>
          <div className="dash">

            {/* <h3>Página de Links</h3> */}
            <HeaderLinkPage
              banner={{
                src: undefined,
                alt: 'banner'
              }}
              profile={{
                default: profileDefault ? {
                  src: profileDefault.profile ?? undefined,
                  alt: 'profile'
                } : undefined
              }}

            />
            <div className="link-pages-grid">
              {
                Object.entries(linkPages).map(([id, value]) => (
                  <LinkPageInput
                    onChange={value => editLinkPage(id, value)}
                    key={id}
                    value={value}
                    maxLinkCreation={calculateLinkCountPermissions(user!.permissions)}
                    onDelete={() => deleteLinkPage(id)}
                  />
                ))
              }

              {
                isLimitLinkPages && (
                  <div className='template-add-link-page'>
                    <button onClick={addLinkPage}>
                      <Icon icon={'bx bx-plus'} />
                    </button>
                  </div>
                )
              }
            </div>
          </div>
        </VerticalNavBarPanel>
      </div>
    </S.LinkPagesPanelPage>
  )
}