import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box, Button, Container, IconButton } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import { useStyles } from "./styles";
import { CreatePost } from "./components/CreatePost/CreatePost";
import { appDispatch } from "../../redux/store";
import { logout } from "../../redux/slices/auth/auth";
import Tooltip from "@mui/material/Tooltip";

export const Header = () => {
  const styles = useStyles();
  const user = JSON.parse(window.localStorage.getItem("user") as string);
  const navigate = useNavigate();

  const logoutProfile = () => {
    appDispatch(logout(null));
    navigate("/")
  }

  return (
    <Box className={ styles.header }>
      <Container maxWidth="lg">
        <Box className={ styles.inner }>
          <Link to="/" className={ styles.logo }>
            <Box>
              Blog
            </Box>
          </Link>
          <Box className={ styles.buttons }>

            { !!user ? (
              <>
                <Box style={ { display: "flex", alignItems: "center" } }>
                  <CreatePost/>
                </Box>
                <Tooltip title="Вийти">
                  <IconButton onClick={logoutProfile}>
                    <LogoutIcon/>
                  </IconButton>
                </Tooltip>
              </>) :
              ( <>
                  <Button variant="outlined" onClick={() => navigate("/register")}>
                    Зареєструватися
                  </Button>
                <Tooltip title="Увійти">
                  <IconButton onClick={() => navigate("/login")}>
                    <LoginIcon/>
                  </IconButton>
                </Tooltip>
              </>

                ) }
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
