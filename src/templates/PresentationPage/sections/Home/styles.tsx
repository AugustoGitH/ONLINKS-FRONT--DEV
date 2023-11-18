import styled from "styled-components";


export const Home = styled.section`
  width: 100%;
  min-height: calc(100vh - 70px);
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary.solid};
  display: flex;
  align-items: center;
  justify-content: center;
  .content{
    width: ${({ theme }) => theme.limits.content};
    text-align: center;
    h1{
      span{
        color: ${({ theme }) => theme.colors.third.solid};
      }
    }
    p{
      margin-top: 1rem;
    }
    button{
      margin-top: 3rem;
    }
  }
`