import React from "react";
import "../styles/AppForm.css";

import {
    Button,
    Card,
    TextField
 } from '@mui/material'

// Apply style to MUI
// AppForm.PropTypes = {
//     classes: PropTypes.object.isRequired
// }
const init = {
    Firstname: "",
    Lastname:"",
    Dob: "",
    Phone: "",
    Email: "",
    Url: "",
}

const AppForm = ({submit}) => {
    const [profile, setProfile] = React.useState("")
    const [imgVisibility, setImgVisibility] = React.useState(false)

    // This var is used to accommodate all submitted datas
    const [newData, setNewData] = React.useState(init);

    const handler = (e) => {
        setNewData({
            ...newData,
            [e.target.name]: e.target.value,
        });
    }

    const PImage = (img) =>{
        return <img className="ImageForm" src={img.img} alt="img"/>
    }

    function onImgChange(event){
        setProfile(URL.createObjectURL(event.target.files[0]));
        
        //update url by shallow copying the previous state
        setNewData((prev)=>({
            ...prev,
            Url:event.target.files[0].name,
        }))

        setImgVisibility(true);

        // clear the value of input file
        // if (!imgVisibility){
        //     event.target.value=''
        // } 
    }

    function onSubmitHandler(event) {
        // Blocking default handler
        event.preventDefault();
        submit(newData);

        setNewData(init);

        setImgVisibility(false)

        // saveData(fname, lname); -> send to backend
    }

    return (
        <Card sx={{width:'auto'}}>
        <form onSubmit={onSubmitHandler}>
            <div className="d-image">
                {imgVisibility ? <PImage img={profile}/>: null}
                <br/>
                <input id="input-file" type="file" onChange={onImgChange} name="Url" required/>
            </div>
            <div>
                <TextField 
                    fullWidth
                    required
                    className="form-text"
                    type="text" 
                    onChange={handler} 
                    label="Firstname"
                    name="Firstname"
                    value={newData.Firstname}
                    variant="outlined"/>
                <br/>
                <TextField 
                    fullWidth
                    type="text" 
                    className="form-text"
                    onChange={handler} 
                    label="Lastname" 
                    name="Lastname"
                    value={newData.Lastname}
                    variant="outlined" 
                    required/>
                <br/>
                <TextField 
                    fullWidth
                    type="text" 
                    className="form-text"
                    onChange={handler} 
                    name="Dob"
                    value={newData.Dob}
                    label="Birthdate" 
                    variant="outlined" 
                    required/>
                <br/>
                <TextField 
                    fullWidth
                    type="text" 
                    className="form-text" 
                    onChange={handler} 
                    label="Phone Number" 
                    name="Phone"
                    value={newData.Phone}
                    variant="outlined" 
                    required/>
                <br/>
                <TextField 
                    fullWidth
                    type="text" 
                    className="form-text"
                    onChange={handler} 
                    name="Email"
                    value={newData.Email}
                    label="Email" 
                    variant="outlined" 
                    required/>
            </div>
            <div>
                <Button id="btn-submit" variant="contained" size="small" type="submit">Submit</Button>
            </div>
        </form>
        </Card>
    );
}

export default AppForm;
