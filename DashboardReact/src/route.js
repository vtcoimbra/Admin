import React, { useContext } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import { Context } from './Login/Context/AuthContext';

import Login from './login/pages/Login';
import AdminLayout from "layouts/Admin.js";

function CustomRoute({ isPrivate, ...rest }) {
    const { loading, authenticated } = useContext(Context);
  
    if (loading) {
      return <h1>Loading...</h1>;
    }
  
    if (isPrivate && !authenticated) {
      return <Redirect to="/admin/dashboard" />
    }
  
    return <Route {...rest} />;
  }

export default function Routes() {
    return(
        <Switch>
            <CustomRoute path="/Login" component={Login} />
            <CustomRoute path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Redirect to="/admin/dashboard" />
        </Switch>
    );
}