import styled from "styled-components";


export const LinkPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 30px 1rem 200px 1rem;
  .content{
    width: ${({ theme }) => theme.limits.content};
  
    header{
      width: 100%;
      position: relative;
      margin-bottom: calc((150px / 2) + 1rem);
      .banner{
        width: 100%;
        height: 150px;
        overflow: hidden;
        border-radius: .8rem;
        background-color: ${({ theme }) => theme.colors.primary.weak};
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .profiles{
        width: calc(50% + (150px / 2));

        position: absolute;
        bottom: -50%;
        left:  calc(50% - (150px / 2));
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .6rem;
        .profile.secondary{
          width: 90px;
          height: 90px;
        }
        .profile{
          cursor: pointer;
          border: 5px solid ${({ theme }) => theme.colors.primary.solid};
          width: 150px;
          height: 150px;
          flex: none;
          
          border-radius: 50%;
          position: relative;
       
          .status{
            border: 5px solid ${({ theme }) => theme.colors.primary.solid};
            position: absolute;
            bottom: .4rem;
            right: .4rem;
            transition: .2s;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            background-color: ${({ theme }) => theme.colors.third.solid};
          }
          img{
            border-radius: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
    .description{
      width: 100%;
      h1.title{
        text-align: center;
        font-size: ${({ theme }) => theme.font.size.headings.h3[0]};
        line-height: ${({ theme }) => theme.font.size.headings.h3[1]};
      }
      h2.sub-title{
        margin-top: .5rem;
        text-align: center;
        font-size: ${({ theme }) => theme.font.size.headings.h4[0]};
        line-height: ${({ theme }) => theme.font.size.headings.h4[1]};
      }
      p.desc{
        text-align: center;
        margin-top: 1rem;
        line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
        font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]}
      }
    }
    .btns-custom{
      margin-top: 2rem;
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      a{
        flex: 1;
        border-radius: .5rem;
        transition: .2s;
        gap: .5rem;
        width: 400px;
        color: ${({ theme }) => theme.colors.primary.solid};
        padding: 1rem 1rem;
        display: flex;
        font-weight: bold;
        justify-content: center;
        align-items: center;
        border: 2px solid ${({ theme }) => theme.colors.third.solid};
        background-color: ${({ theme }) => theme.colors.third.solid};
        &:hover{
          background-color: transparent;
          color: ${({ theme }) => theme.colors.third.solid};
        }
        .icon{
          font-size: 1.3rem;
        }
      }
    }
    p.created-by{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 1rem;
      font-weight: bold;
      font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
      a{
        color: ${({ theme }) => theme.colors.third.solid}
      }
    }
  }

`