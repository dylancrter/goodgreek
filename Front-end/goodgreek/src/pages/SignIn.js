import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

import '../css/signin.css';

export const SignIn = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post('your_login_endpoint', {
        email,
        password
      });

      console.log(response.data); // Handle successful login response

      // Reset form fields after successful login
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Login failed:', error); // Handle login error
    }
  };

  return (
    <div className="signin-card">
      <h2 className="text-center">Sign In</h2>
      <div className="card-body">
        <form onSubmit={handleSubmit}> {/* Attach handleSubmit function to onSubmit event */}
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
          <button type="submit" className="btn btn-primary">Submit</button> {/* Submit button */}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
