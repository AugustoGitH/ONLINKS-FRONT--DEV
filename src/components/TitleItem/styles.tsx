
import scaleUpPresence from "@/keyframes/scale-up-presence";
import styled from "styled-components";


export const TitleItem = styled.div`
  display: inline-flex;
  position: relative;
`

export const SubTitle = styled.div`
    position: absolute;
    text-align: center;
    bottom: -1.8rem;
    white-space: nowrap;
    font-size: .8rem;
    background-color: ${({ theme }) => theme.colors.dark.solid};
    color: ${({ theme }) => theme.colors.light.solid};
    left: 50%;
    transform: translateX(-50%);

    padding: .2rem .8rem;
    border-radius: .3rem;
    pointer-events: none;
    transition: .2s;
    opacity: 0;
    animation: ${scaleUpPresence} .2s backwards;
    &::after{
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: ${({ theme }) => theme.colors.dark.solid};
      left: 50%;
      transform: rotate(45deg) translateX(-50%);
      top: 0;
    }
`