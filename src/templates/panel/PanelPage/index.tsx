import { useAuthContext } from "@/contexts/AuthContext"
import * as S from "./styles"
import VerticalNavBarPanel from "@/components/VerticalNavBarPanel"
import { useLinkPagesQuery } from "@/queries/useLinkPagesQuery"
import { useLinksQuery } from "@/queries/useLinksQuery"

export default function PanelPage() {
  const { user } = useAuthContext()
  const { data } = useLinkPagesQuery()

  console.log(data)
  return (
    <S.PanelPage>
      <div className="content">
        <VerticalNavBarPanel>
          content
        </VerticalNavBarPanel>
      </div>
    </S.PanelPage>
  )
}