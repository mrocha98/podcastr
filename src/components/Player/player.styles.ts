import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
    width: 21rem;
    height: 100vh;

    background: ${theme.colors['purple-500']};
    color: ${theme.colors.white};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    ${media.greaterThan('medium')`
      padding: 3rem 4rem;
      width: 26.5.rem;
    `}
  `}
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Strong = styled.strong`
  ${({ theme }) => css`
    font-family: ${theme.font.family.lexend};
    font-weight: ${theme.font.weight.bold};
  `}
`

export const Empty = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 20rem;
    border: 1.5px dashed ${theme.colors['purple-300']};
    border-radius: 1.5rem;
    background: linear-gradient(
      143.8deg,
      rgba(145, 100, 250, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    padding: 4rem;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const Progress = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: ${theme.font.sizes.small};

    span {
      display: inline-block;
      width: 4rem;
      text-align: center;
    }
  `}
`

type FooterProps = {
  isEmpty?: boolean
}

const footerModifiers = {
  empty: () => css`
    opacity: 0.5;
  `
}

export const Footer = styled.footer<FooterProps>`
  ${({ isEmpty }) => css`
    align-self: stretch;

    ${isEmpty && footerModifiers.empty()}
  `}
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;
`

export const Button = styled.button`
  background: transparent;
  border: 0;
  font-size: 0;
`

export const PlayButton = styled(Button)`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    background: ${theme.colors['purple-400']};
  `}
`

export const Slider = styled.div`
  flex: 1;
`

export const EmptySlider = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 4px;
    background: ${theme.colors['purple-300']};
    border-radius: 2px;
  `}
`
