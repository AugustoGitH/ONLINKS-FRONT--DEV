import styled from "styled-components";

interface ButtonProps {
  variant: "solid" | "underline"
}
export const Button = styled.button<ButtonProps>`
  background-color: ${({ theme, variant }) => variant === "solid" ? theme.colors.third.solid : "transparent"};
  border: 1px solid ${({ variant, theme }) => variant === "underline" ? theme.colors.third.solid : "transparent"};
  font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
  color: ${({ theme, variant }) => variant === "solid" ? theme.colors.primary.solid : theme.colors.third.solid};
  padding: .9rem 1.4rem;
  font-weight: bold;
  border-radius: .4rem;
  text-transform: uppercase;
  transition: .2s ease;
  &:hover{
    opacity: 1;
    ${({ variant, theme }) => variant === "solid" ? `
      transform: scale(1.07);
    ` : `
      background-color: ${theme.colors.third.solid};
      color: ${theme.colors.primary.solid};
    `
  }
  }
`