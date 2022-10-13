import React, { useEffect } from "react";

import { Box, Typography } from "@mui/material";
import useColorStore, { selectColors, selectGetColors } from "../apps/color";
import ColorItem from "./ColorItem";

const ColorListZustand = () => {
  const colors = useColorStore(selectColors);
  const fetchColors = useColorStore(selectGetColors);

  useEffect(()=>{
    fetchColors();
  }, []);

  return (
    <Box>
      <Typography variant="h5">Color List</Typography>
      {colors.map((color) => (
        <ColorItem key={color.id} colorItem={color} />
      ))}
    </Box>
  );
};

export default ColorListZustand;