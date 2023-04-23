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

export interface UpdatePost {
  id: number;
  updateData: PostInfo;
}
