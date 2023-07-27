import { useLazyQuery } from "@apollo/client";
import { FetchAuthMe } from "../app/graphql/queries/queries";
import { IAuthResponse } from "../components/interfaces/auth/IAuth";
import React from "react";
import { appDispatch } from "../redux/store";
import { logIn } from "../redux/slices/auth/auth";

const UseAuth = () => {
  const currentUser = JSON.parse( window.localStorage.getItem( "user" ) as string ) as IAuthResponse;
  const [ fetchAuthMe, { data }] = useLazyQuery( FetchAuthMe, { variables: { token: currentUser?.token as string || "" } } );
  React.useEffect( () => {
    fetchAuthMe();
  }, [] );
  if ( data?.getCurUser ){
    appDispatch(logIn(data?.getCurUser))
  }
};

export default UseAuth;
