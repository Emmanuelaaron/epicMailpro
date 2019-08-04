import helper from '../../helpers/helpers.js';
export const started = () => ({type: 'STARTED'});
import axios from 'axios';

export const successfulSignUp = (payload) => ({type: 'SUCCESSFUL', payload});

export const failedSignUp = (payload) => ({type: 'FAILED', payload});

const API_URI = 'https://epicmail.herokuapp.com/api/v2/auth/signup';

/* istanbul ignore next */
export const signUpUser = userData => (dispatch) => {
    dispatch(started());
    axios.post(API_URI, userData).then(
      (data) => {
        console.log(data.data.token)
        localStorage.setItem('user_token', data.data.token);
        dispatch({
          type: 'SUCCESSFUL',
          payload: data,
        });
        window.location = '/inbox'
      }
      ).catch(
        error => {
          helper(error.response.data)
          dispatch({ type: 'FAILED', payload:error.response.data.errors});
        })
  };
  