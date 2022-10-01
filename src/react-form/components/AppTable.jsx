import React from "react";
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    Button
} from '@mui/material'

// This function will be rendered once the event is being triggered
const AppTable = ({data, remove}) => {
    // const [btnVisibility, setBtnVisibility] = React.useState(false)

    const BtnDelete = (props) => {
        return <td>
            <Button variant="outlined" disableElevation size="small" onClick={()=>onDelete(props.id)}>Delete</Button>
        </td>   
    }

    // The unique id should be an ID not email.
    function onDelete(email){
        remove(email)
    }

    data = data.filter((v,_) => v.Firstname.length !== 0)

    return (
            <TableContainer>
                <Table sx={{border: 1, marginBottom: "2em"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight:"bold"}}>Firstname</TableCell>
                            <TableCell sx={{fontWeight:"bold"}}>Lastname</TableCell>
                            <TableCell sx={{fontWeight:"bold"}}>Date of Birth</TableCell>
                            <TableCell sx={{fontWeight:"bold"}}>Handphone</TableCell>
                            <TableCell sx={{fontWeight:"bold"}}>Email</TableCell>
                            <TableCell sx={{fontWeight:"bold"}}>URL</TableCell>
                            <TableCell sx={{fontWeight:"bold"}}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((attrs, i) => {
                                return(
                                <TableRow key={i}>
                                    <TableCell>{attrs.Firstname}</TableCell>
                                    <TableCell>{attrs.Lastname}</TableCell>
                                    <TableCell>{attrs.Dob}</TableCell>
                                    <TableCell>{attrs.Phone}</TableCell>
                                    <TableCell>{attrs.Email}</TableCell>
                                    <TableCell>{attrs.Url}</TableCell>
                                    {/* {btnVisibility? <BtnDelete id={attrs.Email}/>: null} */}
                                    <BtnDelete id={attrs.Email}/>
                                </TableRow>
                            )}
                            )
                           
                        }
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default AppTable;