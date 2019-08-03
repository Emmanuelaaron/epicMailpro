import { combineReducers } from 'redux';
import SignupReducer from './SignupReducer';
import LoginReducer from '../reducer/LoginReducer';

const reducers = combineReducers({
    signUpUser: SignupReducer,
    loginUser: LoginReducer,
});
export default reducers;
