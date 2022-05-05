type ThumbnailImage = {
  url: string
  height: number
  width: number
}

export type Article = {
  title: string
  body: string
  thumbnail_image: ThumbnailImage
  createdAt: string
  updatedAt: string
  id: string
}
