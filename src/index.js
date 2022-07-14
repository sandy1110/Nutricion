import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const _appId = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const _serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL;

root.render(
  <>
    {/* <React.StrictMode> */}
    {/* <Router> */}
    <BrowserRouter>
      <MoralisProvider serverUrl={_serverUrl} appId={_appId}>
        <App />
      </MoralisProvider>
    </BrowserRouter>
    {/* </Router> */}
    {/* </React.StrictMode> */}
  </>
);

