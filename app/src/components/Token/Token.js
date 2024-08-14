import React, { useEffect } from "react";
import { checkAndRefreshToken } from "../../utils/tokenUtils";
import oktaAuth from "../oktaAuth";

const Token = () => {
  let token = {};

  const checkToken = async () => {
    // check only, do not refresh
    token = await checkAndRefreshToken(false);
    if (!token) {
      console.log("User is not authenticated. Redirecting to login...");
      oktaAuth.signInWithRedirect();
    } else {
      console.log("current token:");
      console.table(token);
    }
  };

  const refreshToken = async () => {
    // check only, do not refresh
    token = await checkAndRefreshToken(true);
    if (!token) {
      console.log("User is not authenticated. Redirecting to login...");
      oktaAuth.signInWithRedirect();
    } else {
      console.log("refreshed token:");
      console.table(token);
    }
  };

  useEffect(() => {
    checkToken(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <h2>Token</h2>
      <div>
        <button onClick={checkToken}>Check Token</button>
        <button onClick={refreshToken}>Refresh Token</button>
      </div>
    </section>
  );
};

export default Token;
