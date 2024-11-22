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


function Drawr({ drawerWidth, setMode ,open , toggleDrawer  , setOpen}) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(toggleDrawer)

  return (
    <div>
      <Drawer
        className="border-none"
        sx={{
          display: { xs: open, md: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            
          },
        }}
        variant={toggleDrawer}
        anchor="left" 
        open={true}
        onClose={() =>  setOpen('none')}
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
                setMode(theme.palette.mode === "light" ? "dark" : "light");
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

          <ListItem disablePadding>
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
