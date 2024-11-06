import { ADD_USER, DELETE_USER, LOGOUT_USER } from './ActionTypes';

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});