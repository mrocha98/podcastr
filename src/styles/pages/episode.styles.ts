import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { rem } from 'polished'

import { ballSeparator } from './home.styles'

export const Wrapper = styled.article`
  max-width: 45rem;
  padding: 3rem 2rem;
  margin: 0 auto;
`
export const BackButton = styled.button``

export const PlayButton = styled.button``

export const ThumbnailContainer = styled.div`
  ${({ theme }) => css`
    position: relative;

    img {
      border-radius: 1rem;
    }

    ${BackButton}, ${PlayButton} {
      width: 3rem;
      height: 3rem;
      border-radius: 0.75rem;
      border: 0;
      position: absolute;
      z-index: ${theme.layers.overlay};
      font-size: 0%;

      transition: filter 200ms;

      &:hover {
        filter: brightness(0.9);
      }
    }

    ${BackButton} {
      left: 0;
      top: 50%;
      background: ${theme.colors['purple-500']};
      transform: translate(-50%, -50%);
    }

    ${PlayButton} {
      right: 0;
      top: 50%;
      background: ${theme.colors['green-500']};
      transform: translate(50%, -50%);
    }
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    padding-bottom: 1rem;
    border-bottom: 1px solid ${theme.colors['gray-100']};

    h1 {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
    }

    span {
      display: inline-block;
      font-size: 0.875rem;

      &:last-child {
        margin-left: 1rem;
        padding-left: 1rem;
        position: relative;

        &:before {
          ${ballSeparator()}
        }
      }
    }
  `}
`

export const MembersSection = styled.section`
  h2 {
    display: block;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }
`

export const AvatarsContainer = styled.div`
  max-width: ${rem('1200px')};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${rem('300px')}, 1fr));
  justify-content: flex-start;
  gap: 1.25rem;
  padding: 1rem;

  ${media.lessThan('large')`
    grid-template-columns: repeat(2, 1fr);
  `}
`

export const Avatar = styled.figure`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      width: ${rem('64px')};
      height: ${rem('64px')};
      border-radius: 50%;
    }

    figcaption {
      font-family: ${theme.font.family.lexend};
      font-weight: ${theme.font.weight.bold};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-left: 1rem;
      margin-top: 0;
    }

    ${media.lessThan('medium')`
      flex-direction: column;
      align-items: flex-start;

      figcaption {
        margin-left: 0;
        margin-top: 0.45rem;
      }
    `}
  `}
`

export const SectionDescription = styled.section`
  ${({ theme }) => css`
    margin-top: 2rem;
    line-height: 1.675rem;
    color: ${theme.colors['gray-800']};

    p {
      margin: 1.5rem 0;
    }
  `}
`
