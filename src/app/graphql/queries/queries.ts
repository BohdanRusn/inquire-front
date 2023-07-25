import { gql, TypedDocumentNode } from "@apollo/client";
import { PostData, PostsData } from "../../../components/interfaces/IPost";
import { IAuthResponse, IUserLoginData, LoginResponse } from "../../../components/interfaces/auth/IAuth";


export const GetPostsDocument: TypedDocumentNode<PostsData> = gql( `
    query {
        posts {
            id
            title
            content
            comments {
                id
                content
                author {
                    id
                    name
                }
            }
            author {
                id
                name
            }
        }
    }
` );

interface PostID {
  postId: number;
}

export const GetPostById: TypedDocumentNode<PostData, PostID> = gql( `
query GetPostById($postId: Float!){
        post(postId: $postId) {
            id
            title
            content
            comments {
                id
                content
                author {
                    id
                    name
                }
            }
            author {
                id
                name
            }
        }
    }
` );

export const AddNewPost = gql(`
mutation add($newPost: CreatePostInput!) {
  addPost(newPost: $newPost){
    id
    title
    content
    comments{
      content
      author{
        name
      }
    }
    author{
      name
    }
  }
}`)

export const UpdatePost = gql(`
mutation update($post: PostBody!) {
  updatePost(post: $post){
    id
    title
    content
    comments{
      content
      author{
        name
      }
    }
    author{
      name
    }
  }
}`)

export const AuthUser: TypedDocumentNode<LoginResponse, { user: IUserLoginData }> = gql( `
    mutation login($user: LoginUser!){
      login(user: $user){
        id
        name
        email
        lastLoginAt
        token
      }
    }
` );


