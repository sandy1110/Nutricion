import React, { useEffect } from 'react';
import {AppRouter} from "./router/AppRouter";
import { NavLink } from "react-router-dom";
import { Layout } from "./components/Pages/Layout";
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
