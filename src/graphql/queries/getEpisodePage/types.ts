export type Member = {
  name: string
  avatar: string
}

export type File = {
  url: string
  duration: number
}

export type Episode = {
  slug: string
  title: string
  thumbnail: string
  members: Member[]
  publishedAt: string
  description: string
  file: File
}

export type GetEpisodePageQueryResult = {
  episode: Episode
}
