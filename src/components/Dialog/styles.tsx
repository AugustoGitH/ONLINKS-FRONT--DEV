import styled from "styled-components";


export const DialogCard = styled.div`
  width: 100vw;
  z-index: 99;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #01030c44;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .card-content{
    width: 400px;
    background-color: ${({ theme }) => theme.colors.primary.weak};
    padding: 2rem; 
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

`

export const DialogTitle = styled.span`
font-weight: bold;
  font-size: ${({ theme }) => `calc(${theme.font.size.headings.h3[0]} - .4rem)`};
`

interface DialogButtonProps {
  color: "danger" | "third"
}

export const DialogButton = styled.button<DialogButtonProps>`
border-radius: .3rem;
text-transform: uppercase;
  padding: .5rem 1rem;
  background-color: ${({ theme, color }) => theme.colors[color].solid};
  border: 1px solid ${({ theme, color }) => theme.colors[color].solid};
  color: ${({ theme }) => theme.colors.primary.solid};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
  transition: .2s;
  &:hover{
    background-color: transparent;
    color: ${({ theme, color }) => theme.colors[color].solid};
  }
`

export const DialogActions = styled.div`
  display: flex;
  gap: .7rem;
`