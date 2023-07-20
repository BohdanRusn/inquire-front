import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import './index.css';
import App from './App';
import store from "./redux/store";
import { theme } from "./theme";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./app/graphql";

const root = ReactDOM.createRoot(
  document.getElementById( 'root' ) as HTMLElement,
);
root.render(
  <React.StrictMode>
    <CssBaseline/>
    <ThemeProvider theme={ theme }>
      <BrowserRouter>
        <Provider store={ store }>
          <ApolloProvider client={ apolloClient }>
            <App/>
          </ApolloProvider>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
