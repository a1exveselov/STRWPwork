// Primerno
import { ADD_POST, DELETE_POST } from './ActionTypes'

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id
});
