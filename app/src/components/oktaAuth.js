import { OktaAuth } from "@okta/okta-auth-js";
import { oktaConfig, oktaConfigBackup } from "./oktaConfig";

const oktaAuth = (app) => {
  let config = app;

  if (!config && sessionStorage.getItem("app")) {
    console.log(`session storage: ${sessionStorage.getItem("app")}`);
    config = sessionStorage.getItem("app");
  }

  if (config === "main") {
    console.table(new OktaAuth(oktaConfig));
    sessionStorage.setItem("app", "main");
    return new OktaAuth(oktaConfig);
  } else {
    return new OktaAuth(oktaConfigBackup);
  }
};

export default oktaAuth;
