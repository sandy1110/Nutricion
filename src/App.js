import React, { useEffect, useState } from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import { useMoralis } from "react-moralis";
import Button from '@mui/material/Button';
import {AppRouter} from "./router/AppRouter";
import { NavLink } from "react-router-dom";
import { Layout } from "./components/pages/Layout";

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { authenticate, isAuthenticated, user, account, logout } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const handleSelectedTab = (event, newTabValue) => {
    setSelectedTab(newTabValue)
}

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({signingMessage: "Log in using Moralis" })
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

  return (
    <>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleSelectedTab} selectionFollowsFocus centered>
          {/* Add tabs here to displlay in te page */}
          <NavLink to="/" style={isActive => ({color: isActive ? "white" : "white"})}><Tab label="About" /></NavLink>
          <NavLink to="/apply" style={isActive => ({color: isActive ? "white" : "white"})}><Tab label="Apply" /></NavLink>
          <NavLink to="/invest" style={isActive => ({color: isActive ? "white" : "white"})}><Tab label="Invest" /></NavLink>
          <NavLink to="/contact" style={isActive => ({color: isActive ? "white" : "white"})}><Tab label="Contact" /></NavLink>
          {!isAuthenticated &&
            <Button variant="contained" onClick={login}> Metamask Login </Button>}
          {isAuthenticated &&
            <Button variant="contained" onClick={logOut}> Logout </Button>}
        </Tabs>
      </AppBar>
      <AppRouter />
      <Layout />
    </>
  );
}

export default App;
