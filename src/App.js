import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
            <BudgetPlanner />
          </Route>
          <Route path="/savings">
            <SavingsInfo />
          </Route>
          <Route path="/">
            <SignIn
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              username={username}
              setUsername={setUsername}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
