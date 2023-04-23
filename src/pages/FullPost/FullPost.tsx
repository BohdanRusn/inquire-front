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
import { IAuthData } from "../../components/interfaces/auth/IAuth";
import { selectUser } from "../../redux/slices/auth/authSelectors";

export const FullPost = () => {
  const currentPost = useSelector(selectPostById) as IPost;
  const user = useSelector(selectUser);
  const { id } = useParams();
  const isLoading = useSelector(isPostLoading);

  React.useEffect(() => {
    appDispatch(getPostById(Number(id)))
  }, []);

  if ( isLoading ) {
    return <PostSkeleton/>;
  }

  return (
    <>
      { !isLoading && currentPost &&
            <>
              <Post
                    id={ currentPost?.id }
                    title={ currentPost.title }
                    user={ currentPost.author }
                    isEditable={ Boolean(currentPost.author?.id === (user && (user as IAuthData)?.id)) }
                    isLoading={ isLoading }
                    commentsCount={ currentPost.comments?.length }
              >
                <ReactMarkdown children={ currentPost.content }/>
              </Post>
              <CommentsBlock
                    postOwner={ currentPost.author }
                    items={ currentPost.comments as Comment[] }
                    isLoading={ isLoading }
              >
                { user && <AddComment/> }
              </CommentsBlock>
            </>
      }
    </>
  );
};
