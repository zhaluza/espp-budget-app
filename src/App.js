import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import './styles/application.scss';

import SignIn from './components/SignIn';
import BudgetPlanner from './components/BudgetPlanner';
import SavingsInfo from './components/SavingsInfo';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/budget">
            {isLoggedIn ? (
              <BudgetPlanner
                username={username}
                setUsername={setUsername}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/savings">
            {isLoggedIn ? (
              <SavingsInfo
                username={username}
                setUsername={setUsername}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/">
            {isLoggedIn ? (
              <Redirect to="/budget" />
            ) : (
              <SignIn
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                username={username}
                setUsername={setUsername}
              />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
