import { IStore } from "../../store";

export const isUserLoaded = (state: IStore) =>
  state.auth.status === "loaded";

export const isAuth = (state: IStore) => !!state.auth.data;
export const selectUser = (state: IStore) => state.auth.data;
