import React from 'react';
import {Router} from 'react-router-dom';

import Routes from './route';
import history from './history';

import {AuthProvider} from './login/Context/AuthProvider';


function App(){
    return(
        <AuthProvider>
            <Router history={history}>
                <Routes />
            </Router>
        </AuthProvider>
    )
}

export default App; 