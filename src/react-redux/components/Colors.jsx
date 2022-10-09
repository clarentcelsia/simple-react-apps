import React from "react";
import ColorItem from "./ColorItem";

// call Get /colors
import { useColorsQuery } from "../services/ColorAPI";
import { Box } from "@mui/material";

const ColorList = () => {
    // Property that will be used:
    // - data: response body.
    // - error: catch error
    // - isLoading: query state (pending)
    const { data, error, isLoading } = useColorsQuery();
  
    return (
      <Box>
        {/* Kita gunakan conditional rendering di sini */}
        {error ? (
          <>Errors were found!</>
        ) : isLoading ? (
          <>Data is loading..</>
        ) : (
          data.data.map((colorItem) => (
            <ColorItem key={colorItem.id} colorItem={colorItem} />
          ))
        )}
      </Box>
    );
};
  
export default ColorList;
