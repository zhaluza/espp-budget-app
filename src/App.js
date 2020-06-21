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
  const [percent, setPercent] = useState(0);
  const [salary, setSalary] = useState(100000);
  const [expense, setExpense] = useState(0);
  const [savings, setSavings] = useState(0);
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
                percent={percent}
                setPercent={setPercent}
                salary={salary}
                setSalary={setSalary}
                expense={expense}
                setExpense={setExpense}
                savings={savings}
                setSavings={setSavings}
              />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/savings">
            <SavingsInfo
              username={username}
              setUsername={setUsername}
              percent={percent}
              salary={salary}
              expense={expense}
              savings={savings}
            />
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
