import React from "react";
import { PostSkeleton } from "../../components/Post/Skeleton/Skeleton";
import blog from "../../assets/img/blog.png";
import { NoPost } from "./components/NoPost/NoPost";
import { Post } from "../../components/Post/Post";
import { IAuthData } from "../../components/interfaces/auth/IAuth";
import { useQuery } from "@apollo/client";
import { GetPostsDocument } from "../../app/graphql/queries/queries";

export const MainPage = () => {
  const { loading, error, data } = useQuery( GetPostsDocument, {
    fetchPolicy: 'network-only', // Force a network request on each render
  } );
  const user = JSON.parse( window.localStorage.getItem( "user" ) as string );
  
  
  return (
    <div>
      { loading ? [ ...Array( 3 ) ].map( ( post, index ) => <PostSkeleton key={ index }/> )
        : data?.posts.length === 0 ? (
          <NoPost img={ blog } description="Поки що немає жодного допису"/>
        ) : data?.posts.map( ( post ) => {
          return (
            <Post
              key={ post.id }
              id={ post.id }
              user={ post.author }
              isEditable={ post.author.id === (user as IAuthData)?.id }
              title={ post.title }
              isLoading={ loading }
              commentsCount={ post.comments.length }
            />
          )
        }) }
    </div>
  );
};
