import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import { GetAuth, Header, Modal, Toast } from "./components";
import { useToast } from "./hooks/toast/useToast";
import { closeToast, selectToastState } from "./redux/slices/toast";
import { ToastType } from "./redux/types/toast";
import { appDispatch } from "./redux/store";
import { AddPost, MainPage, FullPost, Login, Registration } from "./pages";
import { isAuth, isUserLoaded, selectUser } from "./redux/slices/auth/authSelectors";
import { fetchAuthMe } from "./redux/slices/auth/auth";

function App() {
  const [ successToast, errorToast ] = useToast();
  const toast = useSelector(selectToastState);
  const isLoaded = useSelector(isAuth);
  React.useEffect(() => {
    appDispatch(fetchAuthMe());
  }, []);

  React.useEffect(() => {
    if ( toast.message ) {
      switch ( toast.toastType ) {
        case ToastType.Error:
          errorToast(toast.message);
          break;
        case ToastType.Success:
          successToast(toast.message);
          break;
      }
      appDispatch(closeToast());
    }
  }, [ toast?.message, toast?.toastType ]);

  return (
    <>
      <Toast/>
      <Modal/>
      <Header/>
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={isLoaded ? <AddPost /> : <GetAuth />} />
          <Route path="/add-post" element={isLoaded ? <AddPost /> : <GetAuth />} />
          <Route path="/" element={ <MainPage/> } />
        </Routes>
      </Container>
    </>
  );
}

export default App;
