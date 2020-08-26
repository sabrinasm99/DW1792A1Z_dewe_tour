import axios from "axios";
import store from "../store";
import { GET_ERRORS, SET_CURRENT_SEARCH } from "./types";

export const onSearch = (search) => {
  axios
    .get(`https://backend-dewetour.herokuapp.com/api/v1/trips?search=${search}`)
    .then((res) => {
      store.dispatch(setCurrentSearch(res));
    })
    .catch((err) => {
      return {
        type: GET_ERRORS,
        payload: err.response.data,
      };
    });
};

export const setCurrentSearch = (res) => {
  return {
    type: SET_CURRENT_SEARCH,
    payload: res,
  };
};
