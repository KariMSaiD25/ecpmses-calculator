// @ts-nocheck
import { Outlet } from "react-router-dom";
import * as React from "react";
import { useState } from "react";

import Appbar from "MUI-components/Appbar";
import Drawr from "MUI-components/Drawr";
import { Box } from "@mui/material";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { teal ,  } from "@mui/material/colors";
const drawerWidth = '240px';

function Root() { 
  const [mode, setMode] = useState(localStorage.getItem('currentMode')||'dark')
  const [open , setOpen] = useState('none')
  const [toggleDrawer , setToggleDrawer] =useState('permanent')
  const [items ,setItems] =useState([])

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      favColor:{
      main:teal[800]

      }
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <div>
      <Appbar {...{drawerWidth,setOpen,setToggleDrawer}} /> 

      
    <Box component={'aside'}>
      < Drawr {...{ drawerWidth, setMode, open, setOpen, toggleDrawer }}>
        
      </Drawr></Box>

      <Box component={'main'}
       sx={{ml:{md:drawerWidth} , display:'flex' , justifyContent:'center' , marginTop:16}}  > 
        <Outlet context={{ setOpen, items, setItems }} />
      </Box>
    
      
       </div>
    </ThemeProvider>
      
  
  );
}

export default Root;
