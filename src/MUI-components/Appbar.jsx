// @ts-nocheck

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import { Toolbar, IconButton ,useTheme} from "@mui/material";
import { Menu } from "@mui/icons-material";
  



  export default function Appbar ({drawerWidth , setOpen , setToggleDrawer}) {
  const theme= useTheme()
  return (
    <AppBar  position="fixed"   sx={{width:{md:`calc(100% - ${drawerWidth})` , xs:'100%'},  ml:{xs : 0 , sm: drawerWidth },   backgroundColor:theme.palette.favColor.main}}>
    <Toolbar>
  
      <IconButton sx={{display:{md:'none' }, mr:2}} aria-label="menu" onClick={() =>{setOpen('block') ;
      setToggleDrawer('temporary')}  } >
        <Menu />
      </IconButton>
      <Link
        href="/"
        underline="none" 
        color="inherit"
        sx={{
          flexGrow: 1,
          fontSize: "1.5rem",
          "&:hover": { fontSize: "1.8rem" , transition :'0.3s' },
        }}
      >
        My expenses
      </Link>
      <Typography variant="body1" mr={1}>
        Karim Said
      </Typography>
      <Avatar
        alt="karim Said"
        src="./imgs/me.png"
        sx={{ width: 37, height: 37, ml: "8px" }}
      />
    </Toolbar>
  </AppBar>
  )
}


