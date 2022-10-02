// import logo from './logo.svg';
import './App.css';

// createX -> XProvider -> useX

import React from "react";
import AppForm from "./react-form/components/AppForm";
import AppTable from './react-form/components/AppTable';
import { Grid, ThemeProvider, Typography} from '@mui/material';

import theme from './react-list/themes/theme';
import MovieList from './react-list/containers/MovieList';
import AppEffect from './react-effect/components/AppEffect';


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
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Typography variant='h3'>Registration Form</Typography>

        <Grid container spacing={3} columns={2}>
          <Grid item xs={1}>
            <AppForm submit={onSubmit}/>
          </Grid>
          <Grid item xs={1}>
            <AppTable data={datas} remove={onRemove}/>
          </Grid>
        </Grid>
      </div>

      <div className='Movie'>
        <section>
          <MovieList/>
        </section>
      </div>

      <div className='MovieAPIAX'>
        <AppEffect/>
      </div>
    </ThemeProvider>
  )
};

export default App;
