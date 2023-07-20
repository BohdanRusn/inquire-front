import { gql } from "@apollo/client";

export const FETCH_POSTS_LIST = gql`
query {
    posts {
        id
        title
    }
}
`
