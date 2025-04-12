import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Post {
  id: string;
  title: string;
  body: string;
  userId: string;
}

export interface User {
  id: string;
  name: string;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
      providesTags: [{ type: "Post", id: "LIST" }],
    }),
    getUsers: builder.query<User[], void>({
      query: () => "users",
    }),
    fetchPost: builder.query<Post, string | undefined>({
      query: (id) => (id ? `posts/${id}` : ""),
    }),
    fetchUserById: builder.query<User, string | undefined>({
      query: (id) => (id ? `users/${id}` : ""),
    }),
    createPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetUsersQuery,
  useFetchPostQuery,
  useFetchUserByIdQuery,
  useCreatePostMutation,
} = api;
