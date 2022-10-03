import React from "react";
import AppForm from "./components/AppForm";
import AppTable from './components/AppTable';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom'

const Form = () => {
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
            <Link to="/">Home</Link>

            <Typography variant='h3' sx={{marginTop:2}}>Registration Form</Typography>
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
}

export default Form;