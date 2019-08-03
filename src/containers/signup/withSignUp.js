import React, { Component } from 'react'
import { connect } from 'react-redux';
import SignUpForm from '../../components/signup';
import { signUpUser }from '../../Redux/actions/SignUpActions'

export class withSignUp extends Component {
    state = {
        email: '',
        firstName: '',
        LastName: '',
        password: '',
    
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, firstName: firstname, LastName: lastname, password } = this.state
        const data = {
            email, firstname, lastname, password
        }
        this.props.signUpUser(data);
    }
    render() {
        return (
            <div>
              <SignUpForm 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                userInfo={this.state}
                isLoading={this.props.isLoading}
                errors={this.props.errors}
                // response={this.props.response}
              />
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        isLoading : state.SignupReducer.loading,
        errors: state.SignupReducer.error,
        // response: state.SignupReducer.response
    });

export default connect(mapStateToProps, {signUpUser})(withSignUp)


