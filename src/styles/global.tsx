import {
  createGlobalStyle,
  css,
  GlobalStyleComponent,
  DefaultTheme
} from 'styled-components'
import media from 'styled-media-query'
import 'rc-slider/assets/index.css'

export type GlobalStyleProps = {
  removeBg?: boolean
}

export const GlobalStyles: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme
> = createGlobalStyle`
  /********************* fonts setup *********************/
  /* https://google-webfonts-helper.herokuapp.com/fonts */

  /* lexend-500 - latin */
  @font-face {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    src: local(''),
        url('../fonts/lexend-v2-latin-500.woff2') format('woff2');
  }
  /* lexend-600 - latin */
  @font-face {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url('../fonts/lexend-v2-latin-600.woff2') format('woff2');
  }

  /* inter-regular - latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('../fonts/inter-v3-latin-regular.woff2') format('woff2');
  }
  /*******************************************************/

  ${({ theme, removeBg }) => css`
    :root {
      --white: #fafafa;

      --gray-50: #f7f8fa;
      --gray-100: #e6e8eb;
      --gray-200: #afb2b1;
      --gray-500: #808080;
      --gray-800: #494d4b;

      --green-500: #04d361;

      --purple-300: #9f75ff;
      --purple-400: #9164fa;
      --purple-500: #8257e5;
      --purple-800: #6f48c9;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &:before,
      &:after {
        box-sizing: inherit;
      }
    }

    ${media.lessThan('large')`
      html {
        font-size: 93.75%; // 15px
      }
    `}

    ${media.lessThan('medium')`
      html {
        font-size: 87.5%; // 14px
      }
    `}

    body {
      ${!removeBg &&
      css`
        background-color: ${theme.colors['gray-50']};
      `}
    }

    body,
    input,
    textarea,
    button {
      font-weight: ${theme.font.weight.normal};
      font-size: 1rem;
      font-family: ${theme.font.family.inter};
      color: ${theme.colors['gray-500']};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${theme.font.weight.bold};
      font-family: ${theme.font.family.lexend};
      color: ${theme.colors['gray-800']};
    }

    h1 {
      font-size: ${theme.font.sizes.xlarge};
    }

    h2 {
      font-size: ${theme.font.sizes.large};
    }

    button {
      cursor: pointer;
    }
  `}
`
