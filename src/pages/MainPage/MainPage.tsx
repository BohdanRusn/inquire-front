import React from "react";
import { apiPosts, GetPostsDocument } from "../../redux/slices/posts/posts";
import { useSelector } from "react-redux";
import { selectIsPostsListLoading, selectPostsList } from "../../redux/slices/posts/postsSelectors";
import { PostSkeleton } from "../../components/Post/Skeleton/Skeleton";
import blog from "../../assets/img/blog.png";
import { NoPost } from "./components/NoPost/NoPost";
import { Post } from "../../components/Post/Post";
import { IAuthData } from "../../components/interfaces/auth/IAuth";
import { useQuery } from "@apollo/client";

export const MainPage = () => {
  const postsList = useSelector(selectPostsList);
  const isLoading = useSelector(selectIsPostsListLoading);
  const user = JSON.parse(window.localStorage.getItem("user") as string);
  const [getAllPosts, postsState] = apiPosts.useGetAllPostsMutation();
  console.log(postsState);
  const { loading, error, data } = useQuery(GetPostsDocument);
  React.useEffect(() => {
    getAllPosts({})
  }, [])

  return (
    <div>
      { loading ? [ ...Array(3) ].map((post, index) => <PostSkeleton key={ index }/>)
        : data.posts.length === 0 ? (
          <NoPost img={ blog } description="Поки що немає жодного допису"/>
        ) : data.posts.map((post: Post) => {
          return (
            <Post
              key={ post.id }
              id={ post.id }
              user={ post.author }
              isEditable={ post.author.id === (user as IAuthData)?.id }
              title={ post.title }
              isLoading={ isLoading }
              commentsCount={ post.comments.length }
            />
          )
        }) }
    </div>
  );
};
