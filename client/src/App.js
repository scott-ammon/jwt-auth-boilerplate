import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Login from './Login'
import Signup from './Signup';
import { UserProfile } from './UserProfile'
import { connect } from 'react-redux';
import { liftTokenToStore, 
         resetUser, 
         requestSignup,
         requestLogin,
         requestLogout,
         checkForLocalToken } from './actions/index';

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    token: state.userReducer.token,
    loginError: state.userReducer.loginError,
    signupError: state.userReducer.signupError,
  }
}

const mapDispatchToProps = {
  liftTokenToStore,
  resetUser,
  requestSignup,
  requestLogin,
  requestLogout,
  checkForLocalToken,
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lockedResult: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.checkForLocalToken();
  }

  handleClick(e) {
    e.preventDefault()
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.props.token;
    axios.get('/locked/test').then(result => {
      this.setState({
        lockedResult: result.data
      })
    })
  }

  render() {
    const user = this.props.user;

    if(user.name) {
      return (
      <div className="App">
        <UserProfile user={this.props.user} logout={this.props.requestLogout} />
        <a onClick={this.handleClick}> Test the protected route</a>
        <p>{this.state.lockedResult}</p>
      </div>
      );
    } else {
      return (
        <div className="App">
          <Signup error={this.props.signupError}
                  signup={this.props.requestSignup}
                  liftToken={this.props.liftTokenToStore} 
          />
          <Login error={this.props.loginError} 
                 login={this.props.requestLogin} 
                 liftToken={this.props.liftTokenToStore} 
          />
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
