// import logo from './logo.svg';
import './App.css';

import React from "react";
import AppForm from "./react-form/components/AppForm";
import AppTable from './react-form/components/AppTable';
import { Grid } from '@mui/material';

// Preparing data


function App() {
  let init = [
    {
      Firstname: "",
      Lastname:"",
      Dob: "",
      Phone: "",
      Email: "",
      Url: "",
    },
  ];

  const [datas, setDatas] = React.useState(init);

  const onSubmit = (newData) => {
    setDatas([...datas, newData]);
  }

  const onRemove = (email) => {
    console.log("Deleted email ", email);
    console.log("DATA BEFORE FILTER ", datas)
    setDatas([...datas.filter((v,_) => v.Email !== email)])   
  }

  return (
    <div className='App'>
      <h1>Registration Form</h1>
      <Grid container spacing={3} columns={2}>
        <Grid item xs={1}>
          <AppForm submit={onSubmit}/>
        </Grid>
        <Grid item xs={1}>
          <AppTable data={datas} remove={onRemove}/>
        </Grid>
      </Grid>
    </div>
  )
};

export default App;
