import React, {Component} from 'react';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return(
      <form>
        <p>{(this.props.error) ? this.props.error : ''}</p>
        Name: 
        <input type='text' 
                name="name" 
                value={this.state.name} 
                onChange={this.handleInputChange} 
              />
        <br />
        Email: 
        <input type='email' 
                name="email" 
                value={this.state.email} 
                onChange={this.handleInputChange} 
        />
        <br />
        Password: 
        <input type='password' 
                name="password" 
                value={this.state.password} 
                onChange={this.handleInputChange} 
        />
        <br />
        <button type="button" 
                value="Sign up"
                onClick={() => {this.props.signup(this.state.name, this.state.email, this.state.password)}}>
          Sign Up
        </button>
      </form>
    )
  }
}

export default Signup