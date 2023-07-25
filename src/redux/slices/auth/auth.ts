import { createAsyncThunk, createSlice, SliceCaseReducers, } from "@reduxjs/toolkit";
import axiosInstance from "../../../configure/axios";
import {
    AuthStateProps,
    IUserLoginData,
    IUserRegisterData,
} from "../../../components/interfaces/auth/IAuth";


export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (values: IUserLoginData, { dispatch }) => {
  try {
    const { data } = await axiosInstance.post(
      "auth/login", values
    );
    const userInfo = data.user;
    if ( userInfo ) {
      localStorage.setItem("token", JSON.stringify((data.token)))
      localStorage.setItem("user", JSON.stringify((userInfo)))

    }
    return userInfo;
  } catch ( error ) {
  }
});

export const fetchAuthMe = createAsyncThunk(
  "auth/fetchAuthMe",
  async (_, { dispatch }) => {
    try {
      const { data } = await axiosInstance.post(
        "auth/refresh"
      );
      const userInfo = data.user;
      if ( userInfo ) {
        localStorage.setItem("token", JSON.stringify((data.token)))
        localStorage.setItem("user", JSON.stringify((userInfo)))

      }
      return userInfo;
    } catch ( error ) {
    }
  });

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params: IUserRegisterData) => {
    const { data } = await axiosInstance.post(
      `auth/register`,
      params
    );
    return data;
  }
);

const initialState = {
  data: {},
  status: "",
};

const authSlice = createSlice<
  AuthStateProps,
  SliceCaseReducers<AuthStateProps>
>({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = {};
      state.status = "";
      window.localStorage.clear();
    },
    logIn: (state, action) => {
      console.log(action);
      state.data = action.payload;
      state.status = "loaded"
    }
  },
  extraReducers: {
    [fetchAuth.pending.type]: (state) => {
      state.status = "loading";
    },
    [fetchAuth.fulfilled.type]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchAuth.rejected.type]: (state) => {
      state.status = "error";
    },
    [fetchAuthMe.pending.type]: (state) => {
      state.status = "loading";
    },
    [fetchAuthMe.fulfilled.type]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchAuthMe.rejected.type]: (state) => {
      state.status = "error";
    },
  },
});

export const authReducer = authSlice.reducer;

export const { logout, logIn } = authSlice.actions;
