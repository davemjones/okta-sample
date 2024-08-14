import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { toRelativeUrl } from "@okta/okta-auth-js";
import { Security } from "@okta/okta-react";
import oktaAuth from "./oktaAuth";
import App from "../App";
import AppRouter from "../routes/AppRouter";

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
