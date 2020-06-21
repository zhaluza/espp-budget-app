import * as types from '../constants/actionTypes';

export const login = (username) => ({
  type: types.LOGIN,
  payload: username,
});

export const getUsername = () => ({
  type: types.GET_USERNAME,
});

export const handlePercent = (percent) => ({
  type: types.HANDLE_PERCENT,
  payload: percent,
});

export const handleSalary = (salary) => ({
  type: types.HANDLE_SALARY,
  payload: salary,
});
