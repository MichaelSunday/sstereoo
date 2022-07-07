import React from 'react';
import './App.css';

import logo from "./bodega.gif";
import radio from "./radio.png";
import store from "./store.png";
import update from "./update.png";

import Player from 'react-material-music-player'
import { Track, PlayerInterface } from 'react-material-music-player'

import makeTheme from "./makeTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import {
  Box,
  useMediaQuery,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  Link,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


function App() {
  const [mode, setMode] = React.useState("system");
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = makeTheme(
    mode === "system" ? (isDark ? "dark" : "light") : mode
  );

  const [
    {
      width,
      position,
      bottom,
      boxShadow,
      borderRadiusTL,
      borderRadiusTR,
      borderRadiusBL,
      borderRadiusBR,
    },
    setSx,
  ] = React.useState({
    width: "100vw",
    position: "fixed",
    bottom: 0,
    boxShadow: 8,
    borderRadiusTL: 1,
    borderRadiusTR: 1,
    borderRadiusBL: 0,
    borderRadiusBR: 0,
  });

  // dropdown button functionality
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    
    <ThemeProvider theme={theme}>
      {/* <meta name="viewport" content="width=device-width"></meta> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>COLLECTION</MenuItem>
              <MenuItem onClick={handleClose}>RADIO</MenuItem>
              <MenuItem onClick={handleClose}>MAIN</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
         
        <img src={logo} className="App-logo" />
        <img src={radio} className="radio" />
        <img src={update} className="update" />
        <img src={store} className="store" />

        <Player

        />
      </Box>
    </ThemeProvider>
  );
}

// get media data over tthe internet
const TEST_MEDIA =
  "https://raw.githubusercontent.com/MichaelSunday/sstereoo/master/src/";

// update playlist with test data and start play
PlayerInterface.play([
  new Track(
    "1",
    TEST_MEDIA + "dotha.jpg",
    "Go",
    "Dotha",
    TEST_MEDIA + "go.mp3"
  ),
]);

// wait 3 seconds
window.setTimeout(
  () =>
    // adds music at end of playlist
    PlayerInterface.playLater([
      new Track(
        "2",
        TEST_MEDIA + "emerson.jpeg",
        "All through the night",
        "Emerson",
        TEST_MEDIA +
          "Emerson%20--%20All%20through%20the%20Night%20(Ar%20Hyd%20y%20Nos).mp3"
      ),
    ]),
  3000 // 3 seconds
);

// wait 6 seconds
window.setTimeout(
  () =>
    // add music after current track
    PlayerInterface.playNext([
      new Track(
        "3",
        TEST_MEDIA + "guido.jpg",
        "Ut queant laxis",
        "Guido von Arezzo",
        TEST_MEDIA + "Guido%20von%20Arezzo%20--%20Ut%20queant%20laxis.mp3"
      ),
    ]),
  6000 // 6 seconds
);

export default App;
