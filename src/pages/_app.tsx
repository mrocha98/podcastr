import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import * as S from 'styles/_app.styles'
import { GlobalStyles } from 'styles/global'
import theme from 'styles/theme'
import { Header } from 'components/Header'
import { Player } from 'components/Player'

export default function App({ Component, pageProps }: AppProps) {
  const HeadContent = () => (
    <Head>
      <title>Podcastr</title>
      <link rel="shortcut icon" type="image/png" href="/img/favicon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="A simple project to work with TypeScript, React, NextJS, Styled Components and Storybook!"
      />
    </Head>
  )

  return (
    <>
      <HeadContent />
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <S.Wrapper>
          <S.Main>
            <Header />
            <Component {...pageProps} />
          </S.Main>
          <Player />
        </S.Wrapper>
      </ThemeProvider>
    </>
  )
}
