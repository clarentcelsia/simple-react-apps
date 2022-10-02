import React from "react";
import MovieCardAx from "../components/MovieCardAx";
import { Box, Typography } from "@mui/material";

const MovieListAx = ({movie}) => { 
    return (
        <Box m={5}>
            <Typography variant="h4">Movies</Typography>
            {
                // take attr results as array
                movie.map((items) => {
                    return (
                        <MovieCardAx item={items}/>
                    )
                })
            }

        </Box>
    )
}

export default MovieListAx;