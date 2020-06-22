import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './savingsInfo.scss';
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
  setIsLoggedIn,
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
        setUsername(null);
      }
    };

    checkCookies();
  }, []);

  const logOut = async () => {
    const response = await fetch('/auth/logout');
    if (response) {
      setIsLoggedIn(false);
      setUsername(null);
    }
  };

  return (
    <div className="savings card">
      <h2 className="savings__heading">Thanks, {username}.</h2>
      <div className="data">
        <div className="data__row row">
          <p>Your Election</p>
          <p>{percent}%</p>
        </div>
        <div className="data__row row">
          <p>Your Salary</p>
          <p>${formatNum(salary)}</p>
        </div>
        <div className="data__row row">
          <p>Your Expense</p>
          <p>${formatNum(expense)}</p>
        </div>
        <div className="data__row row">
          <p>Your Savings</p>
          <p>${formatNum(savings)}</p>
        </div>
      </div>
      <button className="btn small-btn">
        <Link to="/budget">Go Back</Link>
      </button>
      <button className="btn small-btn btn-alert" onClick={() => logOut()}>
        Log Out
      </button>
    </div>
  );
};

export default connect(mapStateToProps)(SavingsInfo);
