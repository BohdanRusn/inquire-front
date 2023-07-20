import { configureStore } from "@reduxjs/toolkit";
import { toastReducer } from "./slices/toast";
import { ModalParamsState } from "./types/modal";
import { modalReducer } from "./slices/modal";
import { ToastStateProps } from "./types/toast";
import thunk from 'redux-thunk'
import { PostState } from "./types/post";
import { apiPosts, postsReducer } from "./slices/posts/posts";
import { AuthStateProps } from "../components/interfaces/auth/IAuth";
import { authReducer } from "./slices/auth/auth";

export interface IStore{
  auth: AuthStateProps,
  toast: ToastStateProps,
  modal: ModalParamsState,
  posts: PostState,
  [apiPosts.reducerPath]: any
}

const store = configureStore<IStore, any>({
  reducer: {
    auth: authReducer,
    toast: toastReducer,
    modal: modalReducer,
    posts: postsReducer,
    [apiPosts.reducerPath]: apiPosts.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPosts.middleware) as any
});

export default store;

export const appDispatch = store.dispatch;
