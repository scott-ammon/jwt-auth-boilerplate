import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Signup } from './Signup';
import { Login } from './Login';
import { UserProfile } from './UserProfile'

import { requestSignup,
         requestLogin,
         requestLogout,
         requestLockedRoute,
         checkForLocalToken,
         handleInputChange } from '../actions/index';

class App extends Component {

  componentDidMount() {
    this.props.checkForLocalToken();
  }

  render() {
    const user = this.props.user;
    const locked = this.props.lockedRoute ? <p>You have accessed the locked route</p> : '';

    if(user.name) {
      return (
      <div className="App">
        <UserProfile 
          user={this.props.user} 
          logout={this.props.requestLogout} 
        />
        <button onClick={() => {this.props.requestLockedRoute(this.props.token)}}>
          Test the locked route
        </button>
        {locked}
      </div>
      );
    } else {
      return (
        <div className="App">
          <Signup 
            error={this.props.signupError}
            signup={this.props.requestSignup}
            handleInput={this.props.handleInputChange}
            name={this.props.signupName}
            email={this.props.signupEmail}
            password={this.props.signupPassword}
          />
          <br />
          <Login 
            error={this.props.loginError} 
            login={this.props.requestLogin} 
            handleInput={this.props.handleInputChange}
            email={this.props.loginEmail}
            password={this.props.loginPassword}
          />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    token: state.userReducer.token,
    loginError: state.userReducer.loginError,
    signupError: state.userReducer.signupError,
    lockedRoute: state.userReducer.lockedRoute,
    signupName: state.userReducer.signupName,
    signupEmail: state.userReducer.signupEmail,
    signupPassword: state.userReducer.signupPassword,
    loginEmail: state.userReducer.loginEmail,
    loginPassword: state.userReducer.loginPassword
  }
};

const mapDispatchToProps = {
  requestSignup,
  requestLogin,
  requestLogout,
  requestLockedRoute,
  checkForLocalToken,
  handleInputChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
