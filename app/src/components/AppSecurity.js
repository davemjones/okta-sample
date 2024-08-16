import React, { useEffect, useState } from "react";
import { useHistory, withRouter, useLocation } from "react-router-dom";
import { toRelativeUrl } from "@okta/okta-auth-js";
import { Security } from "@okta/okta-react";
import oktaAuth from "./oktaAuth";
import App from "../App";
import AppRouter from "../routes/AppRouter";

const AppSecurity = () => {
  const history = useHistory();
  const location = useLocation();
  const [app, setApp] = useState(null);

  useEffect(() => {
    // extract app from the URL
    const params = new URLSearchParams(location.search);
    const appId = params.get("app");
    console.log(`appId: ${appId}`);
    
    if (appId && !app) {
      //set the session storage
      sessionStorage.setItem("eboss_app", appId);
    }

    if (!appId) {
      setApp(sessionStorage.getItem("eboss_app"));
    } else {
      setApp(appId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    app && (
      <Security
        oktaAuth={oktaAuth(app)}
        restoreOriginalUri={restoreOriginalUri}
      >
        <App>
          <AppRouter />
        </App>
      </Security>
    )
  );
};

const AppSecurityWithRouter = withRouter(AppSecurity);

export default AppSecurityWithRouter;
