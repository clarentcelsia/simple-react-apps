import React from "react";

import { Box, Typography } from "@mui/material";

import styles from "./Home.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../auth/firebase";

const HomePage = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Box className={styles.container}>
        <Typography variant="body1">Hello, this is main page</Typography>

        {user ? (
          <Typography variant="body1">
            Email - <strong>{user.email}</strong>, uid -{" "}
            <strong>{user.uid}</strong>
          </Typography>
        ) : (
          ""
        )}

      </Box>
    </>
  );
};

export default HomePage;
