import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import React from "react";
import MovieCard from "../components/MovieCard";

import movie from '../data/movie.json'

const MovieList = () => { 
    return (
        <Box m={5}>
            <Link to="/">Home</Link>

            <Typography variant="h4">Container of Movie List</Typography>
            {
                // take attr results as array
                movie.results.map((items) => {
                    return (
                        <MovieCard item={items}/>
                    )
                })
            }

        </Box>
    )
}

export default MovieList;