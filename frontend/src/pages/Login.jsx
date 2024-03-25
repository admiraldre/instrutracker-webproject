import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ handleRefresh }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post('/login', {
        email,
        password
      })
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({});
        toast.success('Successfully logged in!');
        navigate('/dashboard');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className=''>
      <div className='loginpage'>
        <h1 className=''>Log in to InstruTracker</h1>
        <form onSubmit={loginUser}>
          <label>Email</label>
          <input type='email' placeholder='Enter email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
          <label>Password</label>
          <input type='password' placeholder='Enter password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
          <button type='submit'>Login</button>
        </form>
        <p>New to InstruTracker? <Link to='/register'>Register here.</Link></p>
      </div>
    </div>
  );
}

export default Login;
