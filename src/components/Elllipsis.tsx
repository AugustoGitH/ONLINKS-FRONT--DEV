import styled from "styled-components"

interface EllipsisProps {
  width: string
}
const Ellipsis = styled.span<EllipsisProps>`
  max-width: ${({ width }) => width}; /* largura máxima do contêiner */
  white-space: nowrap; /* impede que o texto quebre em várias linhas */
  overflow: hidden; /* oculta o conteúdo que ultrapassa o contêiner */
  text-overflow: ellipsis; 
`

export default Ellipsis