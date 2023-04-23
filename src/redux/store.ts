import { configureStore } from "@reduxjs/toolkit";
import { toastReducer } from "./slices/toast";
import { ModalParamsState } from "./types/modal";
import { modalReducer } from "./slices/modal";
import { ToastStateProps } from "./types/toast";
import thunk from 'redux-thunk'
import { PostState } from "./types/post";
import { postsReducer } from "./slices/posts/posts";
import { AuthStateProps } from "../components/interfaces/auth/IAuth";
import { authReducer } from "./slices/auth/auth";

export interface IStore{
  auth: AuthStateProps,
  toast: ToastStateProps,
  modal: ModalParamsState,
  posts: PostState
}

const store = configureStore<IStore>({
  reducer: {
    auth: authReducer,
    toast: toastReducer,
    modal: modalReducer,
    posts: postsReducer,
  },
  middleware: [thunk]
});

export default store;

export const appDispatch = store.dispatch;
