import React from "react";
import { Route } from "react-router-dom";
import { LoginCallback, useOktaAuth } from "@okta/okta-react";
import Public from "../routes/Public";
import Home from "../routes/Home";
import Login from "../routes/Login";
import OKTABrowser from "../routes/OKTABrowser";

const AppRouter = () => {
  const { authState } = useOktaAuth();

  return (
    <>
      <Route path="/public" exact component={Public} />
      <Route path="/okta/redirect" component={LoginCallback} />
      <Route path="/okta/login" component={Login} />

      {authState?.isAuthenticated ? (
        <>
          <Route path="/okta-browser" component={OKTABrowser} />
          <Route
            path="/"
            exact
            render={() => <Home isAuthenticated={authState} />}
          />
        </>
      ) : (
        <Route path="/" exact>
          <Home isAuthenticated={authState} />
        </Route>
      )}
    </>
  );
};

export default AppRouter;
