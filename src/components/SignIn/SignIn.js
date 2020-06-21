import React, { useState, useEffect } from 'react';

const SignIn = ({ isLoggedIn, setIsLoggedIn, username, setUsername }) => {
  const [clientId, setClientId] = useState('');
  useEffect(() => {
    const getClientId = async () => {
      try {
        const response = await fetch('/auth/getId');
        const json = await response.json();
        setClientId(json.clientId);
      } catch (err) {
        throw new Error(err);
      }
    };
    const checkCookies = async () => {
      const response = await fetch('/auth/checkSession');
      const json = await response.json();
      if (json.name) {
        setUsername(json.name);
      }
    };
    checkCookies();
    getClientId();
  }, []);

  // log user in when username is updated
  useEffect(() => {
    if (username) setIsLoggedIn(true);
  }, [username]);

  return (
    <div>
      <button type="button">
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${clientId}`}
        >
          Log in with Github
        </a>
      </button>
    </div>
  );
};

export default SignIn;
