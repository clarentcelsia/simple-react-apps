// Here we gonna call the 3rd party API using axios lib

import axios from "axios";
import React from "react";
import MovieListAx from "../containers/MovieListAx";
import { Link } from 'react-router-dom'

// Call the api 
const mov = axios.create({
    baseURL: "https://api.tvmaze.com/",
})

const AppEffect = () => {
    // Declare state to store API data.
    const [data_, setData] = React.useState([]);

    // Call api once mounted and set the data
    // Runs on the 1st render (with epmty bracket)
    React.useEffect(function effectCallback(){
        return async () => {
            try{
                // note. when return promise, so you'r able to use 3 common methods of promise suchas then, catch, and finally
                const api = await mov.get("search/shows?q=snow");
                // this line will be executed after the await finished
                setData(api.data);
            }catch (e){
                console.log(e);
            }
        }
    }, []);

    return (
        <div style={{margin:"2em"}}>
            <Link to="/">Home</Link>

            <MovieListAx movie={data_}/>
        </div>
    )
}

export default AppEffect;