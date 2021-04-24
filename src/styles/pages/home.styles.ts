import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { rem } from 'polished'

export const Wrapper = styled.div`
  padding: 0 2rem;
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;

  ${media.greaterThan('large')`
    padding: 0 4rem;
  `}

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
`
export const PlayButton = styled.button`
  ${({ theme }) => css`
    width: 2.5rem;
    height: 2.5rem;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors['gray-100']};
    border-radius: 0.675rem;
    font-size: 0;

    transition: filter 200ms;

    &:hover {
      filter: brightness(0.95);
    }

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  `}
`

export const SectionLatestEpisodes = styled.section`
  ${({ theme }) => css`
    ul {
      list-style: none;
      gap: 1.5rem;
      display: flex;
      flex-direction: column;

      ${media.greaterThan('large')`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      `}

      li {
        background: ${theme.colors.white};
        border: 1px solid ${theme.colors['gray-100']};
        padding: 1.25rem;
        border-radius: 1.5rem;
        position: relative;

        display: flex;
        align-items: center;

        img.thumb {
          width: ${rem('128px')};
          height: ${rem('128px')};
          border-radius: 3rem;
        }

        ${PlayButton} {
          position: absolute;
          right: 2rem;
          bottom: 2rem;
        }
      }
    }
  `}
`

export const SectionAllEpisodes = styled.section`
  ${({ theme }) => css`
    padding-bottom: 2rem;

    table {
      width: 100%;

      th,
      td {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid ${theme.colors['gray-100']};
      }

      th {
        color: ${theme.colors['gray-200']};
        text-decoration: uppercase;
        font: ${theme.font.weight.normal} 0.75rem ${theme.font.family.lexend};
        text-align: left;
      }

      td {
        font-size: 0.875rem;

        &.td-published-at {
          width: 7.5rem;
        }

        &.td-thumb {
          width: 11.5rem;
          text-align: center;
          position: relative;

          img {
            width: 90%;
            height: 90%;
            border-radius: 1.5rem;
          }
        }

        a {
          color: ${theme.colors['gray-800']};
          font-family: ${theme.font.family.lexend};
          font-weight: ${theme.font.weight.bold};
          text-decoration: none;
          line-height: 1.4rem;
          font-size: 1rem;

          &:hover {
            text-decoration: underline;
          }
        }

        ${PlayButton} {
          border-radius: 0.5rem;
          width: 2.25rem;
          height: 2.25rem;

          img {
            width: 1.25rem;
            height: 1.25rem;
          }
        }
      }
    }
  `}
`

export const ballSeparator = () => css`
  content: '';
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: #ddd;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const EpisodeDetails = styled.div`
  ${({ theme }) => css`
    flex: 1;
    margin-left: 1rem;

    a {
      display: block;
      color: ${theme.colors['gray-800']};
      font-family: ${theme.font.family.lexend};
      font-weight: ${theme.font.weight.bold};
      text-decoration: none;
      line-height: 1.4rem;

      &:hover {
        text-decoration: underline;
      }
    }

    p {
      font-size: 0.875rem;
      margin-top: 0.5rem;
      max-width: 70%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    span {
      display: inline-block;
      margin-top: 0.5rem;
      font-size: 0.875rem;

      &:last-child {
        margin-left: 0.5rem;
        padding-left: 0.5rem;
        position: relative;

        &:before {
          ${ballSeparator()}
        }
      }
    }
  `}
`
