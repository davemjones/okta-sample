import React from "react";
import AuthDetails from "../../components/AuthDetails";

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
      <div>add api browser calls here</div>
    </>
  );
};

export default OKTABrowser;
