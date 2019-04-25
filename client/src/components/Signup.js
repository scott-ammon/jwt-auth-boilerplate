import React from 'react';

export const Signup = props => {
  return(
    <div>
      <p className="error">{(props.error) ? props.error : ''}</p>
      <label htmlFor="signupName">Name</label>
      <br/>
      <input  
             id="signupName"
             name='signupName'
             value={props.name || ""} 
             onChange={props.handleInput} 
            />
      <br />
      <label htmlFor="signupEmail">Email</label>
      <br/>
      <input type='email' 
             id="signupEmail"
             name='signupEmail'
             value={props.email || ""} 
             onChange={props.handleInput} 
      />
      <br />
      <label htmlFor="signupPassword">Password</label>
      <br/>
      <input type='password' 
             id="signupPassword"
             name='signupPassword'
             value={props.password || ""} 
             onChange={props.handleInput} 
      />
      <br />
      <button type="submit" 
              value="Sign up"
              onClick={() => {props.signup(props.name, props.email, props.password)}}>
        Sign up
      </button>
    </div>
  )
}