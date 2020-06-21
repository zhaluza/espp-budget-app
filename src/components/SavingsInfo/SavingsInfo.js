import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../../actions/actions';
import { Link } from 'react-router-dom';
import { formatNum } from '../../functions/helperFunctions';

const mapStateToProps = (state) => ({
  percent: state.data.percent,
  salary: state.data.salary,
  savings: state.data.savings,
  expense: state.data.expense,
});

const SavingsInfo = ({
  username,
  setUsername,
  percent,
  salary,
  savings,
  expense,
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
    <div>
      <h2>Thanks, {username}.</h2>
      <div className="data">
        <div className="data__row">
          <p>Your Election</p>
          <p>{percent}%</p>
        </div>
        <div className="data__row">
          <p>Your Salary</p>
          <p>${formatNum(salary)}</p>
        </div>
        <div className="data__row">
          <p>Your Expense</p>
          <p>${expense}</p>
        </div>
        <div className="data__row">
          <p>Your Savings</p>
          <p>${savings}</p>
        </div>
      </div>
      <Link to="/budget">Change Election</Link>
    </div>
  );
};

export default connect(mapStateToProps)(SavingsInfo);
