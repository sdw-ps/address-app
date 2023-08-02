import React, { useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink, NavLink } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
import { useTheme } from "@mui/material/styles";
import { route } from "./route";

export function ResponsiveAppBar() {
  const theme = useTheme();

  const headlineLinkStyle = useCallback(
    ({ isActive, isPending }: any) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: theme.palette.headline,
        textDecoration: "none",
      };
    },
    [theme.palette.headline]
  );

  return (
    <AppBar position="static" sx={{ margin: "6px 0" }}>
      <Toolbar sx={{ color: theme.palette.headline }}>
        <Typography
          variant="h1"
          component="h1"
          display="flex"
          sx={{ color: theme.palette.headline, fontSize: 30 }}
          paddingRight={2}
        >
          <NavLink to={route.home.to()} style={headlineLinkStyle}>
            Address App
          </NavLink>
        </Typography>
        <Button color="inherit">
          <NavLink to={route.users.to()} style={headlineLinkStyle}>
            Users
          </NavLink>
        </Button>
        &nbsp;|&nbsp;
        <Button color="inherit">
          <NavLink to={route.newUser.to()} style={headlineLinkStyle}>
            New User
          </NavLink>
        </Button>
        &nbsp;|&nbsp;
        <Button color="inherit">
          <NavLink to={route.users2.to()} style={headlineLinkStyle}>
            Users 2
          </NavLink>
        </Button>
        &nbsp;|&nbsp;
        <Button color="inherit">
          <NavLink to={route.newUser2.to()} style={headlineLinkStyle}>
            New User 2
          </NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
