import { useAuthContext } from "@/contexts/AuthContext"
import * as S from "./styles"
import VerticalNavBarPanel from "@/components/VerticalNavBarPanel"
import { useLinkPagesQuery } from "@/queries/useLinkPagesQuery"
import { useLinksQuery } from "@/queries/useLinksQuery"

export default function PanelPage() {
  const { user } = useAuthContext()

  return (
    <S.PanelPage>
      <div className="content">
        <VerticalNavBarPanel>
          <div className="dash">
            <h3>Painel</h3>
          </div>
        </VerticalNavBarPanel>
      </div>
    </S.PanelPage>
  )
}