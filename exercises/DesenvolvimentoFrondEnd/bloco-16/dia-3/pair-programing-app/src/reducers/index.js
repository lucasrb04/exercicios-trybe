import { combineReducers } from 'redux';

import rootReducer from './formReducer';

export default combineReducers({
  form: rootReducer,
})