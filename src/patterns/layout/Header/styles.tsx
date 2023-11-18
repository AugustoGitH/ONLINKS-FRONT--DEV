import styled from "styled-components";


export const Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.primary.solid};
  .content{
    width: ${({ theme }) => theme.limits.content};
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
      font-size: ${({ theme }) => theme.font.size.headings.h3[0]};
      display: inline-flex;
      align-items: center;
      i{
        color: ${({ theme }) => theme.colors.third.solid};
      }
    }

    nav{
      display: flex;
      gap: 1rem;
      a{
        font-weight: bold;
        color: ${({ theme }) => theme.colors.light.weak};
        transition: .2s ease;
        font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
        &:hover{
          color: ${({ theme }) => theme.colors.light.solid};
        }
      }
    }
  }
`