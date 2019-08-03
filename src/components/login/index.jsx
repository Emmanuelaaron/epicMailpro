import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {loginUser} from '../../Redux/actions/LoginAction.js';

const Loader = require('react-loader');

export const LoginUserForm = ({ loginUser: Login, isLoading }) => {
  const [fields, setFields] = useState({ email: '', password: '' });

  const onSubmit = (e) =>  {
    e.preventDefault();
    const userData = {
        email: fields.email,
        password: fields.password, 
    };
    Login(userData);
    
  };

  return (
    <div>
        <div className="header">
      <a href="#" className="logo"><span id="whitish">Epic</span>
      <span id="blueish">Mail</span>
      </a>
      <div className="header-right">
                <a href="/signup">SignUp</a>
            </div>
      </div>
    <div className="signup-container">
      <div className="heading">
        <h1>Login Here</h1>
      </div>
      <div className="form">
        <form className="login-form">
          <p id="success" />
          <div className="email">
            <input
              type="text"
              id="email"
              name="email"
              value={fields.email}
              onChange={(e) => {
                setFields({ ...fields, email: e.target.value });
              }}
              placeholder="Email"
              required
            />
          </div>
          <div className="password">
            <input
              type="password"
              id="password"
              name="password"
              value={fields.password}
              onChange={(e) => {
                setFields({ ...fields, password: e.target.value });
              }}
              placeholder="password"
              required
            />
          </div>
          <div id="errors" />
          <Loader loaded={!isLoading}>
            <button type="submit" onClick={onSubmit}>Login</button>
          </Loader>

        </form>
      </div>

    </div>
    </div>
  );
};

LoginUserForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.loginUser.isLoading,
});


export default connect(mapStateToProps, { loginUser })(LoginUserForm);
