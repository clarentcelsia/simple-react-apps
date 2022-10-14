import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Grid, Box, Button, TextField, Typography } from "@mui/material";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, login, registerEmailAndPassword } from "../auth/firebase";
import styles from "./Login.module.css"

const LoginForm = ({type}) => {
    const navigate = useNavigate();

    const [user, isLoading, error] = useAuthState(auth);

    const [credential, setCredential] = useState({
        email:"",
        password:"",
    });

    const textFieldEmailOnChangeHandler = (event) => {
        setCredential({
          ...credential,
          email: event.target.value,
        });
    };
    
    const textFieldPasswordOnChangeHandler = (event) => {
        setCredential({
          ...credential,
          password: event.target.value,
        });
    };
    
    const loginHandler = () => {
        // console.log("Login");
        // navigate("/");
    
        login(credential.email, credential.password);
    };

    const registerHandler = () => {
        // console.log("Register");
        // navigate("/login");
    
        registerEmailAndPassword(credential.email, credential.password);
    };

    const buttonLoginOrRegisterOnClickHandler = () => {
        if (type === "login") {
          loginHandler();
        } else {
          registerHandler();
        }
    };

    useEffect(
        () => {
            if (isLoading) {
                return;
            }
    
            if (user) {
                navigate("/firebase");
            }
        },
            [user, isLoading, navigate]
    );

    return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "95vh" }}
        >
          <Box className={styles.boxy} component="form" noValidate>
            <Typography variant="body1">
              {type === "login" ? "Login Page" : "Register Page"}
            </Typography>
    
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              size="small"
              value={credential.email}
              onChange={textFieldEmailOnChangeHandler}
            />
    
            <TextField
              label="password"
              type="Password"
              variant="outlined"
              size="small"
              value={credential.password}
              onChange={textFieldPasswordOnChangeHandler}
            />
    
            <Button
              variant="outlined"
              size="small"
              onClick={buttonLoginOrRegisterOnClickHandler}>
                {type === "login" ? "Login" : "Register Account"}
            </Button>
    
            {type === "login" ? (
              <Link to="/register">
                <Typography variant="body1">or do you want Register ?</Typography>
              </Link>
            ) : (
              <Link to="/login">
                <Typography variant="body1">or do you want Login ?</Typography>
              </Link>
            )}
          </Box>
        </Grid>
      );
};

export default LoginForm;