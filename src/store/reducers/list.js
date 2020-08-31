import { FETCH_LIST_SUCCESS, FETCH_FILTER_SUCCESS } from "../actions/actionTypes";

const initialState = {
  data: [],
}

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        data: action.data
      };
    case FETCH_FILTER_SUCCESS:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}