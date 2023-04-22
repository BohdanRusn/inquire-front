import React from "react";
import { appDispatch } from "../../redux/store";
import { getAllPosts } from "../../redux/slices/posts/posts";
import { useSelector } from "react-redux";
import { selectIsPostsListLoading, selectPostsList } from "../../redux/slices/posts/postsSelectors";
import { PostSkeleton } from "../../components/Post/Skeleton/Skeleton";
import blog from "../../assets/img/blog.png";
import { NoPost } from "./components/NoPost/NoPost";
import { Post } from "../../components/Post/Post";

export const MainPage = () => {
  const postsList = useSelector(selectPostsList);
  const isLoading = useSelector(selectIsPostsListLoading);
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
              title={ post.title }
              isLoading={ isLoading }
              commentsCount={ post.comments.length }
            />
          )
        }) }
    </div>
  );
};
