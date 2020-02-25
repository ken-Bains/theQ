import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/navigation";
import History from "./components/history/history";
import Queue from "./components/queue/queue";
import Admin from "./components/admin/admin";
import { QueueContextProvider } from "./utils/queueProvider";


function App() {
  const Theme = createMuiTheme({
    palette: {
      type: 'light',
    },
  });

  return (
    <MuiThemeProvider theme={Theme}>
      <div className="App">
        <CssBaseline />
        <QueueContextProvider>
          <BrowserRouter>
            <Navigation>
              <Switch>
                <Route exact path="/">
                  <Queue />
                </Route>
                <Route path="/history">
                  <History />
                </Route>
                <Route path="/admin">
                  <Admin />
                </Route>
              </Switch>
            </Navigation>
          </BrowserRouter>
        </QueueContextProvider>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
