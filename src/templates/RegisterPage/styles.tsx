import scaleUpPresence from "@/keyframes/scale-up-presence";
import styled from "styled-components";


export const RegisterPage = styled.div`
    width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary.solid};
  display: flex;
  justify-content: center;
  padding: 1rem;
  align-items: center;
  .content{
    width: ${({ theme }) => theme.limits.content};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    animation: ${scaleUpPresence} .2s ease-in;
    h1{
      font-size: ${({ theme }) => theme.font.size.headings.h2[0]};
      span{
        color:  ${({ theme }) => theme.colors.third.solid};
      }
    }
    .sup-helper{
      span{
        font-weight: bold;
        color:  ${({ theme }) => theme.colors.third.solid};
      }
    }
    .sub-helper{
      margin-top: 2rem;
      a{
          color: ${({ theme }) => theme.colors.third.solid};
          font-weight: bold;
        }
    }
    form{
      width: 100%;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 2rem;
      button, a{
        border-radius: .7rem;
        height: 55px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: ${({ theme }) => theme.font.size.paragraphs.sm[0]};
        background-color: ${({ theme }) => theme.colors.third.solid};
        color: ${({ theme }) => theme.colors.primary.solid};
        font-weight: bold;
        border: 2px solid transparent;
        transition: .2s ease;
        &:hover{
          color: ${({ theme }) => theme.colors.third.solid};
          background-color: transparent;
          border: 2px solid ${({ theme }) => theme.colors.third.solid};
        }
        &:disabled{
          pointer-events: none;
          background-color: ${({ theme }) => theme.colors.light.weak};
        }
      }
    }
  }
`