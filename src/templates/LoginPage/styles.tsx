import styled from "styled-components";


export const LoginPage = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary.solid};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  .content{
    width: ${({ theme }) => theme.limits.content};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .header{
      margin-bottom: 3rem;
      text-align: center;
      h1:nth-child(1){
        font-size: ${({ theme }) => theme.font.size.headings.h3[0]};
        i{
          color: ${({ theme }) => theme.colors.third.solid};
        }
      }
      h1:nth-child(2){
        font-size: ${({ theme }) => theme.font.size.headings.h2[0]};
      }
      p{
        a{
          color: ${({ theme }) => theme.colors.third.solid};
          font-weight: bold;
        }
      }
    }

    form{
      width: 100%;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
   
    }
  }
`