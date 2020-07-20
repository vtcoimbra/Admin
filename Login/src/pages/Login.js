import React, { useContext } from 'react';

import './css/bootstrap-solid.svg';
import './css/bootstrap.min.css';
import './css/floating-labels.css';

import { Context } from '../Context/AuthContext';


export default function Login() {
  const { handleLogin } = useContext(Context);

  return (
    <div className="user-login">
      <form className="form-signin">
        <div className="text-center mb-4">
          <img className="mb-4" src="../../public/logo192.png" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Login</h1>
        </div>

        <div className="form-label-group">
          <input type="email" id="email" className="form-control" placeholder="Email address" required="" autofocus="" />
          <label for="email">Email address</label>
        </div>

        <div className="form-label-group">
          <input type="password" id="password" className="form-control" placeholder="Password" required="" />
          <label for="password">Password</label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleLogin}>Sign in</button>
        <button className="btn btn-lg btn-primary btn-block" type="submit"><a href="./Register.js">Register</a></button>
      </form>
    </div>
  );
}