import React, { useEffect, useState } from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import { useMoralis } from "react-moralis";
import Button from '@mui/material/Button';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);
  
  const handleSelectedTab = (event, newTabValue) => {
    setSelectedTab(newTabValue);
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
      <header>
        <AppBar position="static">
          <Tabs value={selectedTab} onChange={handleSelectedTab} centered>
            {/* Add tabs here to displlay in te page */}
            <Tab label="About" />
            <Tab label="Apply" />
            <Tab label="Invest" />
            <Tab label="Contact" />
            {!isAuthenticated &&
              <Button variant="contained" onClick={login}> Metamask Login </Button>}
            {isAuthenticated &&
              <Button variant="contained" onClick={logOut}> Logout </Button>}
          </Tabs>
        </AppBar>
      </header>
    </>
  );
}

export default App;
