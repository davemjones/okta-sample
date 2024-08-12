import React from "react";
import {  useHistory, withRouter } from "react-router-dom";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import {  Security } from "@okta/okta-react";
import App from "../App";
import AppRouter from "../routes/AppRouter";


const oktaAuth = new OktaAuth({
  issuer: process.env.REACT_APP_ISSUER,
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: window.location.origin + "/okta/redirect",
  scopes: ["openid", "profile", "email"],
  pkce: true,
});

const AppSecurity = () => {
  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <App>
        <AppRouter />
      </App>
    </Security>
  );
};

const AppSecurityWithRouter = withRouter(AppSecurity);

export default AppSecurityWithRouter;
