import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import authReducer from './reducers/authReducer';

const store = createStore(
  authReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;
