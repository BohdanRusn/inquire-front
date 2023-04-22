import { createAction, createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { IStore } from "../store";
import { ToastStateProps, ToastType } from "../types/toast";

export const openToast = createAction(
  "toast/open",
  (toastType: ToastType, message: string) => {
    return { payload: { toastType, message } };
  }
);

export const closeToast = createAction(
  "toast/close",
  () => {
    return { payload: {} };
  }
);

const initialState = {};

const toastSlice = createSlice<
    ToastStateProps,
    SliceCaseReducers<ToastStateProps>
>({
  name: "toast",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(openToast, (state, action) => {
        state.message = action.payload.message;
        state.toastType = action.payload.toastType;
      })
      .addCase(closeToast, (state) => {
        state.message = undefined;
        state.toastType = undefined;
      });
  },
});

export const selectToastState = (state: IStore) => state.toast;

export const toastReducer = toastSlice.reducer;
