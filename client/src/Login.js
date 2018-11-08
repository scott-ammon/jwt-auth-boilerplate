import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      response: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  // Handles changes to email and password fields
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return(
      <form>
        <p>{(this.state.response) ? this.state.response.message : ''}</p>
        Email: 
          <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} /><br />
        Password: 
          <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
        <button type="button" onClick={() => {this.props.login(this.state.email, this.state.password)}}>Log In</button>
      </form>
    );
  }
}

export default Login