import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import { Header, Modal, Toast } from "./components";
import { useToast } from "./hooks/toast/useToast";
import { closeToast, selectToastState } from "./redux/slices/toast";
import { ToastType } from "./redux/types/toast";
import { appDispatch } from "./redux/store";
import { AddPost, MainPage, FullPost } from "./pages";

function App() {
  const [ successToast, errorToast ] = useToast();
  const toast = useSelector(selectToastState);

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
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={<AddPost />} />
          <Route path="/add-post" element={ <AddPost/> } />
          <Route path="/" element={ <MainPage/> } />
        </Routes>
      </Container>
    </>
  );
}

export default App;
