import React, { useEffect, useState } from "react";
import { checkAndRefreshToken } from "../../utils/tokenUtils";
import oktaAuth from "../oktaAuth";
import "./token.css";
import TokenDetail from "./components/TokenDetail";

const Token = () => {
  const [token, setToken] = useState(undefined);
  const [oldToken, setOldToken] = useState(undefined);

  const checkToken = async () => {
    // check only, do not refresh
    await checkAndRefreshToken(false).then((currentToken) => {
      setToken(currentToken);
      if (!currentToken) {
        console.log("User is not authenticated. Redirecting to login...");
        oktaAuth.signInWithRedirect();
      } 
    });
  };

  const refreshToken = async () => {
    // check only, do not refresh
    await checkAndRefreshToken(true).then((newToken) => {
      setOldToken(token);
      setToken(newToken);
      if (!newToken) {
        console.log("User is not authenticated. Redirecting to login...");
        oktaAuth.signInWithRedirect();
      } 
    });
  };

  useEffect(() => {
    checkToken(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="token-component">
      <h2>Token</h2>
      <div className="token-component__details">
        <details className="token-component__details-current">
          <summary>Current Token</summary>
          <TokenDetail token={token} />
        </details>
        <details className="token-component__details-old">
          <summary>Old Token</summary>
          <TokenDetail token={oldToken} />
        </details>
      </div>
      <div className="token-component__actions">
        <button onClick={checkToken}>Check Token</button>
        <button onClick={refreshToken}>Refresh Token</button>
      </div>
    </section>
  );
};

export default Token;
