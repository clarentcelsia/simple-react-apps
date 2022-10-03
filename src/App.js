// import logo from './logo.svg';
import './App.css';

// createX -> XProvider -> useX

import React from "react";
import { ThemeProvider } from '@mui/material';

import theme from './react-list/themes/theme';
import AppRouter from './react-navigation/Page';

function App() {
    return (
    <ThemeProvider theme={theme}>
      <div className='Routing'>
        <AppRouter/> 
      </div>
    </ThemeProvider>
  )
};

export default App;
