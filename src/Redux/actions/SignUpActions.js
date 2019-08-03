import helper from '../../helpers/helpers.js';
export const started = () => ({type: 'STARTED'});
import axios from 'axios';

export const successfulSignUp = (payload) => ({type: 'SUCCESSFUL', payload});

export const failedSignUp = (payload) => ({type: 'FAILED', payload});

const API_URI = 'https://epicmail.herokuapp.com/api/v2/auth/signup';

export const signUpUser = userData => (dispatch) => {
    dispatch(started());
    // console.log(userData);
    axios.post(API_URI, userData).then(
      (data) => {
        // helper(data)
        dispatch({
          type: 'SUCCESSFUL',
          payload: data,
        }, 
        );
      }
      ).catch(
        error => {
          // console.log(error.response.data.errors)
          console.log(error.response.data)
          helper(error.response.data)
          dispatch({ type: 'FAILED', payload:error.response.data.errors});
        })
  };
  