import { createStore, combineReducers } from 'redux';
import userReducer from './Actions/reducers/UserReducer';
import postReducer from './Actions/reducers/PostReducer';

const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer
});

const store = createStore(rootReducer);

export default store;
