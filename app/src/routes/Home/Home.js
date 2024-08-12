import React from "react";

const Home = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated ? (
        <>
          <div>You have authenticated using OKTA! </div>
          <div>
            Checkout the <a href="/api-browser">OKTA API</a> browser.
          </div>
        </>
      ) : (
        <div>Please login to use this app.</div>
      )}
    </>
  );
};

export default Home;
