import { Box, Typography } from "@mui/material";
import React from "react";
import MovieCard from "../components/MovieCard";

import movie from '../data/movie.json'

const MovieList = () => { 
    return (
        <Box m={5}>
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