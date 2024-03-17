import styled from "styled-components";


export const PanelPage = styled.section`
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
      padding: 2rem;}
  }
`