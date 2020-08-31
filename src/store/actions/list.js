import axios from "axios";
import { FETCH_LIST_SUCCESS, FETCH_FILTER_SUCCESS } from "./actionTypes";

axios.defaults.baseURL = 'http://localhost:8080/api/';

export function getListSuccess(data) {
  return {
    type: FETCH_LIST_SUCCESS,
    data,
  };
}

export function getListZakaz() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("order");
      dispatch(getListSuccess(data))
    } catch (error) {
      console.error(error);
    }
  };
}

export function getFilterSuccess(data) {
  return {
    type: FETCH_FILTER_SUCCESS,
    data,
  };
}

export function getFilterList(filter) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("order", { params: { filter } });
      dispatch(getFilterSuccess(data))
    } catch (error) {
      console.error(error);
    }
  };
}
