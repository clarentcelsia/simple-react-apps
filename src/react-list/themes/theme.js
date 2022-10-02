import { createTheme } from "@mui/material/styles";

import { blueGrey, green } from "@mui/material/colors";

const themeOption = {
    palette: {
        primary: {
            main: green[300],
        },
        secondary: {
            main: blueGrey[400],
        }
    }
};

const theme = createTheme(themeOption);

export default theme;

