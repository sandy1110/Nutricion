import React, { useEffect } from 'react';
import { Home } from "./components/Home";
import { useMoralis } from "react-moralis";
import Button from '@mui/material/Button';


function App() {

  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  useEffect(() => {
      if (isAuthenticated) {
        // add your logic here
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

  const login = async () => {
    if (!isAuthenticated) {

      await authenticate({signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
          alert("Welcome, wallet connected! " + user.get("ethAddress"));
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
    <div align="right">
      <Button variant="contained" onClick={login}> Metamask Login </Button>
      <Button variant="contained" onClick={logOut} disabled={isAuthenticating}> Logout </Button>
    </div>
      <Home/>
    </>
  );
}

export default App;
