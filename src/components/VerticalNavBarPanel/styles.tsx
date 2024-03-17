import styled from "styled-components";

export const VerticalNavBarPanel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  .nav-bar-content{
    width: 250px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary.weak};
    border-radius: 1rem;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    .head-nav{
      display: flex;
      flex-direction: column;
      align-items: center;
      span{
        margin-top: .4rem;
        text-align: center;
        font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
        line-height: ${({ theme }) => theme.font.size.paragraphs.xsm[1]};
        strong{
          color: ${({ theme }) => theme.colors.third.solid};
        }
      }
      .icon-onlink{
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.third.solid};
      }
    }
    
    .controls-navigation{
      margin-top: 3rem;
      width: 100%;
      /* display: flex;
      flex-direction: column;
      gap: .5rem; */
      li.marked a{
        opacity: 1;
        /* background-color: ${({ theme }) => theme.colors.primary.solid}; */
        color: ${({ theme }) => theme.colors.third.solid};
        border-right: 4px solid ${({ theme }) => theme.colors.third.solid};
      }

       li a{
        border-right: 4px solid transparent;
        
        display: flex;
        width: 100%;
        opacity: .8;

        
        padding: .8rem 1rem;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        transition: .2s;
        font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
        &:hover{
          border-right: 4px solid ${({ theme }) => theme.colors.third.solid};
          color: ${({ theme }) => theme.colors.third.solid};
        }
        .icon{
          font-size: 1.1rem;
        }
        span{
          width: 80%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 1rem;
        }
      }
    }
  }
  .panel-content{
    width: calc(100% - 250px);
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`