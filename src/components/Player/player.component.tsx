import { useEffect, useMemo, useRef } from 'react'
import Image from 'next/image'

import * as S from './player.styles'
import { usePlayer } from 'contexts/PlayerContext'

export const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null)

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    setIsPlaying,
    togglePlay
  } = usePlayer()

  const episode = useMemo(() => episodeList[currentEpisodeIndex], [
    currentEpisodeIndex,
    episodeList
  ])

  const isEmpty = useMemo(() => !episode, [episode])

  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying) audioRef.current.play()
    else audioRef.current.pause()
  }, [isPlaying])

  return (
    <S.Wrapper>
      <S.Header>
        <img src="/img/playing.svg" alt="Fones de ouvido" />
        <S.Strong>Tocando agora</S.Strong>
      </S.Header>

      {isEmpty ? (
        <S.Empty>
          <S.Strong>Selecione um podcast para ouvir</S.Strong>
        </S.Empty>
      ) : (
        <S.CurrentEpisode>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </S.CurrentEpisode>
      )}

      <S.Footer isEmpty={isEmpty}>
        <S.Progress>
          <span>00:00</span>
          <S.SliderContainer>
            {isEmpty ? (
              <S.EmptySlider />
            ) : (
              <S.Slider
                trackStyle={{ backgroundColor: '#04d361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
              />
            )}
          </S.SliderContainer>
          <span>00:00</span>
        </S.Progress>

        {episode && (
          <audio
            ref={audioRef}
            src={episode.url}
            autoPlay
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        )}

        <S.ButtonsContainer>
          <S.Button type="button" disabled={isEmpty}>
            <img src="img/shuffle.svg" alt="Embaralhar" />
          </S.Button>
          <S.Button type="button" disabled={isEmpty}>
            <img src="img/play-previous.svg" alt="Tocar anterior" />
          </S.Button>
          <S.PlayButton type="button" disabled={isEmpty} onClick={togglePlay}>
            <img
              src={isPlaying ? 'img/pause.svg' : 'img/play.svg'}
              alt={isPlaying ? 'Pausar' : 'Tocar'}
            />
          </S.PlayButton>
          <S.Button type="button" disabled={isEmpty}>
            <img src="img/play-next.svg" alt="Tocar próxima" />
          </S.Button>
          <S.Button type="button" disabled={isEmpty}>
            <img src="img/repeat.svg" alt="Repetir" />
          </S.Button>
        </S.ButtonsContainer>
      </S.Footer>
    </S.Wrapper>
  )
}
