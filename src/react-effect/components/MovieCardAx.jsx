import { Box, Card, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import React from "react";

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
                    image={item.show.image !== null? `${item.show.image.medium}`: null}
                    alt={item.show.name}
                    height="250"
                    sx={{objectFit:"inherit"}}/>
                <CardContent
                    sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap:2,
                        width:"fit-content"}}>

                        <Typography component="div" variant="body1">
                            {item.show.name}
                        </Typography>
                        <Rating
                            value={item.show.rating.average !== null? item.show.rating.average/2: 0}
                            precision={0.2}
                            size="medium"
                            readOnly/>
                        <Typography variant="body2">Release: {item.show.premiered}</Typography>
                        <Typography variant="body2">{item.show.summary}</Typography>
                </CardContent>
            </Box>
        </Card>
    )
};

export default MovieCard;