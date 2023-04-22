import React from "react";
import { Box, Skeleton, Stack } from "@mui/material";
import {useStyles} from "./styles";


export const PostSkeleton = () => {
  const styles = useStyles()
  return (
    <Box className={styles.skeleton} style={{borderRadius: 12}}>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width="100%" height={300} sx={{borderRadius: 3}} />
        <Box>
          <Box className={styles.skeletonUser}>
            <Box style={{display: "flex"}}>
              <Skeleton
                variant="circular"
                width={40}
                height={40}
                style={{ marginRight: 10 }}
              />
              <Box>
                <Skeleton variant="text" width={60} height={20} />
                <Skeleton variant="text" width={100} height={15} />
              </Box>
            </Box>
            <Box className={styles.skeletonViews}>
              <Skeleton variant="text" width={15} height={20} />
              <Skeleton variant="text" width={15} height={20} />
            </Box>
          </Box>
          <Box>
            <Skeleton variant="text" width="60%" height={45} />
            <Box className={styles.skeletonTags}>
              <Skeleton variant="text" width={25} height={30} />
              <Skeleton variant="text" width={25} height={30} />
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
