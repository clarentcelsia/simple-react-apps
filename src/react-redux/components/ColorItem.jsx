import React from "react";

import { Box, Typography } from "@mui/material";

const ColorItem = ({ colorItem }) => {
    return (
      <>
        <Box key={colorItem.id} sx={{ color: colorItem.color }}>
          <Typography variant="body1">{colorItem.name}</Typography>
        </Box>
      </>
    );
  };
  
export default ColorItem;
