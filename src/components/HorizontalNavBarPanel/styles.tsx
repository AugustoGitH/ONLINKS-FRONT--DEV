import styled from "styled-components";

export const HorizontalNavBarPanel = styled.header`
  width: 100%;
  height: 60px;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.primary.weak};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  .btns-action{
    display: flex;
    align-items: center;
    button{
      .icon{
        transition: .2s;
        font-size: 1.3rem;
      }
      color: ${({ theme }) => theme.colors.third.solid};
      &:hover .icon{
        transform: scale(1.1);
      }
      &:disabled{
        pointer-events: none;
      }
    }
  }
  a.title-main-panel{
    display: inline-flex;
    flex-direction: column;
    span.title-onlinks{
      font-size: ${({ theme }) => `calc(${theme.font.size.headings.h3[0]} - .4rem)`};
      font-weight: bold;
      span{
        color: ${({ theme }) => theme.colors.third.solid}
      }
    }
    span.sub-title-onlinks{
      font-size: ${({ theme }) => `calc(${theme.font.size.headings.h4[0]} - .1rem)`};
    }
  }

`