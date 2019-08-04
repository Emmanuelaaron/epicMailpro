import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter , Route } from 'react-router-dom';
import SignUp from './containers/signup/withSignUp';
import Login from './components/login/index';
import inboxmessages from './containers/inbox/withInbox.js';

 export default function App(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/signup" component={SignUp}/>
            <Route path="/inbox" component={inboxmessages}/>
        </BrowserRouter>
    );
}
