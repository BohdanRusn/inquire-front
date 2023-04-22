export interface PostInfo {
  title: string
  content: string
}
export interface Post extends PostInfo{
  id: number
  comments: Comment[] | []
}

export interface Comment {
  id: number
  content: string
}

export interface UpdatePost {
  id: number
  updateData: PostInfo
}
