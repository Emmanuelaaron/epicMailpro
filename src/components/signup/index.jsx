import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../CSS/index.css';

const Loader = require('react-loader');

export const SignUpUserForm = ({ userInfo, handleChange, handleSubmit, isLoading,}) => {
  const { email, firstName, LastName, password } = userInfo;
  return (
    <div>
      <div className="header">
      <a href="#" className="logo"><span id="whitish">Epic</span>
      <span id="blueish">Mail</span>
      </a>
      <div className="header-right">
                <a href="/login">Signin</a>
            </div>
      </div>
    <div className="signup-container">
      <div className="heading">
        <h1>SignUp Here</h1>
      </div>
      <div className="form">
        <form className="form-sigup">
          <div className="email">
          <p>Email</p>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              value={email}
              placeholder="Email"
              required
            />
          </div>

          <div className="firstname">
            <p>First Name</p>
            <input
              type="firstname"
              id="firstname"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              placeholder="firstname"
              required
            />
          </div>
          <div className="lastname">
            <p>Last Name</p>
            <input
              type="lastname"
              id="lastname"
              name="LastName"
              value={LastName}
              onChange={handleChange}
              placeholder="lastname"
              required
            />
          </div>
          <p id="errors_username" />
          <div className="password">
            <p>Password</p>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="password"
              required
            />
          </div>
          <div id="errors">
          </div>
          <div id='errors'/>
          <Loader loaded={!isLoading}>
            <button type="submit" onClick={handleSubmit}>SignUp</button>
          </Loader>
        <p id="para">Have an account? Click here</p>
        </form>
      </div>

    </div>
    </div>
  );
};

SignUpUserForm.propTypes = {
  userInfo: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}


export default SignUpUserForm;
