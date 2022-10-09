import React from "react";

import ColorList from "../components/Colors";
import ColorForm from "../components/ColorForm";

import { Avatar, Box, Button, TextField, Typography } from "@mui/material";

/**
 *  UseSelector, a hook to access a global state, while
 *  UseDispatch, a hook to access an action.
 */
import { useSelector, useDispatch } from "react-redux";

// Due to the usage of redx toolkit, so we just import:
// -> reducer, state that's already defined in slice. 
import { userSelector, counterSelector, increment, decrement, reset, incrementSpec, decrementSpec } from "../features/CounterSliceThunk";
import { userAsync } from "../features/CounterSliceThunk";

export default function CounterReduxThunk(){
    const [userId, setUserId] = React.useState(0);
    const [currAmount, setCurrAmount] = React.useState(0);

    // a selector for state
    const username = useSelector(userSelector);
    const counter = useSelector(counterSelector);

    // a dispatcher for action.
    const dispatcher = useDispatch();

    // handlerfn
    const buttonIncrementOnClickHandler = () => {
        // do sth -> call dispatcher()
        
        // redux-reducer (manual)
        // dispatcher({
        //     type: "increment",
        // }) 

        // Redux toolkit - reducer
        dispatcher(increment())
    };

    const buttonDecrementOnClickHandler = () => {
        // do sth -> call dispatcher()
        // dispatcher({
        //     type: "decrement",
        // }) 

        // Redux toolkit - reducer
        dispatcher(decrement())
    };

    const buttonResetOnClickHandler = () => {
        // do sth -> call dispatcher()
        // dispatcher({
        //     type: "reset",
        // }) 

        // Redux toolkit - reducer
        dispatcher(reset())
    };

    const textFieldUserIdOnChangeHandler = (e) => {
        // Karena ingin ambil angka, kita parseInt untuk jaga-jaga
        const valueUserId = isNaN(parseInt(e.target.value))
          ? 0
          : parseInt(e.target.value);
    
        setUserId(valueUserId);
    };

    const textFieldAmountOnChangeHandler = (e) => {
        const amountFromField = isNaN(parseInt(e.target.value))
          ? 0
          : parseInt(e.target.value);
    
        setCurrAmount(amountFromField);
    };

    const buttonIncrementByAmountOnClickHandler = () => {
        // Kita panggil dispatcher lagi !
        // dispatcher({
        //   type: "incrementSpec",
        //   amount: currAmount,
        // });
    
        // Sama dengan yang di atas
        dispatcher(incrementSpec(currAmount));
    };
    
    const buttonDecrementByAmountOnClickHandler = () => {
        // Kita panggil dispatcher lagi !
        // dispatcher({
        //   type: "incrementSpec",
        //   amount: currAmount,
        // });
    
        dispatcher(decrementSpec(currAmount));
    };

    const buttonFetchUserOnClickHandler = () => {
        dispatcher(userAsync(userId));
    };

    React.useEffect(
        ()=>{
            dispatcher(userAsync(2))
        },
        // empty dependency list to make this feature runs once.
        [dispatcher]
    );

    return (
        <>
            <Box
                sx={{
                border: "1px dashed grey",
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                }}>

                    <Typography variant="body1" component="div">
                    React Redux
                    </Typography>

                    <Avatar
                        src={username.avatar}
                        alt="avatar"
                        sx={{ width: 64, height: 64 }}/>

                    <Typography variant="body1" component="div">
                    Nama User: {username.first_name}
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                        <TextField
                            label="Input User Id"
                            value={userId}
                            size="small"
                            type="number"
                            onChange={textFieldUserIdOnChangeHandler}
                        />
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={buttonFetchUserOnClickHandler}
                        >
                            Fetch user
                        </Button>
                        </Box>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <TextField
                            disabled
                            label="Current Counter"
                            // defaultValue="0"
                            value={counter}
                            size="small"
                        />
                    </Box>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={buttonDecrementOnClickHandler}
                        >
                            -1
                        </Button>
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={buttonResetOnClickHandler}
                        >
                            0
                        </Button>
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={buttonIncrementOnClickHandler}
                        >
                            +1
                        </Button>
                    </Box>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <TextField
                            label="amount"
                            size="small"
                            value={currAmount}
                            onChange={textFieldAmountOnChangeHandler}
                        />
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={buttonDecrementByAmountOnClickHandler}
                        >
                            - Amount
                        </Button>
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={buttonIncrementByAmountOnClickHandler}
                        >
                            + Amount
                        </Button>
                    </Box>

                    <ColorList/>
                    <ColorForm/>
            </Box>  
        </>
    );
 };