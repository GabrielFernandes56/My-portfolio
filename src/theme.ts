import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#00B7EB',
      },
      secondary: {
        main: '#FFD700',
      },
    },
    typography:{
        fontFamily:"Helvetica Neue"
    }
  });
  theme = responsiveFontSizes(theme);

  export default theme;
  
  