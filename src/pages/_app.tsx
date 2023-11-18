import ThemeProvider from '@/providers/ThemeProvider'
import GlobalStyle from '@/styles/GlobalStyle'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
