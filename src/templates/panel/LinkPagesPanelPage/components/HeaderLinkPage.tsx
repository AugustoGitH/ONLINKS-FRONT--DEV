import Image from 'next/image'
import * as S from '../styles'
import Icon from '@/components/Icon'
import { useEffect, useState } from 'react'
import { extractBase64FromFile } from '@/helpers/extract-base64-from-file'


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

  useEffect(() => {
    const test = (src: File | string | undefined) => {
      if (src && typeof src !== 'string') {
        extractBase64FromFile(src, (base64) => {
          setPreview(prev => ({
            ...prev,
            def: {
              ...prev.def,
              banner: {
                alt: '',
                src: base64 as string
              },

            }
          }))
        })
      }
    }
    if (def.banner.src && typeof def.banner.src !== 'string') {
      extractBase64FromFile(def.banner.src, (base64) => {
        setPreview(prev => ({
          ...prev,
          def: {
            ...prev.def,
            banner: {
              alt: '',
              src: base64 as string
            },

          }
        }))
      })
    }
    if (def.profile.src && typeof def.profile.src !== 'string') {
      extractBase64FromFile(def.profile.src, (base64) => {
        setPreview(prev => ({
          ...prev,
          def: {
            ...prev.def,
            profile: {
              alt: '',
              src: base64 as string
            },

          }
        }))
      })
    }


    console.log(def)
  }, [def])

  return (
    <S.HeaderLinkPage>
      <div className="banner">
        {
          preview.def.banner.src ? (
            <Image width={500} height={100} src={preview.def.banner.src} alt={preview.def.banner.alt} />
          ) : (
            <Icon className="icon-user" icon="bx bxs-image" />
          )
        }

      </div>
      <div className="profiles-row">
        {
          preview.def.profile && (
            <div className="profile main">
              {
                preview.def.profile.src ? (
                  <Image width={100} height={100} src={preview.def.profile.src} alt={preview.def.profile.alt} />
                ) : (
                  <Icon className="icon-user" icon="bx bxs-user" />
                )
              }

            </div>
          )
        }

        {
          preview.secondary?.map((props, index) => (
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