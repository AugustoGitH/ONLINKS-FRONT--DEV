import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
  }
  body{
    background-color: ${({ theme }) => theme.colors.primary.solid};
    color: ${({ theme }) => theme.colors.light.solid};
    font-family: ${({ theme }) => theme.font.family.Poppins};
  }
  input{
    font-family: inherit;
  }
  a, button{
    all: unset;
    box-sizing: border-box;
    cursor: pointer;
    font-size: inherit;
    line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
  }
  h1{
    font-size: ${({ theme }) => theme.font.size.headings.h1[0]};
    line-height: ${({ theme }) => theme.font.size.headings.h1[1]};
  }
  h2{
    font-size: ${({ theme }) => theme.font.size.headings.h2[0]};
    line-height: ${({ theme }) => theme.font.size.headings.h2[1]};
  }
  h3{
    font-size: ${({ theme }) => theme.font.size.headings.h3[0]};
    line-height: ${({ theme }) => theme.font.size.headings.h3[1]};
  }
  h4{
    font-size: ${({ theme }) => theme.font.size.headings.h4[0]};
    line-height: ${({ theme }) => theme.font.size.headings.h4[1]};
  }
  p{
    color: ${({ theme }) => theme.colors.light.weak};
    font-family:  ${({ theme }) => theme.font.family.Roboto};
    font-size: ${({ theme }) => theme.font.size.paragraphs.sm[0]};
    line-height: ${({ theme }) => theme.font.size.paragraphs.sm[1]};
  }
`

export default GlobalStyle