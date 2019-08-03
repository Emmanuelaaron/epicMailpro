import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter , Route } from 'react-router-dom';
import SignUp from './containers/signup/withSignUp';
import Login from './components/login/index';

 export default function App(){
    return (
        <BrowserRouter>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={Login} />

        </BrowserRouter>
    );
}
