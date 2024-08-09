import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Login = () => {
  const { oktaAuth } = useOktaAuth();

  useEffect(() => {
    oktaAuth.signInWithRedirect();
  }, [oktaAuth]);

  return <div>Redirecting to login...</div>;
};

export default Login;