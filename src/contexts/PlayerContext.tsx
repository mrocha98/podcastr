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
  play: (episode: Episode) => void
  togglePlay: () => void
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

  const play = (episode: Episode) => {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        setCurrentEpisodeIndex,
        isPlaying,
        setIsPlaying,
        play,
        togglePlay
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => useContext(PlayerContext)
