import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'

import * as S from './player.styles'
import { usePlayer } from 'contexts/PlayerContext'
import { convertDurationToTimeString } from 'utils/datetime/convertDurationToTimeString'

export const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [progress, setProgress] = useState(0)

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    setIsPlaying,
    togglePlay,
    playPrevious,
    playNext,
    hasNext,
    hasPrevious,
    isLooping,
    toggleLoop,
    isShuffling,
    toggleShuffle,
    clearPlayerState
  } = usePlayer()

  const episode = useMemo(() => episodeList[currentEpisodeIndex], [
    currentEpisodeIndex,
    episodeList
  ])
  const isEmpty = useMemo(() => !episode, [episode])

  const setupProgressListener = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0

      audioRef.current.addEventListener('timeupdate', () => {
        setProgress(Math.floor(audioRef.current!.currentTime))
      })
    }
  }

  const handleSeek = (amount: number) => {
    audioRef.current!.currentTime = amount
    setProgress(amount)
  }

  const handleEpisodeEnded = () => {
    if (hasNext) playNext()
    else clearPlayerState()
  }

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
          <span>{convertDurationToTimeString(progress)}</span>
          <S.SliderContainer>
            {isEmpty ? (
              <S.EmptySlider />
            ) : (
              <S.Slider
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
              />
            )}
          </S.SliderContainer>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </S.Progress>

        {episode && (
          <audio
            ref={audioRef}
            src={episode.url}
            loop={isLooping}
            autoPlay
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onLoadedMetadata={setupProgressListener}
            onEnded={handleEpisodeEnded}
          />
        )}

        <S.ButtonsContainer>
          <S.ShuffleButton
            type="button"
            disabled={isEmpty}
            isActive={isShuffling}
            onClick={toggleShuffle}
          >
            <img src="img/shuffle.svg" alt="Embaralhar" />
          </S.ShuffleButton>
          <S.Button
            type="button"
            disabled={isEmpty || !hasPrevious}
            onClick={playPrevious}
          >
            <img src="img/play-previous.svg" alt="Tocar anterior" />
          </S.Button>
          <S.PlayButton type="button" disabled={isEmpty} onClick={togglePlay}>
            {isPlaying ? (
              <img src="/img/pause.svg" alt="Pausar" />
            ) : (
              <img src="/img/play.svg" alt="Tocar" />
            )}
          </S.PlayButton>
          <S.Button
            type="button"
            disabled={isEmpty || !hasNext}
            onClick={playNext}
          >
            <img src="img/play-next.svg" alt="Tocar próxima" />
          </S.Button>
          <S.LoopButton
            type="button"
            disabled={isEmpty}
            isActive={isLooping}
            onClick={toggleLoop}
          >
            <img src="img/repeat.svg" alt="Repetir" />
          </S.LoopButton>
        </S.ButtonsContainer>
      </S.Footer>
    </S.Wrapper>
  )
}
