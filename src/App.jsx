import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter , Route } from 'react-router-dom';

import SignUp from './containers/signup/withSignUp';

 export default function App(){
    return (
        <BrowserRouter>
            <Route path="/signup" component={SignUp}/>
        </BrowserRouter>
    );
}

