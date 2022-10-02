import { Box, Card, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import React from "react";

const baseURL = "https://image.tmdb.org/t/p/w200";

const MovieCard = ({item}) => {
    return (
        // raised == elevation
        <Card 
            raised
            sx={{
                marginTop:3,
                width:"50%"}}>
            <Box>
                <CardMedia
                    component="img"
                    image={`${baseURL}${item.poster_path}`}
                    alt={item.title}
                    height="250"
                    sx={{objectFit:"inherit"}}/>
                <CardContent
                    sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap:2,
                        width:"fit-content"}}>

                        <Typography component="div" variant="body1">
                            {item.title}
                        </Typography>
                        <Rating
                            value={item.vote_average/2}
                            precision={0.2}
                            size="medium"
                            readOnly/>
                        <Typography variant="body2">Release: {item.release_date}</Typography>
                        <Typography variant="body2">{item.overview}</Typography>
                </CardContent>
            </Box>
        </Card>
    )
};

export default MovieCard;