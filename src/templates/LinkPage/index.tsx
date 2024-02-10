import Image from "next/image"
import * as S from "./styles"
import banner from "@/assets/Augusto Caetano Westphal.png"
import profile from "@/assets/Design sem nome.png"
import Icon from "@/components/Icon"
import Link from "next/link"

export default function LinkPage() {
  return (
    <S.LinkPage>
      <div className="content">
        <header>
          <div className="banner">
            <Image src={banner} alt="" width={600} height={100} />
          </div>
          <div className="profiles">
            <div className="profile">
              <Image src={profile} alt="" width={100} height={100} />
              <div className="status" />
            </div>
            <div className="profile secondary">
              <Image src={profile} alt="" width={100} height={100} />
            </div>
          </div>
        </header>
        <div className="description">
          <h1 className="title">Augusto Caetano Westphal</h1>
          <h2 className="sub-title">Desenvolvedor Web Full-Stack</h2>
          <p className="desc">Estudante de Engenharia de Software, em início de carreira com aproximadamente 2 anos de experiência e buscando se desenvolver na área.

            Acredito que a tecnologia é uma ferramenta poderosa para mudar o mundo e estou sempre em busca de novos desafios e oportunidades para contribuir para essa causa.

            Trabalho com as tecnologias e linguagens de programação de Front-End e Back-End, como HTML, CSS, SASS, JavaScript, TypeScript, ReactJS, Styled-Components, JQUERY, BOOTSTRAP, FireBase Storage, FireBase Firestore, Node.js, MongoDB.</p>
        </div>
        <div className="btns-custom">
          <a href=""><Icon className="icon" icon="bx bxl-facebook-square" />Facebook</a>
          <a href=""><Icon className="icon" icon="bx bxl-facebook-square" />Facebook</a>
          <a href=""><Icon className="icon" icon="bx bxl-facebook-square" />Facebook</a>
          <a href=""><Icon className="icon" icon="bx bxl-facebook-square" />Facebook</a>
        </div>

        <p className="created-by">Desenvolvido pela equipe da <a href="">Tech Legion</a></p>
      </div>
    </S.LinkPage>
  )
}