import 'isomorphic-fetch';
import * as actionsTypes from './actionsTypes';

export const fetchUsersRequest = () => ({
  type: actionsTypes.FETCH_USERS_REQUEST
});
export const fetchUsersFailure = () => ({
  type: actionsTypes.FETCH_USERS_FAILURE
});
export const fetchUsersSuccess = users => ({
  type: actionsTypes.FETCH_USERS_SUCCESS,
  users
});

export const fetchUsers = () => async dispatch => {
  dispatch(fetchUsersRequest());
  try {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const json = await response.json();
    const users = json.results.map(({ picture }) => ({
      picture: picture.medium
    }));
    return dispatch(fetchUsersSuccess(users));
  } catch (e) {
    return dispatch(fetchUsersFailure());
  }
};
