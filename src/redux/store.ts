import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { toastReducer } from "./slices/toast";
import { ModalParamsState } from "./types/modal";
import { modalReducer } from "./slices/modal";
import { ToastStateProps } from "./types/toast";
import thunk from 'redux-thunk'
import { AuthStateProps } from "../components/interfaces/auth/IAuth";
import { authReducer } from "./slices/auth/auth";

export interface IStore{
  auth: AuthStateProps,
  toast: ToastStateProps,
  modal: ModalParamsState,
}

const store = configureStore<IStore, any>({
  reducer: combineReducers({
    auth: authReducer,
    toast: toastReducer,
    modal: modalReducer,
  }),
  middleware: [thunk]
});

export default store;

export const appDispatch = store.dispatch;
