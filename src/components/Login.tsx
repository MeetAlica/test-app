import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (username === 'admin' && password === 'password') {
      sessionStorage.setItem('token', 'példatoken');
      navigate('/UserList');
    } else {
      toast.error('Wrong username or password!');
    }
  };

  return (
    <div className="loginContainer">
      <h2>Log in to your account</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            <input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="inputStyle"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="inputStyle"
            />
          </label>
        </div>
        <button type="submit" className="loginButton">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
