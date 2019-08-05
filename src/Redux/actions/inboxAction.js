import {
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILURE
} from "../../types/types.jsx";
import { validateInbox } from '../../helpers/helpers.js'

const API_URL = "https://epicmail.herokuapp.com/api/v2/messages";
let userToken = localStorage.getItem("userToken");
const requestOptions = {
  method: "GET",
  headers: {
    "Content-type": "application/json",
    "x-access-token": userToken
  }
};
/* istanbul ignore next */
const inbox = () => dispatch => {
  dispatch({ type: GET_MESSAGES_START });
  fetch(API_URL, requestOptions)
    .then(res => res.json())
    .then(res => {
      console.log(res, "our data");
      validateInbox(res)
      dispatch({
        type: GET_MESSAGES_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      dispatch({
        type: GET_MESSAGES_FAILURE,
        errors: error
      });
    });
};

export default inbox;
