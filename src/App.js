import React, { useEffect } from 'react';
import {AppRouter} from "./router/AppRouter";
import { NavLink } from "react-router-dom";
import { useMoralis } from "react-moralis";

import ResponsiveAppBar  from "./components/AppBar";

function App() {

    const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

    useEffect(() => {
      const connectorId = window.localStorage.getItem("connectorId");
      if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3({ provider: connectorId });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, isWeb3Enabled]);


  return (
    <>
      <ResponsiveAppBar />
      <AppRouter />
    </>
  );
}

export default App;
