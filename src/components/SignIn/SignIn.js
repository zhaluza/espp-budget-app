import React, { useEffect } from 'react';

const SignIn = (props) => {
  useEffect(() => {
    const checkCookies = async () => {
      const response = await fetch('/checkSession');
      const json = await response.json();
      console.log(json);
    };
    checkCookies();
  }, []);
  const githubLogIn = async () => {
    try {
      const response = await fetch('/auth');
      // const token = await response.json();
      console.log(response);
      // props.setIsLoggedIn(true);
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  };
  return (
    <div>
      <button type="button" onClick={githubLogIn}>
        Log in with Github
      </button>
      <a href="https://github.com/login/oauth/authorize?client_id=f461ae880c8cfd2bb133">
        Click me!
      </a>
    </div>
  );
};

export default SignIn;
