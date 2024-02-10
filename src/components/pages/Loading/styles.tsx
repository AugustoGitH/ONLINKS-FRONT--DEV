import styled from "styled-components";


export const LoadingPage = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary.solid};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  h1{ 
    margin-bottom: 2rem;
        font-size: ${({ theme }) => theme.font.size.headings.h2[0]};
        i, span{
          color: ${({ theme }) => theme.colors.third.solid};
        }
      }
`