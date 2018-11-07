import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Login from './Login'
import Signup from './Signup';
import { UserProfile } from './UserProfile'
import { connect } from 'react-redux';
import { liftTokenToStore, resetUser } from './actions/index';

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    token: state.userReducer.token,
  }
}

const mapDispatchToProps = {
  liftTokenToStore,
  resetUser,
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lockedResult: ''
    }
    // this.liftTokenToState = this.liftTokenToState.bind(this)
    this.logout = this.logout.bind(this)
    this.checkForLocalToken = this.checkForLocalToken.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  logout() {
    localStorage.removeItem('mernToken')
    this.props.resetUser();
  }

  checkForLocalToken() {
    // Look in local storage for the token
    let token = localStorage.getItem('mernToken')
    if(!token || token === 'undefined') {
      // There was no token
      localStorage.removeItem('mernToken')
      this.props.resetUser();
    } else {
      // Token found in localStorage. send back to be verified
      axios.post('/auth/me/from/token', {
        token
      }).then(result => {
        // Put the token in localStorage
        localStorage.setItem('mernToken', result.data.token)
        this.props.liftTokenToStore(result.data);
      }).catch(err => console.log(err));
    }
  }

  componentDidMount() {
    this.checkForLocalToken()
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
          <Login liftToken={this.props.liftTokenToStore} />
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
