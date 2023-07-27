import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { toast } from "react-toastify";
import { setContext } from "@apollo/client/link/context";
import { IAuthResponse } from "../../components/interfaces/auth/IAuth";


const errorLink = onError( ( { graphQLErrors, networkError, response } ) => {
  if ( graphQLErrors ) {
    graphQLErrors.forEach( ( { message } ) => {
        if ( message === "ReAuth" ) {
          window.localStorage.clear();
        } else
          toast.error( message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          } );
      },
    );
  }
  if ( networkError ) {
    console.error( networkError );
  }
} );

const authLink = setContext( ( _, a ) => {
  const user = JSON.parse(localStorage.getItem( 'user' ) as string) as IAuthResponse;
  console.log(a);
  return {
    headers: {
      ...a.headers,
      authorization: user ? `Bearer ${ user.token }` : "",
    },
  };
} );

const httpLink = new HttpLink( { uri: "http://localhost:5000/graphql" } );

const appLink = from( [
  authLink, errorLink, httpLink,
] );

export const apolloClient = new ApolloClient( {
  link: appLink,
  cache: new InMemoryCache(),
} );
