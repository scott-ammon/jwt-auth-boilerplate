import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Signup from './Signup';
import { UserProfile } from './UserProfile'
import { connect } from 'react-redux';
import { requestSignup,
         requestLogin,
         requestLogout,
         requestLockedRoute,
         checkForLocalToken } from './actions/index';

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    token: state.userReducer.token,
    loginError: state.userReducer.loginError,
    signupError: state.userReducer.signupError,
    lockedRoute: state.userReducer.lockedRoute,
  }
};

const mapDispatchToProps = {
  requestSignup,
  requestLogin,
  requestLogout,
  requestLockedRoute,
  checkForLocalToken,
};

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
          Test the protected route
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
          />
          <Login 
            error={this.props.loginError} 
            login={this.props.requestLogin} 
          />
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
