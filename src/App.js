import React, { useEffect } from 'react';
import {AppRouter} from "./router/AppRouter";
import { NavLink } from "react-router-dom";

import ResponsiveAppBar  from "./components/AppBar";

function App() {

  useEffect(() => {

  });


  return (
    <>
      <ResponsiveAppBar />
      <AppRouter />
    </>
  );
}

export default App;
