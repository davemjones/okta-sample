import { OktaAuth } from "@okta/okta-auth-js";
import { oktaConfig, oktaConfigBackup } from "./oktaConfig";

const oktaAuth = (app) => {
  let config = app;

  if (!config && sessionStorage.getItem("eboss_app")) {
    config = sessionStorage.getItem("eboss_app");
  } else if (config === "main") {
    return new OktaAuth(oktaConfig);
  }

  return new OktaAuth(oktaConfigBackup);
};

export default oktaAuth;
