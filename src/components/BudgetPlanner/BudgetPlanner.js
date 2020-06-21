import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatNum } from '../../functions/helperFunctions';

const BudgetPlanner = ({
  username,
  setUsername,
  setIsLoggedIn,
  percent,
  setPercent,
  salary,
  setSalary,
  expense,
  setExpense,
  savings,
  setSavings,
}) => {
  const handleBudget = (e) => {
    setPercent(e);
    const val = e / 100;
    setExpense(formatNum((salary / 12) * val));
    setSavings(formatNum((salary / 12) * (1 - val)));
  };

  useEffect(() => {
    const checkCookies = async () => {
      const response = await fetch('/auth/checkSession');
      const json = await response.json();
      if (json.name) {
        setUsername(json.name);
      } else {
        setIsLoggedIn(false);
      }
    };
    checkCookies();
  }, []);

  return (
    <div className="budget">
      <h2>Select your monthly budget, {username}.</h2>
      <div className="budget__slider-container">
        <input
          className="slider"
          type="range"
          min="1"
          max="30"
          value={percent}
          onChange={(e) => handleBudget(e.target.value)}
        />
        <p>{percent}%</p>
      </div>
      <div className="budget__data-container">
        <div className="budget__data-salary">
          <p>Your Salary</p>
          <input
            type="text"
            value={salary}
            onChange={(e) => {
              setSalary(e.target.value);
              handleBudget(percent);
            }}
          />
        </div>
        <div className="budget__data-expense">
          <p>Your Expense</p>
          <p>${expense}</p>
        </div>
        <div className="budget__data-savings">
          <p>Savings</p>
          <p>${savings}</p>
        </div>
      </div>

      <Link to="/savings">Confirm Selection</Link>
    </div>
  );
};

export default BudgetPlanner;
