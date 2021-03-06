import * as actionTypes from './../actions/actionTypes';
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART_SUCCESS:
      return state;
    case actionTypes.FETCH_CART_SUCCESS:
      return action.items;
    default:
      return state;
  }
};