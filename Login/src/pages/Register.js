import React from 'react';
import axios from 'axios';

import './css/bootstrap-solid.svg';
import './css/bootstrap.min.css';
import './css/floating-labels.css';


const baseUrl = 'https://desafio-api.devzz.ninja/'
const initialState = {
  account: {name:'', email:'', password:''},
  list: []
};

class Register extends React.Component {

  state = {...initialState}

  register(){
    const account = this.state.account;
    const url = baseUrl + 'account';
    axios['post'](url, account).then(resp => {
        axios(baseUrl + 'account').then(resp => {
            this.setState({ list:resp.data })
        });
        this.setState({account: initialState.account})
    });
  }

    render() {
        return (
            <>
                <div className="user-login">
                    <form className="form-signin">
                        <div className="text-center mb-4">
                        <img className="mb-4" src="../../public/logo192.png" alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                        </div>

                        <div className="form-label-group">
                        <input type="text" id="name" className="form-control" placeholder="Name" required="" autoFocus="" />
                        <label htmlFor="name">Name</label>
                        </div>

                        <div className="form-label-group">
                        <input type="email" id="email" className="form-control" placeholder="Email address" required="" autoFocus="" />
                        <label htmlFor="email">Email address</label>
                        </div>

                        <div className="form-label-group">
                        <input type="password" id="password" className="form-control" placeholder="Password" required="" />
                        <label htmlFor="password">Password</label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={e => this.register(e)}>Register</button>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                    </form>
                </div>
            </>
        );
    }
}

export default Register;