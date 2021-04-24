export type Member = {
  name: string
}

export type File = {
  url: string
  duration: number
}

export type Episode = {
  id: number
  slug: string
  title: string
  thumbnail: string
  members: Member[]
  publishedAt: string
  file: File
}

export type GetHomePageQueryResult = {
  episodes: Episode[]
}
