import { IStore } from "../../store";

export const isUserLoaded = (state: IStore) =>
  state.auth.status === "loaded";

export const isAuth = (state: IStore) => Boolean((state.auth.data as any).id);
export const selectUser = (state: IStore) => state.auth.data;
