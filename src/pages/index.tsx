import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import localePtBr from 'date-fns/locale/pt-BR'

import * as S from 'styles/pages/home.styles'
import { usePlayer } from 'contexts/PlayerContext'
import { client } from 'graphql/client'
import {
  GET_HOME_PAGE,
  GetHomePageQueryResult,
  Episode
} from 'graphql/queries/getHomePage'
import { convertDurationToTimeString } from 'utils/datetime/convertDurationToTimeString'

type EpisodeInfo = Episode & {
  durationAsString: string
  membersNamesAsString: string
}

type HomePageProps = {
  latestEpisodes: EpisodeInfo[]
  allEpisodes: EpisodeInfo[]
}

export default function HomePage({
  allEpisodes,
  latestEpisodes
}: HomePageProps) {
  const { play } = usePlayer()

  const onPlayClick = (episode: EpisodeInfo) => {
    const parsedEpisode = {
      title: episode.title,
      members: episode.membersNamesAsString,
      thumbnail: episode.thumbnail,
      duration: episode.file.duration,
      url: episode.file.url
    }

    play(parsedEpisode)
  }

  return (
    <S.Wrapper>
      <S.SectionLatestEpisodes>
        <h2>Últimos lançamentos</h2>

        <ul>
          {latestEpisodes.map((episode) => (
            <li key={`lst-${episode.slug}`}>
              <Image
                className="thumb"
                width={192}
                height={192}
                src={episode.thumbnail}
                objectFit="cover"
              />

              <S.EpisodeDetails>
                <Link href={`/episodes/${episode.slug}--${episode.id}`}>
                  <a>{episode.title}</a>
                </Link>
                <p>{episode.membersNamesAsString}</p>
                <span>{episode.publishedAt}</span>
                <span>{episode.durationAsString}</span>
              </S.EpisodeDetails>

              <S.PlayButton onClick={() => onPlayClick(episode)}>
                <img src="/img/play-green.svg" alt="Tocar episódio" />
              </S.PlayButton>
            </li>
          ))}
        </ul>
      </S.SectionLatestEpisodes>
      <S.SectionAllEpisodes>
        <h2>Todos episódios</h2>

        <table cellSpacing={0}>
          <thead>
            <tr>
              <th />
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {allEpisodes.map((episode) => (
              <tr key={`all-${episode.id}`}>
                <td className="td-thumb">
                  <Image
                    width={192}
                    height={192}
                    src={episode.thumbnail}
                    objectFit="cover"
                  />
                </td>
                <td>
                  <Link href={`/episodes/${episode.slug}--${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                </td>
                <td>{episode.membersNamesAsString}</td>
                <td className="td-published-at">{episode.publishedAt}</td>
                <td>{episode.durationAsString}</td>
                <td>
                  <S.PlayButton
                    type="button"
                    onClick={() => onPlayClick(episode)}
                  >
                    <img src="/img/play-green.svg" alt="Tocar episódio" />
                  </S.PlayButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.SectionAllEpisodes>
    </S.Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { episodes } = await client.request<GetHomePageQueryResult>(
    GET_HOME_PAGE
  )

  const parsedEpisodes = episodes.map<EpisodeInfo>((episode) => ({
    ...episode,
    file: {
      ...episode.file,
      duration: Number(episode.file.duration)
    },
    durationAsString: convertDurationToTimeString(episode.file.duration),
    publishedAt: format(parseISO(episodes[0].publishedAt), 'd MMM yy', {
      locale: localePtBr
    }),
    membersNamesAsString: episode.members.map(({ name }) => name).join(', ')
  }))

  const latestEpisodes = parsedEpisodes.slice(0, 2)
  const allEpisodes = parsedEpisodes.slice(2, parsedEpisodes.length)

  return {
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 * 8
  }
}
