import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction
} from 'react'

export type Episode = {
  title: string
  members: string
  thumbnail: string
  duration: number
  url: string
}

type PlayerContextData = {
  episodeList: Episode[]
  currentEpisodeIndex: number
  setCurrentEpisodeIndex: Dispatch<SetStateAction<number>>
  isPlaying: boolean
  setIsPlaying: Dispatch<SetStateAction<boolean>>
  isLooping: boolean
  isShuffling: boolean
  hasPrevious: boolean
  hasNext: boolean
  play: (episode: Episode) => void
  playList: (list: Episode[], index: number) => void
  playNext: () => void
  playPrevious: () => void
  togglePlay: () => void
  toggleLoop: () => void
  toggleShuffle: () => void
  clearPlayerState: () => void
}

type PlayerContextProviderProps = {
  children: ReactNode
}

const PlayerContext = createContext({} as PlayerContextData)

export const PlayerContextProvider = ({
  children
}: PlayerContextProviderProps) => {
  const [episodeList, setEpisodeList] = useState<Episode[]>([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)

  const play = (episode: Episode) => {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  const playList = (list: Episode[], index: number) => {
    setEpisodeList(list)
    setCurrentEpisodeIndex(index)
    setIsPlaying(true)
  }

  const hasPrevious = currentEpisodeIndex > 0
  const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length

  const playNext = () => {
    if (isShuffling) {
      const nextRandomEpisodeIndex = Math.floor(
        Math.random() * episodeList.length
      )
      setCurrentEpisodeIndex(nextRandomEpisodeIndex)
    } else if (hasNext) {
      const nextEpisodeIndex = currentEpisodeIndex + 1
      setCurrentEpisodeIndex(nextEpisodeIndex)
    }
  }

  const playPrevious = () => {
    if (hasPrevious) {
      const previousEpisodeIndex = currentEpisodeIndex - 1
      setCurrentEpisodeIndex(previousEpisodeIndex)
    }
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleLoop = () => {
    setIsLooping(!isLooping)
  }

  const toggleShuffle = () => {
    setIsShuffling(!isShuffling)
  }

  const clearPlayerState = () => {
    setEpisodeList([])
    setCurrentEpisodeIndex(0)
  }

  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        setCurrentEpisodeIndex,
        isPlaying,
        setIsPlaying,
        isLooping,
        isShuffling,
        play,
        playList,
        hasPrevious,
        hasNext,
        playNext,
        playPrevious,
        togglePlay,
        toggleLoop,
        toggleShuffle,
        clearPlayerState
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => useContext(PlayerContext)
