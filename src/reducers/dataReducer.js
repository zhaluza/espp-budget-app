import * as types from '../constants/actionTypes';
import { formatNum } from '../functions/helperFunctions';

const initialState = {
  percent: 0,
  salary: 100000,
  expense: 0,
  savings: 0,
};

const dataReducer = (state = initialState, action) => {
  let val, expense, savings;
  switch (action.type) {
    case types.HANDLE_PERCENT:
      const percent = action.payload;
      val = percent / 100;
      expense = formatNum((state.salary / 12) * val);
      savings = formatNum((state.salary / 12) * (1 - val));
      return {
        ...state,
        percent,
        expense,
        savings,
      };

    case types.HANDLE_SALARY:
      const salary = action.payload;
      val = state.percent / 100;
      expense = formatNum((salary / 12) * val);
      savings = formatNum((salary / 12) * (1 - val));
      return {
        ...state,
        expense,
        savings,
        salary,
      };

    default:
      return state;
  }
};

export default dataReducer;
