import { combineReducers } from 'redux';
import dataReducer from './dataReducer';

// Not necessary now,
// but useful if other reducers are needed
// (e.g. for managing user info in db)
export default combineReducers({
  data: dataReducer,
});
