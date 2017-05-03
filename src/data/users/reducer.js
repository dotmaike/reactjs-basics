import * as actionTypes from './actionsTypes';

const initialState = {
  users: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST:
      return { ...state, isFetching: true };
    case actionTypes.FETCH_USERS_FAILURE:
      return { ...state, isFetching: false };
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: [...state.users, ...action.users]
      };
    default:
      return state;
  }
};

export default reducer;
