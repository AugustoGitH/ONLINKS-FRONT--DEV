import Button from "@/components/Button"
import * as S from "./styles"
import { navigationRoutes } from "@/settings/navigation/routes"

export default function NotAllowedPage() {
  return (
    <S.NotAllowedPage>
      <h2>Você não possui permissão <br /> para acessar essa página!</h2>
      <Button variant="underline" href={navigationRoutes.login.route}>Voltar para o login</Button>
    </S.NotAllowedPage>
  )
}