import {
  useTheme,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person2,
  Settings,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
//import { useEffect, useState } from "react";

function Drawr({ drawerWidth, setMode, open, toggleDrawer, setOpen , setToggleDrawer}) {
  //object
  const theme = useTheme();

  const navigate = useNavigate();
  const location = useLocation();
  
  //const [bodyWidth, setBodyWidth] = useState(document.body.offsetWidth);

//// useEffect(() => {
//     // Function to update body width
////  const updateBodyWidth = () => {
//       setBodyWidth(document.body.offsetWidth);
//     };

//     // Attach the event listener
//     window.addEventListener('resize', updateBodyWidth);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', updateBodyWidth);
//     };
//   }, []);

// bodyWidth >=900 ?setToggleDrawer('permanent'):setToggleDrawer('temporary')
//   console.log(toggleDrawer , bodyWidth);

  return (
    <div>
      <Drawer
          
        sx={{
          display: { xs: open, md: "block" },
          width: drawerWidth,
          flexShrink: 0,
          '.MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={ toggleDrawer }
        anchor="left"
        open={ true }
        onClose={() => {
          setToggleDrawer('permanent')
          setOpen("none")}}
      >
    
        <List>
          
          <ListItem
            sx={{ display: "flex", justifyContent: "center", mb: "14px" }}
            disablePadding
          >
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "light" ? "dark" : "light"
                );
                setMode(localStorage.getItem('currentMode'));
              }}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 sx={{ color: "teal" }} />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          </ListItem>
          {/* <IconButton onClick={() => setMode((mode) =>  mode ==='light' ? 'dark' : 'light' ) } color='warning' variant='contained'></IconButton> */}

          <Divider />

          <ListItem
          divider
            disablePadding
            sx={{
              bgcolor:
                location.pathname === "/"
                  ? // @ts-ignore
                    theme.palette.favColor?.main
                  : "",
            }}
          >
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            divider
            sx={{
              bgcolor:
                location.pathname === "/create"
                  ? // @ts-ignore
                    theme.palette.favColor?.main
                  : "",
            }}
          >
            <ListItemButton onClick={() => navigate("/create")}>
              <ListItemIcon>
                <Create />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem>

          <ListItem divider disablePadding 
            sx={{
              bgcolor:
                location.pathname === "/profile"
                  ? // @ts-ignore
                    theme.palette.favColor?.main
                  : "",
            }}>
            
            <ListItemButton onClick={() => navigate("/profile")}>
              <ListItemIcon>
                <Person2 />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/Settings")}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/signIn")}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Drawr;
