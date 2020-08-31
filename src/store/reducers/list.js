import { FETCH_LIST_SUCCESS, FETCH_FILTER_SUCCESS, FETCH_ID_SUCCESS, FETCH_ID_NULL } from "../actions/actionTypes";

const initialState = {
  data: [],
  listDetail: [],
  zakazId: null
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
    case FETCH_ID_SUCCESS:
      return {
        ...state,
        listDetail: action.listDetail,
        zakazId: action.zakazId
      };
    case FETCH_ID_NULL:
      return {
        ...state,
        zakazId: null
      };
    default:
      return state;
  }
}