import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from "../../types/types.jsx";
import axios from "axios";
import { validateLogin } from "../../helpers/helpers.js";
const API_URL = "https://epicmail.herokuapp.com/api/v2/auth/login";

/* istanbul ignore next */
export const loginUser = userData => dispatch => {
  dispatch({ type: LOGIN_USER_START });
  axios
    .post(API_URL, userData)
    .then(data => {
      console.log(data.data.token);
      localStorage.setItem("userToken", data.data.token);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: data,
      });
      window.location = '/inbox'
    })
    .catch(error => {
      validateLogin(error.response.data);
      dispatch({
        type: LOGIN_USER_FAILURE,
        payload: error
      });
    });
};
