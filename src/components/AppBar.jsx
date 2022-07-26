import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import criptoforLogo from '../assets/criptofor_logo.png';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core";
import { useMoralis } from "react-moralis";

const ResponsiveAppBar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const { authenticate, isAuthenticated, user, account, logout } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({signingMessage: "Log in with your wallet" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  const logOut = async () => {
    await logout();
    console.log("logged out");
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
      loginButton: {
          color: "#ffbd59"
      }
    },
  }));

  const classes = useStyles();

  return (
    <AppBar position="static" style={{ background: '#ff914d' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Link to="/">
                <img src={criptoforLogo} alt="logo" width="55" height="55"></img>
            </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                padding: '20px'
            }}
          >
             Mortgage
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

            <MenuItem key="about">
                <Typography textAlign="center">About</Typography>
            </MenuItem>
            <MenuItem key="policies">
                <Typography textAlign="center">Our policies</Typography>
            </MenuItem>
            <MenuItem key="contact">
                <Typography textAlign="center">Contact</Typography>
            </MenuItem>

            </Menu>
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Link to="/about" className={classes.link}>
              <Button
                key="about"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About
              </Button>
            </Link>
          <Link to="/about" className={classes.link}>
              <Button
                key="policies"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Our policies
              </Button>
          </Link>
          <Link to="/contact" className={classes.link}>
              <Button
                key="contact"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contact
              </Button>
          </Link>
          </Box>

          {!isAuthenticated &&
              <Button variant="contained" onClick={login}> Wallet login </Button>}
            {isAuthenticated &&
              <Button variant="contained" onClick={logOut}> Logout </Button>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
