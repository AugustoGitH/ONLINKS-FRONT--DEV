import { createContext, Dispatch, SetStateAction } from "react";
import { DefaultTheme } from "styled-components";

export interface ThemeContextValue {
  theme: DefaultTheme;
  setTheme: Dispatch<SetStateAction<DefaultTheme>>;
}

const ThemeContext = createContext([] as unknown as ThemeContextValue);

export default ThemeContext;
