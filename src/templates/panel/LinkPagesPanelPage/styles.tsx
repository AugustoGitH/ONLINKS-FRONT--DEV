import styled from "styled-components";


export const HeaderLinkPage = styled.div`
  margin-bottom: calc(90px + 1rem);
        position: relative;

        .banner{
          width: 100%;
         height: 190px;
         overflow: hidden;
         border-radius: 1rem;
         display: flex;
         justify-content: center;
         align-items: center;
         background-color: ${({ theme }) => theme.colors.primary.weak};
         img{
          width: 100%;
          height: 100%;
          object-fit: cover;
         }
        }
        .profiles-row .profile .icon-user, .banner .icon-user{
              font-size: 2.5rem;
              color: ${({ theme }) => theme.colors.light.weak};
            }
        .profiles-row{
          position: absolute;
          bottom: -90px;
          left: 2rem;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 1rem;
          .profile.main{
            width: 180px;
            height: 180px;
            position: relative;
            &::after{
              content: '';
              position: absolute;
              bottom: 1rem;
              right: 0;
              width: 30px;
              height: 30px;
              background-color: ${({ theme }) => theme.colors.third.solid};
              border: 5px solid ${({ theme }) => theme.colors.primary.solid};
              border-radius: 50%;
            }
          }
          .profile{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 130px;
            height: 130px;
            background-color: ${({ theme }) => theme.colors.primary.weak};
            border: 5px solid ${({ theme }) => theme.colors.primary.solid};
            border-radius: 50%;
            
            img{
             
             
              width: 100%;
              border-radius: 50%;
              overflow: hidden;
              height: 100%;
              object-fit: cover;
            }
          }
        }
`

export const LinkPagesPanelPage = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.solid};
  min-height: 100vh;
  .content{
    width: ${({ theme }) => theme.limits.panel};
    .dash{
      width: 100%;
      padding: 2rem;
   
      .link-pages-grid{
        margin-top: 2rem;
        width: 100%;
        gap: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, .5fr));
        .template-add-link-page{
          height: 400px;
    
        
          display: flex;
          justify-content: center;
          align-items: center;

          button{
            background-color: transparent;
            border: 2px solid ${({ theme }) => theme.colors.third.solid};
            font-size: 2rem;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            color:  ${({ theme }) => theme.colors.third.solid};
            border-radius: 50%;
            opacity: .6;
            transition: .2s;
            font-size: 1.5rem;
            &:hover{
              opacity: 1;
              transform: scale(1.04);
              background-color: ${({ theme }) => theme.colors.third.solid};
              color:  ${({ theme }) => theme.colors.dark.solid};
            }
          
          }
        }
      }
    }
  }

`