import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import RCSlider from 'rc-slider'

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
    ${Progress} {
      opacity: 0.5;
    }
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
  transition: filter 200ms;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    filter: brightness(0.8);
  }
`

export const PlayButton = styled(Button)`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    background: ${theme.colors['purple-400']};

    &:hover:not(:disabled) {
      filter: brightness(0.95);
    }
  `}
`

type LoopButtonProps = {
  isActive?: boolean
}

const loopButtonModifiers = {
  active: () => css`
    filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
  `
}

export const LoopButton = styled(Button)<LoopButtonProps>`
  ${({ isActive }) => css`
    ${isActive && loopButtonModifiers.active()}
  `}
`

type ShuffleButtonProps = Pick<LoopButtonProps, 'isActive'>

const shuffleButtonModifiers = {
  active: loopButtonModifiers.active
}

export const ShuffleButton = styled(Button)<ShuffleButtonProps>`
  ${({ isActive }) => css`
    ${isActive && shuffleButtonModifiers.active()}
  `}
`

export const SliderContainer = styled.div`
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

export const Slider = styled(RCSlider).attrs(() => ({
  trackStyle: { backgroundColor: '#04d361' },
  railStyle: { backgroundColor: '#9f75ff' },
  handleStyle: {
    borderColor: '#04d361',
    borderWidth: 4
  }
}))``

export const CurrentEpisode = styled.div`
  ${({ theme }) => css`
    text-align: center;

    img {
      border-radius: 1.5rem;
    }

    strong {
      display: block;
      margin-top: 2rem;
      font: ${theme.font.weight.bold} 1.25rem ${theme.font.family.lexend};
      line-height: 1.75rem;
    }

    span {
      display: block;
      margin-top: 1rem;
      opacity: 0.6;
      line-height: 1.5rem;
    }
  `}
`
