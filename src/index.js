import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@material-ui/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    {/* <Router> */}
    <CssBaseline />
    <App />
    {/* </Router> */}
    {/* </React.StrictMode> */}
  </>
);

