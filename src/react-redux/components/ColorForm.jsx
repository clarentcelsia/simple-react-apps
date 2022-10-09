// Form to add new color
import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useAddColorMutation } from "../services/ColorAPI";

const ColorForm = () => {
    const [colorData, setColorData] = React.useState({
        name: "",
        year: "",
        color: "",
        pantone_value: "",
    });

    const [addColorState, resultDispatch] = useAddColorMutation();

    const buttonAddColorOnClickHandler = (event) => {
        addColorState(colorData);
    };

    const textFieldNameOnChangeHandler = (event) => {
        setColorData({
          ...colorData,
          name: event.target.value,
        });
    };
    
    const textFieldYearOnChangeHandler = (event) => {
        setColorData({
          ...colorData,
          year: event.target.value,
        });
    };

    const textFieldNumberOnChangeHandler = (event) => {
        setColorData({
          ...colorData,
          color: event.target.value,
        });
    };
    
    const textFieldPantoneOnChangeHandler = (event) => {
        setColorData({
          ...colorData,
          pantone_value: event.target.value,
        });
    };

    return(
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 2, width: "25vw" }}
        >
          <TextField
            size="small"
            label="Nama Warna"
            onChange={textFieldNameOnChangeHandler}
            value={colorData.name}
          />
          <TextField
            size="small"
            label="Tahun Dibuat"
            onChange={textFieldYearOnChangeHandler}
            value={colorData.year}
          />
          <TextField
            size="small"
            label="Nomor Warna (e.g. #F1F1F1)"
            onChange={textFieldNumberOnChangeHandler}
            value={colorData.color}
          />
          <TextField
            size="small"
            label="Pantone Value"
            onChange={textFieldPantoneOnChangeHandler}
            value={colorData.pantone_value}
          />
          <Button
            variant="outlined"
            color="success"
            onClick={buttonAddColorOnClickHandler}
          >
            Tambah Color
          </Button>

          {resultDispatch.isLoading ? (
            <>Loading...</>
          ) : (
            // Convert JSON to string
            <Typography variant="body1">{JSON.stringify(resultDispatch.data)}</Typography>
          )}
        </Box>
      );
};

export default ColorForm;