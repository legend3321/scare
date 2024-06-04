import { createTheme } from "@mui/material/styles";
import "@/assets/fonts.css"

export const theme = createTheme({
 palette: {
   primary: {
     main: "#BDDDB0",
   },
   secondary:{
    main: "#EBF4E8"
   },
    background: {
      default: "#FCFFFC",
    },
    text: {
        primary: "#5A5453"
    }
 },
 typography: {
    fontFamily: "Rubik, sans-serif",
    fontWeightRegular: 100,
    
    h6: {
        fontFamily: "DM Serif Display, Times New Roman",
        },
    h5: {
        fontFamily: "DM Serif Display, Times New Roman",
        },
    h4: {
        fontFamily: "DM Serif Display, Times New Roman",
        },
    h3: {
        fontFamily: "DM Serif Display, Times New Roman",
        },
    h2: {
        fontFamily: "DM Serif Display, Times New Roman",
        },
    h1: {
        fontFamily: "DM Serif Display, Times New Roman",
        // fontSize: "3rem",
        },
 }

});

export default theme;   