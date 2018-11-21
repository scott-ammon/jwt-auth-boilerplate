import React from 'react';

export const Signup = props => {
  return(
    <div>
      <p>{(props.error) ? props.error : ''}</p>
      Name: 
      <input type='text' 
              name='signupName'
              value={props.name} 
              onChange={props.handleInput} 
            />
      <br />
      Email: 
      <input type='email' 
              name='signupEmail'
              value={props.email} 
              onChange={props.handleInput} 
      />
      <br />
      Password: 
      <input type='password' 
              name='signupPassword'
              value={props.password} 
              onChange={props.handleInput} 
      />
      <br />
      <button type="button" 
              value="Sign up"
              onClick={() => {props.signup(props.name, props.email, props.password)}}>
        Sign Up
      </button>
    </div>
  )
}