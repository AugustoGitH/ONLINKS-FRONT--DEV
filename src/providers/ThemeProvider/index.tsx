import ThemeContext from "@/contexts/ThemeContext"
import initialTheme from "@/settings/styles/initial-theme"
import { ReactNode, useState } from "react"
import { DefaultTheme, ThemeProvider as ThemeProviderStyledComponents } from "styled-components"

interface ThemeProviderProps {
  children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(initialTheme)
  return (
    <ThemeProviderStyledComponents theme={theme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProviderStyledComponents>

  )
}