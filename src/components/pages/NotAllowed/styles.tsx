import styled from "styled-components";


export const NotAllowedPage = styled.div`
width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary.solid};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  h2{
    margin-bottom: 2rem;
  }
`