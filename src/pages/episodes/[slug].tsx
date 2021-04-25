import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import localePtBr from 'date-fns/locale/pt-BR'
import striptags from 'striptags'

import * as S from 'styles/pages/episode.styles'
import { SEO } from 'components/SEO'
import { client } from 'graphql/client'
import {
  GET_EPISODE_PAGE,
  GetEpisodePageQueryResult,
  Episode
} from 'graphql/queries/getEpisodePage'
import { convertDurationToTimeString } from 'utils/datetime/convertDurationToTimeString'
import { usePlayer, Episode as ContextEpisode } from 'contexts/PlayerContext'

type EpisodePageProps = Episode & {
  durationAsString: string
  SEOData: {
    description: string
  }
}

export default function EpisodePage({
  title,
  description,
  members,
  publishedAt,
  thumbnail,
  file: { duration, url },
  durationAsString
}: EpisodePageProps) {
  const { play } = usePlayer()

  const playableEpisode: ContextEpisode = {
    title,
    thumbnail,
    duration,
    url,
    members: members.map((member) => member.name).join(', ')
  }

  const onPlayClick = () => {
    play(playableEpisode)
  }

  const SEOContent = () => (
    <SEO title={title}>
      <meta
        name="description"
        content={striptags(description.substr(0, 160))}
      />
      <meta property="og:title" content={title} />
    </SEO>
  )

  return (
    <>
      <SEOContent />
      <S.Wrapper>
        <S.ThumbnailContainer>
          <Link href="/">
            <S.BackButton>
              <img src="/img/arrow-left.svg" alt="Voltar" />
            </S.BackButton>
          </Link>
          <Image width={700} height={320} src={thumbnail} objectFit="cover" />
          <S.PlayButton type="button" onClick={onPlayClick}>
            <img src="/img/play.svg" alt="Tocar episódio" />
          </S.PlayButton>
        </S.ThumbnailContainer>

        <S.Header>
          <h1>{title}</h1>
          <span>{publishedAt}</span>
          <span>{durationAsString}</span>
        </S.Header>

        <S.SectionDescription
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <S.MembersSection>
          <h2>Participantes</h2>
          <S.AvatarsContainer>
            {members.map(({ name, avatar }) => (
              <S.Avatar key={`avt-${name}`}>
                <Image
                  width={128}
                  height={128}
                  src={avatar}
                  objectFit="cover"
                />
                <figcaption>{name}</figcaption>
              </S.Avatar>
            ))}
          </S.AvatarsContainer>
        </S.MembersSection>
      </S.Wrapper>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params!

  const [, id] = String(slug!).split('--')

  const { episode } = await client.request<GetEpisodePageQueryResult>(
    GET_EPISODE_PAGE,
    { id }
  )

  const durationAsString = convertDurationToTimeString(episode.file.duration)

  const publishedAt = format(parseISO(episode.publishedAt), 'd MMM yy', {
    locale: localePtBr
  })

  return {
    props: {
      ...episode,
      file: {
        ...episode.file,
        duration: Number(episode.file.duration)
      },
      durationAsString,
      publishedAt
    }
  }
}
