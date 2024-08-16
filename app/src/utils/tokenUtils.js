import oktaAuth from "../components/oktaAuth";

export const checkAndRefreshToken = async (refresh = false) => {
  try {
    // Get the current access token from the token manager
    const tokenManager = oktaAuth().tokenManager;
    const token = await tokenManager.get("accessToken");

    // Check if the token is about to expire (within 5 minutes)
    if (token && token.expiresAt) {
      const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
      const timeUntilExpiration = token.expiresAt - currentTime;

      if (timeUntilExpiration < 300) {
        // 300 seconds = 5 minutes
        console.log("Token is about to expire. Refreshing...");

        // Refresh the token
        if (refresh) {
          const refreshedTokens = await oktaAuth().tokenManager.renew(
            "accessToken"
          );
          console.log("Token refreshed:", refreshedTokens.accessToken);
          return refreshedTokens.accessToken;
        }
      } else {
        console.log("Token is still valid:", token);
        return token;
      }
    } else {
      console.log("No access token found, user might be logged out.");
      return null;
    }
  } catch (error) {
    console.error("Error while checking or refreshing token:", error);
    throw error;
  }
};
