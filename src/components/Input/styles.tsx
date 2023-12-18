import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

interface InputProps {
  error: boolean,
  success: boolean,
  loading: boolean
}

const setColor = (theme: DefaultTheme, { error, loading, success }: InputProps, defaultColor: string) => {
  if (error) return theme.colors.danger.solid
  if (success) return theme.colors.third.solid
  if (loading) return theme.colors.light.weak
  return defaultColor
}

export const Input = styled.div<InputProps>`
  width: 100%;
  .helper-text{
    width: 100%;
    font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
    font-weight: bold;
    padding-left: .5rem;
    margin-top: .2rem;
    color: ${({ theme, error, success, loading }) => setColor(theme, { error, loading, success }, "inherit")};
  }
  .content-input {
    width: 100%;
    position: relative;
    height: 60px;
    label {
      position: absolute;
      left: 2rem;
      font-weight: bold;
      font-size: ${({ theme }) => theme.font.size.paragraphs.sm[0]};
      top: 50%;
      transform: translateY(-50%);
      color: ${({ theme, error, success, loading }) => setColor(theme, { error, loading, success }, theme.colors.light.weak)};
      pointer-events: none;
      transition: 0.2s ease;
      background-color: ${({ theme }) => theme.colors.primary.solid};

    }
    input:focus ~ label,
    input:valid ~ label {
      color: ${({ theme, error, success, loading }) => setColor(theme, { error, loading, success }, theme.colors.light.solid)};
      top: -0.7rem;
      left: 1rem;
      transform: none;
      padding: 0 0.8rem;
      font-size: ${({ theme }) => theme.font.size.paragraphs.xsm[0]};
    }
    input {
      all: unset;
      box-sizing: border-box;
      border-radius: 0.7rem;
      font-size: ${({ theme }) => theme.font.size.paragraphs.sm[0]};
      width: 100%;
      padding: 0 2rem;
      transition: 0.2s ease;
      height: 100%;
      color: ${({ theme, error, loading, success }) => setColor(theme, { error, loading, success }, "inherit")};
      border: 2px solid ${({ theme, error, success, loading }) => setColor(theme, { error, loading, success }, theme.colors.light.weak)};
      &:focus,
      &:valid {
        border: 2px solid ${({ theme, error, success, loading }) => setColor(theme, { error, success, loading }, theme.colors.light.solid)};
      }
    }
  }
`;
