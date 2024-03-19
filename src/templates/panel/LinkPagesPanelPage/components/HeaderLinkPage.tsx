import Image from 'next/image'
import * as S from '../styles'
import Icon from '@/components/Icon'
import { useEffect, useState } from 'react'
import { extractBase64FromFile } from '@/helpers/extract-base64-from-file'


interface ImageProps {
  src?: string,
  alt: string
}
interface HeaderLinkPageProps {
  def: {
    banner: ImageProps,
    profile: ImageProps
  },
  secondary?: Array<{
    banner: ImageProps,
    profile: ImageProps
  }>
}
const HeaderLinkPage = ({ def, secondary }: HeaderLinkPageProps) => {

  return (
    <S.HeaderLinkPage>
      <div className="banner">
        {
          def.banner.src ? (
            <Image width={500} height={100} src={def.banner.src} alt={def.banner.alt} />
          ) : (
            <Icon className="icon-user" icon="bx bxs-image" />
          )
        }

      </div>
      <div className="profiles-row">
        {
          def.profile && (
            <div className="profile main">
              {
                def.profile.src ? (
                  <Image width={100} height={100} src={def.profile.src} alt={def.profile.alt} />
                ) : (
                  <Icon className="icon-user" icon="bx bxs-user" />
                )
              }

            </div>
          )
        }

        {
          secondary?.map((props, index) => (
            <div className="profile" key={`profile-img-header${index}`}>
              {
                props.profile.src ? (
                  <Image width={100} height={100} src={props.profile.src} alt={props.profile.alt} />
                ) : (
                  <></>
                )
              }

            </div>
          ))
        }

      </div>
    </S.HeaderLinkPage>
  )
}


export default HeaderLinkPage