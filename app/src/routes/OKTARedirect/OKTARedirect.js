import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Security } from "@okta/okta-react";

const OKTARedirect = () => {
  const location = useLocation();
  const history = useHistory();
  const [oktaAuth, setOktaAuth] = useState();

  useEffect(() => {
    // extract app from the URL
    const params = new URLSearchParams(location.search);
    const appId = params.get("app");

    if (appId) {
      if (appId === "main") {
        setOktaAuth()
      }
    }
  });
};
