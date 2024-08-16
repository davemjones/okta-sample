import React, { useState, useEffect } from "react";
import { withOktaAuth } from "@okta/okta-react";
import "./header.css";

const Header = ({ oktaAuth, authState }) => {
  const [userInfo, setUserInfo] = useState(null);

  const login = async () => {
    await oktaAuth.signInWithRedirect();
  };
  const logout = async () => {
    await oktaAuth.signOut();
  };

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      // get user information from `/userinfo` endpoint
      oktaAuth.getUser().then((info) => setUserInfo(info));
    }
  }, [authState, oktaAuth]); // Update if authState changes


  return (
    <header className="app-header">
      <div className="header__welcome">
        {authState?.isAuthenticated &&
          userInfo?.name &&
          `Welcome, ${userInfo.name}!`}
      </div>
      {authState?.isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </header>
  );
};

export default withOktaAuth(Header);
