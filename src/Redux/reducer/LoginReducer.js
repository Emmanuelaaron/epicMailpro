import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from "../../types/types.jsx";

const initialState = {
  responseData: "",
  isLoading: false,
  errors: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        responseData: action.payload,
        isLoading: false
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        errors: action.errors,
        isLoading: false
      };
    default:
      return state;
  }
}
