import { createAction, createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { IStore } from "../store";
import { ModalParams, ModalParamsState, ModalType } from "../types/modal";
import { keys } from "lodash";

export const openModal = createAction(
  "modal/open",
  (modalParams: ModalParams) => {
    return { payload: modalParams };
  }
);

export const closeModal = createAction(
  "modal/close",
  (modalType: ModalType) => {
    return { payload: modalType };
  }
);

const initialState = {};

const modalSlice = createSlice<
  ModalParamsState,
  SliceCaseReducers<ModalParamsState>
>({
  name: "modal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(openModal, (state, action) => {
        state[action.payload.type] = { ...action.payload, isOpen: true };
      })
      .addCase(closeModal, (state, action) => {
        state[action.payload] = { isOpen: false, type: action.payload };
      });
  },
});

export const selectModalState = (type: ModalType) => (state: IStore) =>
  state.modal[type];
export const selectOpenModalState = (state: IStore) =>
  keys(state.modal).find(
    (x: any) => state.modal[x as keyof ModalParamsState]?.isOpen ?? false
  ) as keyof ModalParamsState;

export const modalReducer = modalSlice.reducer;
