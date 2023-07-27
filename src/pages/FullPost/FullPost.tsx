import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import { PostSkeleton } from "../../components/Post/Skeleton/Skeleton";
import { Post } from "../../components/Post/Post";
import { CommentsBlock } from "../../components/CommentBlock/CommentsBlock";
import { AddComment } from "../../components/AddComment/AddComment";
import { IAuthData } from "../../components/interfaces/auth/IAuth";
import { useQuery } from "@apollo/client";
import { GetPostById } from "../../app/graphql/queries/queries";

export const FullPost = () => {
  const { id } = useParams();
  const user = JSON.parse(window.localStorage.getItem("user") as string)
  const { loading, data, refetch } = useQuery( GetPostById, { variables: { postId: Number( id ) },  } );
  
  if ( loading ) {
    return <PostSkeleton/>;
  }
  
  return (
    <>
      { !loading && data?.post &&
          <>
              <Post
                  id={ data?.post?.id }
                  title={ data?.post.title }
                  user={ data?.post.author }
                  isEditable={ Boolean( data?.post.author?.id === ( user && ( user as IAuthData )?.id ) ) }
                  isLoading={ loading }
                  commentsCount={ data?.post.comments?.length }
              >
                  <ReactMarkdown children={ data?.post.content }/>
              </Post>
              <CommentsBlock
                  postOwner={ data?.post.author }
                  items={ data?.post.comments as Comment[] }
                  isLoading={ loading }
                  refetch={refetch}
              >
                { user && <AddComment refetch={refetch}/> }
              </CommentsBlock>
            </>
      }
    </>
  );
};
