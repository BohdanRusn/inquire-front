import React from "react";
import { Link } from "react-router-dom";

import { Box, Container } from "@mui/material";

import { useStyles } from "./styles";
import { CreatePost } from "./components/CreatePost/CreatePost";

export const Header = () => {
  const styles = useStyles();

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
            <Box style={ { display: "flex", alignItems: "center" } }>
              <CreatePost/>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
