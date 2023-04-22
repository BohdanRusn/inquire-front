import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./style";

interface INoPostProps {
  img: string;
  description: string;
}

export const NoPost = ({ img, description }: INoPostProps) => {
  const styles = useStyles();

  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.content}>
          <Box><img alt={img} src={img}/></Box>
          <Typography className={styles.description}>{description}</Typography>
        </Box>
      </Box>
    </>
  );
};
