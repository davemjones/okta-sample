import React from "react";
import { withOktaAuth } from "@okta/okta-react";
import "./header.css";

const Header = ({ oktaAuth, authState }) => {
  const login = async () => {
    await oktaAuth.signInWithRedirect();
  };
  const logout = async () => {
    await oktaAuth.signOut();
  };

  return (
    <header className="app-header">
      <div className="header--welcome">
        {authState?.isAuthenticated && "Welcome!"}
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
