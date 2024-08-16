import React from "react";
import AuthDetails from "../../components/AuthDetails";
import Token from "../../components/Token/Token";

const OKTABrowser = () => {
  return (
    <>
      <p>
        OKTA User Information provided by{" "}
        <code>
          oktaAuth.getUser().then(info =&gt; /* do something with info */)
        </code>
      </p>

      <AuthDetails />
      <Token />
    </>
  );
};

export default OKTABrowser;
