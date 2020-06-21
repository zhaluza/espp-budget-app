import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { Link } from 'react-router-dom';
import { formatNum } from '../../functions/helperFunctions';

const mapStateToProps = (state) => ({
  percent: state.data.percent,
  salary: state.data.salary,
  expense: state.data.expense,
  savings: state.data.savings,
});

const mapDispatchToProps = (dispatch) => ({
  handlePercent: (event) => dispatch(actions.handlePercent(event.target.value)),
  handleSalary: (event) => dispatch(actions.handleSalary(event.target.value)),
});

const BudgetPlanner = ({
  username,
  setUsername,
  setIsLoggedIn,
  handlePercent,
  handleSalary,
  percent,
  salary,
  expense,
  savings,
}) => {
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
          onChange={handlePercent}
        />
        <p>{percent}%</p>
      </div>
      <div className="budget__data-container">
        <div className="budget__data-salary">
          <p>Your Salary</p>
          <input type="text" value={salary} onChange={handleSalary} />
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

export default connect(mapStateToProps, mapDispatchToProps)(BudgetPlanner);
