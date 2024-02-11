import axios from 'axios';
import React, { useState } from 'react';

import '../css/signin.css';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3306/login', {
        email,
        password
      });

      console.log(response.data);

      // Set cookies
      document.cookie = `email=${email}`;
      document.cookie = `password=${password}`;

      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="signin-card">
      <h2 className="text-center">Sign In</h2>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-label mb-2"> 
            <label className="form-label">Email:</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-label mb-2"> 
            <label className="form-label">Password:</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
