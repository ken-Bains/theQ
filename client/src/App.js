import React, { useState, useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/navigation";
import History from "./components/history/history";
import Queue from "./components/queue/queue";
import Admin from "./components/admin/admin";
import { QueueContextProvider } from "./utils/queueProvider";
import API from "./utils/API";


function App() {
  const [currentTheme, setCurrentTheme] = useState("light")
  const Theme = createMuiTheme({
    palette: {
      type: currentTheme,
    },
  });

  const changedTheme = () => {
    currentTheme === "light" ? setCurrentTheme("dark") : setCurrentTheme("light")
  }

  console.log(Theme)
  return (
    <MuiThemeProvider theme={Theme}>
      <div className="App">
        <CssBaseline />
        <QueueContextProvider>
          <BrowserRouter>
            <Navigation changedTheme={changedTheme}>
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
                {/* <Route path="/oauth" component={API.getSlackAuth}/>
                <Route path="/notes" component={API.getSlackNotes}/> */}
              </Switch>
            </Navigation>
          </BrowserRouter>
        </QueueContextProvider>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
