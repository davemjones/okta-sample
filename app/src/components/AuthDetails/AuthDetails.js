import React, { useState, useEffect } from "react";
import { withOktaAuth } from "@okta/okta-react";

const AuthDetails = ({ oktaAuth, authState }) => {
  const [userInfo, setUserInfo] = useState(null);
  // const [claims, setClaims] = useState(null);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      // setClaims(authState.idToken.claims);

      // get user information from `/userinfo` endpoint
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]); // Update if authState changes

  const renderData = (keys) =>
    keys.map(
      (k) =>
        typeof userInfo[k] == "string" && (
          <div key={k} className="auth-details__key">
            {k} : <span className="auth-details__value">{userInfo[k]}</span>
          </div>
        )
    );

  return (
    <details className="auth-details" open>
      <summary>OKTA User Information</summary>
      <div>{userInfo && renderData(Object.keys(userInfo))}</div>
    </details>
  );
};

export default withOktaAuth(AuthDetails);
