import React, { useEffect } from 'react';
import {AppRouter} from "./Router/AppRouter";
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
