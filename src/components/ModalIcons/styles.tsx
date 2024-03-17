import scaleUpPresence from "@/keyframes/scale-up-presence";
import styled from "styled-components";

export const ModalIcons = styled.div`
all: unset;
box-sizing: border-box;
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.third.solid};
  color:${({ theme }) => theme.colors.primary.solid};
  border-radius: 1rem;
  padding: 1rem;
  z-index: 5;

  ul{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
   
    li{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: .4rem;
      border-radius: .4rem;
      transition: .2s;
      &:hover{
        background-color:${({ theme }) => theme.colors.primary.solid};
        color:${({ theme }) => theme.colors.third.solid};
      }
      i{
        font-size: 1.9rem;
      }
      span{
        font-size: ${({ theme }) => theme.font.size.paragraphs.xxsm[0]};
        opacity: .7;
      }
    }
  }
`