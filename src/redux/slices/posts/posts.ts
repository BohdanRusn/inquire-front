import { createAsyncThunk, createSlice, Draft, SliceCaseReducers } from "@reduxjs/toolkit";
import { Post, PostInfo, UpdatePost } from "../../../components/interfaces/IPost";
import axiosInstance from "../../../configure/axios";


import { PostState } from "../../types/post";
import { ToastType } from "../../types/toast";
import { openToast } from "../toast";


export const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (undefined, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get<Post[]>("/posts")

      return data
    } catch ( ex: any ) {
      return rejectWithValue(ex.message);
    }
  }
);

export const getPostById = createAsyncThunk(
  "posts/getPostById",
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`posts/${ id }`)
      return data
    } catch ( ex: any ) {
      return rejectWithValue(ex.message);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (options: UpdatePost, { rejectWithValue }) => {
    try {
      const { id, updateData } = options;
      const { data } = await axiosInstance.put<Post>(`posts/${ id }`, updateData)

      return data
    } catch ( ex: any ) {
      return rejectWithValue(ex.message);
    }
  }
);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (post: PostInfo, { rejectWithValue }) => {
    try {

      const { data } = await axiosInstance.post("posts", post)

      return data
    } catch ( ex: any ) {
      return rejectWithValue(ex.message);
    }
  }
);

export const removePost = createAsyncThunk(
  "posts/removePost",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.delete(`posts/${ id }`);
      await dispatch(openToast(ToastType.Success, "Пост видалено успішно"));

      return id;
    } catch ( ex: any ) {
      await dispatch(openToast(ToastType.Error, "Виникла помилка, спробуйте ще раз"));
      return rejectWithValue(ex.message);
    }
  }
);

export const addComment = createAsyncThunk(
  "posts/addComment",
  async (comment: { content: string, postId: number }, { rejectWithValue }) => {
    try {
      const { postId, content } = comment;
      const { data } = await axiosInstance.post(`comments/${ postId }`, { content })
      return data
    } catch ( ex: any ) {
      return rejectWithValue(ex.message);
    }
  }
);

export const removeComment = createAsyncThunk(
  "posts/removeComment",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.delete(`comments/${ id }`);
      await dispatch(openToast(ToastType.Success, "Коментар видалено успішно"));

      return id;
    } catch ( ex: any ) {
      await dispatch(openToast(ToastType.Error, "Виникла помилка, спробуйте ще раз"));
      return rejectWithValue(ex.message);
    }
  }
);

const initialState: PostState = {
  list: {
    data: [],
    status: "",
  },
  post: {
    data: {},
    status: "",
  },
}

const postsSlice = createSlice<
  PostState,
  SliceCaseReducers<PostState>
>({
  name: "posts",
  initialState,
  reducers: {
    clearPost: (state?: Draft<PostState>) => {
      state!.post.data = {};
      state!.post.status = "";
    }
  },
  extraReducers: {
    [getPostById.pending.type]: (state) => {
      state.post.data = {};
      state.post.status = "loading";
    },
    [getPostById.fulfilled.type]: (state, action) => {
      state.post.data = action.payload;
      state.post.status = "loaded";
    },
    [getPostById.rejected.type]: (state) => {
      state.post.data = {};
      state.post.status = "error";
    },
    [getAllPosts.pending.type]: (state) => {
      state.list.data = [];
      state.list.status = "loading";
    },
    [getAllPosts.fulfilled.type]: (state, action) => {
      state.list.data = action.payload;
      state.list.status = "loaded";
    },
    [getAllPosts.rejected.type]: (state) => {
      state.list.data = [];
      state.list.status = "error";
    },
    [removePost.pending.type]: (state) => {
      state.list.status = "loading";
    },
    [removePost.fulfilled.type]: (state, action) => {
      state.list.data = state.list.data.filter((post: Post) => post.id !== action.payload);
      state.list.status = "loaded";
    },
    [removeComment.fulfilled.type]: (state, action) => {
      state.post.data = {
        ...state.post.data,
        comments: (state.post.data as Post).comments.filter(el => el.id !== action.payload)
      }
    },
    [addComment.fulfilled.type]: (state, action) => {
      state.post.data = {
        ...state.post.data,
        comments: [...(state.post.data as Post).comments, {
          id: action.payload.id,
          content: action.payload.content
        }]
      }
    },
  }
})

export const postsReducer = postsSlice.reducer;

export const { clearPost } = postsSlice.actions
