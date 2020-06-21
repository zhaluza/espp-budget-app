import React, { useEffect } from 'react';

const SignIn = ({ isLoggedIn, setIsLoggedIn, username, setUsername }) => {
  useEffect(() => {
    const checkCookies = async () => {
      const response = await fetch('/auth/checkSession');
      const json = await response.json();
      if (json.name) {
        console.log(json.name);
        setUsername(json.name);
        setIsLoggedIn(true);
      }
    };
    checkCookies();
  }, []);

  return (
    <div>
      <button type="button">
        <a href="https://github.com/login/oauth/authorize?client_id=f461ae880c8cfd2bb133">
          Log in with Github
        </a>
      </button>
    </div>
  );
};

export default SignIn;
