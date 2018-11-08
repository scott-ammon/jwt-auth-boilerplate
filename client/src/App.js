import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Login from './Login'
import Signup from './Signup';
import { UserProfile } from './UserProfile'
import { connect } from 'react-redux';
import { liftTokenToStore, 
         resetUser, 
         requestLogin,
         checkForLocalToken } from './actions/index';

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    token: state.userReducer.token,
    error: state.userReducer.error,
  }
}

const mapDispatchToProps = {
  liftTokenToStore,
  resetUser,
  requestLogin,
  checkForLocalToken,
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lockedResult: ''
    }
    this.logout = this.logout.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  logout() {
    localStorage.removeItem('mernToken')
    this.props.resetUser();
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
        <UserProfile user={this.props.user} logout={this.logout} />
        <a onClick={this.handleClick}> Test the protected route</a>
        <p>{this.state.lockedResult}</p>
      </div>
      );
    } else {
      return (
        <div className="App">
          <Signup liftToken={this.props.liftTokenToStore} />
          <Login error={this.props.error} 
                 login={this.props.requestLogin} 
                 liftToken={this.props.liftTokenToStore} 
          />
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
