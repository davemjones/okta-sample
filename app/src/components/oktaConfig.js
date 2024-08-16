export const oktaConfig = {
  issuer: process.env.REACT_APP_ISSUER,
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: window.location.origin + "/okta/redirect",
  scopes: ["openid", "profile", "email"],
  pkce: true,
};

export const oktaConfigBackup = {
  issuer: process.env.REACT_APP_ISSUER,
  clientId: process.env.REACT_APP_CLIENT_ID_BACKUP,
  redirectUri: window.location.origin + "/okta/redirect?app=backup",
  scopes: ["openid", "profile", "email"],
  pkce: true,
}
