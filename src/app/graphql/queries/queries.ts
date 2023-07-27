import { gql, TypedDocumentNode } from "@apollo/client";
import { NewComment, Comment, PostData, PostsData } from "../../../components/interfaces/IPost";
import {
  FetchAuthUser,
  IUserLoginData,
  IUserRegisterData,
  LoginResponse,
  RegisterResponse,
} from "../../../components/interfaces/auth/IAuth";


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

export const GetPostById: TypedDocumentNode<PostData, { postId: number }> = gql( `
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
}`);

export const AddNewComment: TypedDocumentNode<{ addComment: Comment }, { newComment: NewComment }> = gql(`
  mutation addComment($newComment: CreateCommentInput!) {
    addComment(newComment: $newComment){
      content
      author{
        name
        email
      }
    }
  }
`)


export const DeleteComment: TypedDocumentNode<null, { id: number }> = gql(`
  mutation deleteComment($id: Float!) {
    deleteComment(id: $id){
      id
    }
}
`)

export const LoginUser: TypedDocumentNode<LoginResponse, { user: IUserLoginData }> = gql( `
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

export const FetchAuthMe: TypedDocumentNode<FetchAuthUser, { token: string }> = gql( `
    query getCurUser($token: String!) {
      getCurUser(token: $token){
        id
        name
        email
        lastLoginAt
      }
    }
` );


export const RegisterUser: TypedDocumentNode<RegisterResponse, { user: IUserRegisterData }> = gql( `
    mutation register($user: CreateUser!) {
      register(user: $user){
        name
        email
        token
      }
    }
` );


