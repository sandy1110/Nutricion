import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@material-ui/core';
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById('root'));
const _appId = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const _serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL;

root.render(
  <>
    {/* <React.StrictMode> */}
    {/* <Router> */}
    <CssBaseline />
    <MoralisProvider serverUrl={_serverUrl} appId={_appId}>
      <App />
    </MoralisProvider>
    {/* </Router> */}
    {/* </React.StrictMode> */}
  </>
);

