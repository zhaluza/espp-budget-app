import React, { useState } from 'react';

const BudgetPlanner = ({ username }) => {
  const [percent, setPercent] = useState(0);
  const [salary, setSalary] = useState(100000);
  const [expense, setExpense] = useState(0);
  const [savings, setSavings] = useState(0);

  const formatNum = (num) => {
    const numStr = num.toFixed(2);
    const decimal = numStr.indexOf('.') || numStr.length - 1;
    const arrStr = numStr.split('');
    let count = 0;
    for (let i = decimal; i >= 0; i--) {
      if (count === 3) {
        arrStr.splice(i, 0, ',');
        count = 0;
        i++;
      } else count++;
    }
    if (arrStr[0] === ',') arrStr.splice(0, 1);
    return arrStr.join('');
  };

  const handleBudget = (e) => {
    setPercent(e);
    const val = e / 100;
    setExpense(formatNum((salary / 12) * val));
    setSavings(formatNum((salary / 12) * (1 - val)));
  };

  return (
    <div className="budget">
      <h2>Select your monthly budget, {username}.</h2>
      <input
        className="slider"
        type="range"
        min="1"
        max="30"
        value={percent}
        onChange={(e) => handleBudget(e.target.value)}
      />
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
          <p>
            ${expense} ({percent}%)
          </p>
        </div>
        <div className="budget__data-savings">
          <p>Savings</p>
          <p>${savings}</p>
        </div>
      </div>
      <button className="budget__button">Confirm Selection</button>
    </div>
  );
};

export default BudgetPlanner;
