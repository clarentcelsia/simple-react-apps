import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "../auth/firebase";

const Navbar = () => {
    const navigate = useNavigate();
    
    const buttonLogoutOnClickHandler = async () => {
        await signOut();
        navigate("/login");
    };
    
    return(
        <Box className={styles.grow}>
            <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" className={styles.grow}>
                Belajar Firebase Authentication
                </Typography>
                <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
                Logout
                </Button>
            </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;