import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return(
      <form>
        <p>{(this.props.error) ? this.props.error : ''}</p>
        Email: 
        <input type="email" 
               name="email" 
               value={this.state.email} 
               onChange={this.handleInputChange} 
        />
        <br />
        Password: 
        <input type="password" 
               name="password" 
               value={this.state.password} 
               onChange={this.handleInputChange} 
        />
        <button type="button" 
                onClick={() => {this.props.login(this.state.email, this.state.password)}}>
        Log In
        </button>
      </form>
    );
  }
}

export default Login