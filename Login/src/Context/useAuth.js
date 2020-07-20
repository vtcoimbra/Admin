import { useState, useEffect } from 'react';

import history from '../history';

const baseUrl = 'https://desafio-api.devzz.ninja/'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      baseUrl.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
  async function handleLogin() {
    const { data: { token } } = await baseUrl.post('/login');

    localStorage.setItem('token', JSON.stringify(token));
    baseUrl.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    history.push('/admin');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    baseUrl.defaults.headers.Authorization = undefined;
    history.push('/Login');
  }
  
  return { authenticated, loading, handleLogin, handleLogout };
}