import React from "react";
import { Route, useHistory, withRouter } from "react-router-dom";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { LoginCallback, Security } from "@okta/okta-react";
import App from "../App";
import Public from "../routes/Public";
import Home from "../routes/Home";
import Login from "../routes/Login";

const oktaAuth = new OktaAuth({
  issuer: process.env.REACT_APP_ISSUER,
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: window.location.origin + "/okta/redirect",
  scopes: ['openid'],
  pkce: true
});

const AppSecurity = () => {
  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <App>
        <Route path="/public" exact component={Public} />
        <Route path="/okta/redirect" component={LoginCallback} />
        <Route path="/okta/login" component={Login} />
        <Route path="/" exact component={Home} />
      </App>
    </Security>
  );
};

const AppSecurityWithRouter = withRouter(AppSecurity);

const AppRouter = () => <AppSecurityWithRouter />;

export default AppRouter;
