import React from "react";
import { appDispatch } from "../../redux/store";
import { apiPosts, getAllPosts, getPosts } from "../../redux/slices/posts/posts";
import { useSelector } from "react-redux";
import { selectIsPostsListLoading, selectPostsList } from "../../redux/slices/posts/postsSelectors";
import { PostSkeleton } from "../../components/Post/Skeleton/Skeleton";
import blog from "../../assets/img/blog.png";
import { NoPost } from "./components/NoPost/NoPost";
import { Post } from "../../components/Post/Post";
import { IAuthData } from "../../components/interfaces/auth/IAuth";

export const MainPage = () => {
  const postsList = useSelector(selectPostsList);
  const isLoading = useSelector(selectIsPostsListLoading);
  const user = JSON.parse(window.localStorage.getItem("user") as string);

  React.useEffect(() => {
    appDispatch(getAllPosts())
  }, [])

  return (
    <div>
      { isLoading ? [ ...Array(3) ].map((post, index) => <PostSkeleton key={ index }/>)
        : postsList.length === 0 ? (
          <NoPost img={ blog } description="Поки що немає жодного допису"/>
        ) : postsList.map((post) => {
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
