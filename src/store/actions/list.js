import axios from "axios";
import { FETCH_LIST_SUCCESS, FETCH_FILTER_SUCCESS, FETCH_ID_SUCCESS, FETCH_ID_NULL } from "./actionTypes";

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

export function getByIdSuccess(listDetail, zakazId) {
  return {
    type: FETCH_ID_SUCCESS,
    listDetail,
    zakazId
  };
}
export function getByIdNull() {
  return {
    type: FETCH_ID_NULL
  };
}

export function getZakazById(id, zakazId) {
  return async (dispatch) => {
    if (zakazId !== id) {
      try {
        const { data } = await axios.get(`order/${id}`);
        dispatch(getByIdSuccess(data, id));
      } catch (error) {
        console.error(error);
      }
    } else {
      dispatch(getByIdNull());
    }
  }
}
