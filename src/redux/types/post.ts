import { Post } from "../../components/interfaces/IPost"

export interface PostState {
  list: {
    data: Post[] | [];
    status: string;
  },
  post: {
    data: {};
    status: string;
  }
}
