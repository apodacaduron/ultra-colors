export type ColorList = Array<{
  id: string;
  hex: string;
  index: number;
}>

export type Color = {
  id: string;
  hex: string;
  index: number;
}

export type PostNormalized = {
  title: string,
  published: boolean,
  deleted: boolean,
  heartCount: boolean,
  viewCount: boolean,
  palette: ColorList
  user: {
    uid: string
    displayName: string | null
    avatar: string | null
  }
  createdAt?: number,
  updatedAt?: number
}