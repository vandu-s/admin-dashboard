import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Options from "./Navtabs/Options";
import Hidden from "@mui/material/Hidden";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Hidden mdDown>
            <Stack direction="row" spacing={2}>
              <Button color="inherit">Home</Button>
              <Options />
              <Button color="inherit">Signout</Button>
            </Stack>
          </Hidden>

          <Hidden mdUp>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
