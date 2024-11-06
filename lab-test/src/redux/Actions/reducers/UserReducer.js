import { ADD_USER, DELETE_USER, LOGIN_USER, LOGOUT_USER } from '../ActionTypes';

const initialState = {
  users: [],
  loggedInUser: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, { id: state.users.length + 1, ...action.payload }]
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    case LOGIN_USER:
      return {
        ...state,
        loggedInUser: action.payload
      };
    case LOGOUT_USER:
      return {
        ...state,
        loggedInUser: null
      };
    default:
      return state;
  }
};

export default userReducer;