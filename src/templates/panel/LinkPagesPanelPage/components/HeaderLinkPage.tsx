import Image from 'next/image'
import * as S from '../styles'
import Icon from '@/components/Icon'
import { useState } from 'react'


interface ImageProps<T> {
  src?: T,
  alt: string
}
interface HeaderLinkPageProps {
  def: {
    banner: ImageProps<string | File>,
    profile: ImageProps<string | File>
  },
  secondary?: Array<{
    banner: ImageProps<string | File>,
    profile: ImageProps<string | File>
  }>
}
const HeaderLinkPage = ({ def, secondary }: HeaderLinkPageProps) => {
  const [preview, setPreview] = useState<{
    def: { banner: ImageProps<string>, profile: ImageProps<string> },
    secondary?: Array<{
      banner: ImageProps<string>,
      profile: ImageProps<string>
    }>
  }>({
    def: {
      banner: {
        alt: '',
        src: ''
      },
      profile: {
        alt: '',
        src: ''
      }
    },
  })
  return (
    <S.HeaderLinkPage>
      <div className="banner">
        {
          banner.src ? (
            <Image width={500} height={100} src={banner.src} alt={banner.alt} />
          ) : (
            <Icon className="icon-user" icon="bx bxs-image" />
          )
        }

      </div>
      <div className="profiles-row">
        {
          profile.default && (
            <div className="profile main">
              {
                profile.default.src ? (
                  <Image width={100} height={100} src={profile.default.src} alt={profile.default.alt} />
                ) : (
                  <Icon className="icon-user" icon="bx bxs-user" />
                )
              }

            </div>
          )
        }

        {
          profile.secondary?.map((props, index) => (
            <div className="profile" key={`profile-img-header${index}`}>
              {
                props.src ? (
                  <Image width={100} height={100} src={props.src} alt={props.alt} />
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