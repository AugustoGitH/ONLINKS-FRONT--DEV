import Icon from "@/components/Icon"
import * as S from "./styles"
import Loader from "@/components/Loader"

export default function LoadingPage() {
  return (
    <S.LoadingPage>
      <h1><Icon icon="bx bx-link" /><span>on</span>Links</h1>
      <Loader size="md" />
    </S.LoadingPage>
  )
}