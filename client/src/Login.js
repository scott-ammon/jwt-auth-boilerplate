import React from 'react';

export const Login = props => {
  return(
    <div>
      <p>{(props.error) ? props.error : ''}</p>
      Email: 
      <input type="email" 
             name="loginEmail" 
             value={props.email} 
             onChange={props.handleInput} 
      />
      <br />
      Password: 
      <input type="password" 
             name="loginPassword" 
             value={props.password} 
             onChange={props.handleInput} 
      />
      <br />
      <button type="button" 
              onClick={() => {props.login(props.email, props.password)}}>
        Log In
      </button>
    </div>
  );
}