import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [creds, setCreds] = useState({ username: '', password: ''});
  const history = useHistory();
  const [badLogin, setBadLogin] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      localStorage.setItem('token',res.data.payload);
      history.push('/bubbles')
      setBadLogin(false);
    })
    .catch(err => setBadLogin(true));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setCreds({ ...creds, [name]: value });
  }
  return (
    <div>
      <h1>
        Welcome to the Bubble App!
      </h1>
      <form>
        <h2>Login</h2>
        <label>
          Username: 
          <input type='text' name='username' value={creds.username} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type='password' name='password' value={creds.password} onChange={handleChange} />
        </label>
        <button onClick={handleSubmit}>Login</button>
      </form>
      {badLogin && <p>Username or Password not valid.</p>}
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.