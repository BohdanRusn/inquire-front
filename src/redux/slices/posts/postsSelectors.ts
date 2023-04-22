import { IStore } from "../../store";

export const selectPostsList = (state: IStore) =>
  state.posts.list.data;

export const selectIsPostsListLoading = (state: IStore) =>
  state.posts.list.status === "loading";

export const selectPostById = (state: IStore) =>
  state.posts.post.data;

export const isPostLoading = (state: IStore) =>
  state.posts.post.status === "loading"
