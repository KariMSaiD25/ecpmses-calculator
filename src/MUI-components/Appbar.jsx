// @ts-nocheck

import Typography from "@mui/material/Typography";

import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import { Toolbar, IconButton, useTheme, Box } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export default function Appbar({ drawerWidth, setOpen, setToggleDrawer }) {
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${drawerWidth})`, xs: "100%" },
        ml: { xs: 0, sm: drawerWidth },
        backgroundColor: theme.palette.favColor.main,
      }}
    >
      <Toolbar>
        <IconButton
          sx={{ display: { md: "none" }, mr: 2 }}
          aria-label="menu"
          onClick={() => {
            setOpen("block");
            setToggleDrawer("temporary");
          }}
        >
          <Menu />
        </IconButton>
        <Typography
          component={RouterLink}
          to="/"
          color="inherit"
          sx={{
            textDecoration: "none",
            fontSize: "1.5rem",
            "&:hover": { fontSize: "1.8rem", transition: "0.3s" },
          }}
        >
          My expenses
        </Typography>
        <Box sx={{ flexGrow: 1 }} />

        <Typography variant="body1" mr={1}>
          Karim Said
        </Typography>
        <Avatar
          alt="karim Said"
          src="imgs/me.png"
          sx={{ width: 37, height: 37, ml: "8px" }}
        />
      </Toolbar>
    </AppBar>
  );
}
