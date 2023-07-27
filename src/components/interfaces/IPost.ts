import { IAuthData } from "./auth/IAuth";

export interface PostInfo {
  title: string;
  content: string;
}
export interface Post extends PostInfo{
  id: number;
  comments: Comment[] | [];
  author: IAuthData;
}

export interface Comment {
  id: number;
  content: string;
  author: IAuthData;
}

export interface NewComment {
  postId: number;
  content: string;
}

export interface UpdatePost {
  id: number;
  updateData: PostInfo;
}

export interface PostsData {
  posts: Post[];
}

export interface PostData {
  post: Post;
}

export interface PostData {
  addComment: Post;
}
