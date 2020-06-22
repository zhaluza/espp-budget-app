import React, { useState, useEffect } from 'react';
import './signIn.scss';

const SignIn = ({ isLoggedIn, setIsLoggedIn, username, setUsername }) => {
  useEffect(() => {
    const checkCookies = async () => {
      const response = await fetch('/auth/checkSession');
      const json = await response.json();
      if (json.name) {
        setUsername(json.name);
      }
    };
    checkCookies();
  }, []);

  // log user in when username is updated
  useEffect(() => {
    if (username) setIsLoggedIn(true);
  }, [username]);

  return (
    <div className="card">
      <h2>ESPP Budget App</h2>
      <p>Control your future.</p>
      <button className="btn big-btn" type="button">
        <a href="https://github.com/login/oauth/authorize?client_id=f19e5c8797adfbdf16f7">
          Log in with Github
        </a>
      </button>
    </div>
  );
};

export default SignIn;
