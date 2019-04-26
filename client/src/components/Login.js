import React from 'react';

export const Login = props => {
  return(
    <form>
      <p className="error">{(props.error) ? props.error : ''}</p>
      <label htmlFor="loginEmail">Email</label>
      <br/>
      <input type="email" 
             id="loginEmail"
             name="loginEmail" 
             value={props.email || ""} 
             onChange={props.handleInput} 
      />
      <br />
      <label htmlFor="loginPassword">Password</label>
      <br/>
      <input type="password" 
             id="loginPassword"
             name="loginPassword" 
             value={props.password || ""} 
             onChange={props.handleInput}
             autocomplete="off" 
      />
      <br />
      <button type="button" 
              onClick={() => {props.login(props.email, props.password)}}>
        Log in
      </button>
    </form>
  );
}