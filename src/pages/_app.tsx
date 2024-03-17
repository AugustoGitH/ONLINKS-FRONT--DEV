import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';

import ThemeProvider from '@/providers/ThemeProvider'
import { toastSettings } from '@/settings/toast';
import GlobalStyle from '@/styles/GlobalStyle'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';

import Router from 'next/router';
import NProgress from 'nprogress';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/settings/api/query-client';
import { StyleSheetManager } from 'styled-components';
import emotionIsPropValid from '@emotion/is-prop-valid';


NProgress.configure({ /* options */ });

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <StyleSheetManager shouldForwardProp={prop => emotionIsPropValid(prop)}>
          <GlobalStyle />
          <Component {...pageProps} />
        </StyleSheetManager>
        <ToastContainer {...toastSettings} />
      </ThemeProvider>
    </QueryClientProvider>

  )
}
