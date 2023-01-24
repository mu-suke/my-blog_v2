type ThumbnailImage = {
  url: string
  height: number
  width: number
}

export type Tag = {
  id: string
  name: string
}

export type Article = {
  title: string
  body: string
  thumbnail_image: ThumbnailImage
  tags: Tag[]
  createdAt: string
  updatedAt: string
  id: string
}
