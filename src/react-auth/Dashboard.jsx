import React, {useEffect} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./auth/firebase";
import Navbar from "./components/Navbar";
import HomePage from "./containers/Home";

const Dashboard = () =>{
  // IN COMMENT, WE GONNA USE PROTECTED ROUTES
    // const navigate = useNavigate();
    // const [user, isLoading, error] = useAuthState(auth);
    
    // useEffect(
    //     () => {
    //       if (isLoading) {
    //         return;
    //       }
    
    //       if (!user) {
    //         navigate("/login");
    //       }
    //     },
    //     [user, isLoading, navigate]
    // );
    
    return(
    <div className="Dashboard">
      <Navbar/>
      <HomePage />
    </div>
    );
};

export default Dashboard;