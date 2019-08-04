import { combineReducers } from 'redux';
import SignupReducer from './SignupReducer';
import LoginReducer from '../reducer/LoginReducer';
import inboxReducer from '../reducer/inboxReducer';

const reducers = combineReducers({
    signUpUser: SignupReducer,
    loginUser: LoginReducer,
    inboxReducer,
});
export default reducers;
