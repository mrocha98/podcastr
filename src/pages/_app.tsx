import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import * as S from 'styles/pages/_app.styles'
import { GlobalStyles } from 'styles/global'
import theme from 'styles/theme'
import { Header } from 'components/Header'
import { Player } from 'components/Player'
import { PlayerContextProvider } from 'contexts/PlayerContext'

export default function App({ Component, pageProps }: AppProps) {
  const HeadContent = () => (
    <Head>
      <title>Podcastr</title>
      <link rel="shortcut icon" type="image/png" href="/img/favicon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="description" content="O melhor para você ouvir, sempre!" />
    </Head>
  )

  return (
    <>
      <HeadContent />
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <PlayerContextProvider>
          <S.Wrapper>
            <S.Main>
              <Header />
              <Component {...pageProps} />
            </S.Main>
            <Player />
          </S.Wrapper>
        </PlayerContextProvider>
      </ThemeProvider>
    </>
  )
}
