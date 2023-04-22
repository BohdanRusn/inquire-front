import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import { PostSkeleton } from "../../components/Post/Skeleton/Skeleton";
import { isPostLoading, selectPostById } from "../../redux/slices/posts/postsSelectors";
import { Post as IPost } from "../../components/interfaces/IPost";
import { getPostById } from "../../redux/slices/posts/posts";
import { appDispatch } from "../../redux/store";
import { Post } from "../../components/Post/Post";
import { CommentsBlock } from "../../components/CommentBlock/CommentsBlock";
import { AddComment } from "../../components/AddComment/AddComment";

export const FullPost = () => {
  const currentPost = useSelector(selectPostById) as IPost;
  const { id } = useParams();
  const isLoading = useSelector(isPostLoading);

  React.useEffect(() => {
    appDispatch(getPostById(Number(id)))
  }, []);

  if (isLoading) {
    return <PostSkeleton />;
  }

  return (
    <>
      <Post
        id={currentPost.id}
        title={currentPost.title}
        isLoading={isLoading}
        commentsCount={currentPost.comments?.length}
      >
        <ReactMarkdown children={currentPost.content} />
      </Post>
      <CommentsBlock
        items={currentPost.comments as Comment[]}
        isLoading={isLoading}
      >
        <AddComment />
      </CommentsBlock>
    </>
  );
};
