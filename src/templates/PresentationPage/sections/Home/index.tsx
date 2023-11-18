import Button from "@/components/Button"
import * as S from "./styles"

export default function Home() {
  return (
    <S.Home>
      <div className="content">
        <h1><span>Maximize</span> Sua <span>Presença Online</span> com Nossas Páginas de Links Personalizadas</h1>
        <p>Explore uma Nova Dimensão de Compartilhamento e Conexão Online</p>
        <Button variant="underline">Vamos começar?</Button>
      </div>
    </S.Home>
  )
}