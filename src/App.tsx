import React, { useState } from 'react';
import Login from './pages/login';
import Home from './pages/home';
import './styles.css';

export default function App() {
  const [account, setAccount] = useState<string | null>(localStorage.getItem('user'));
  return !account ? <Login setAccount={setAccount} /> : <Home setAccount={setAccount} />;
}
