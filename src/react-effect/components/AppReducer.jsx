// UseReducer

/** UseState vs UseReducer 

    useState is a basic hook to manage simple state transformation, such as non-trivial state like a list of items [add, remove, update state],
    while useReducer is to manage more complex logic state.

    Use 'useReducer' when you need to define a logic of the output in a separate place.
    Basically, we use some state management that is separated into different places then rendering it in one place, which is difficult to read, maintain, and test.
*/ 

import React from "react";
import { Link } from 'react-router-dom'

const AppReducer = () => {
    /*  
        UseReducer hook accept 'reducer' and 'initState'.
        
        - InitialState is an initial value for state.
        - Reducer() is a function that receives 2 params: (currentState, action).

        Returns an array of the 'current_state' and 'dispatch()'
     */

    // Init State
    const initState = {
        counter: 0,
        isRunning: false,
    }

    // Reducer Function
    const reducer = (state, action) => {
        let newState;
        switch (action.type){
            case 'start':
                // Copy the current state value *(destructuring) then update 'isRunning'.
                newState = {
                    ...state,
                    isRunning: true,
                }
                return newState;
            
            case 'stop':
                newState = {
                    ...state,
                    isRunning: false,
                }
                return newState;
            case 'reset':
                newState = {
                    counter: 0,
                    isRunning: false,
                }
                return newState;
            case 'tick':
                newState = {
                    ...state,
                    counter: state.counter + 1,
                }
                return newState;
            default:
                throw new Error();
        }
    }

    // UseReducer's return.
    /* Dispatch() is to dispatch an action object then the 'dispatch()' will be used/called everytime you want to trigger and update the state.*/

    const [state, dispatch] = React.useReducer(reducer, initState);
    const id = React.useRef(0); // a mutable ref object

    React.useEffect(()=>{
        if (!state.isRunning){return;}
        id.current = setInterval(()=>{
            // call tick when state 'isRunning' is true 
            // action = {type: 'YOUR TYPE'}
            dispatch({type: 'tick'})
        }, 1000);
        
        return () => {
            clearInterval(id.current);
            id.current = 0;
        };
    }, [state.isRunning]); // UseEffect will be rendered everytime the state 'isRunning' is true, then finish it when 'isRunning' turns to false.

    return (
        <div style={{margin:"2em"}}>
            <Link to="/">Home</Link>
            <br/>
            {state.counter}s
            <br/>
            <button onClick={() => dispatch({type:'start'})}>Start</button>
            <button onClick={() => dispatch({type:'stop'})}>Stop</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

// const AppReducer = () => {

// }

export default AppReducer;