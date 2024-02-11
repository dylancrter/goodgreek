import axios from 'axios';
import React, { useState } from 'react';
import '../css/SignUp.css';

export const SignUp = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrganization] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = {
            name: name,
            email: email,
            password: password,
            organization: organization
        };

        try {
          const response = await axios.post('http://localhost:3306/api/user/register', {
            email,
            password,
            name,
            organization
          });

            if (response.ok) {
                console.log('User saved successfully');
                // Set cookie after successful user save
                document.cookie = `user=${name}; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;
            } else {
                console.log('Failed to save user');
            }
        } catch (error) {
            console.error('Error saving user:', error);
        }
    };

    return (
              <div className="paper col-md-6 offset-md-3 offset-3">
                  <h2 className="text-center"> Register Account</h2>
                  <div className="paper-body">
                      <form onSubmit={handleSubmit}>
                          <div className="form-label mb-2">
                              <label className="form-label"> Name :</label>
                              <input
                                  type="text"
                                  placeholder="Full Name"
                                  name="name"
                                  className="form-control"
                                  value={name}
                                  onChange={e => {
                                      setName(e.target.value);
                                      console.log(e.target.value);
                                  }}
                              />
                          </div>

                          <div className="form-label mb-2">
                              <label className="form-label"> Email :</label>
                              <input
                                  type="text"
                                  placeholder="Email"
                                  name="email"
                                  className="form-control"
                                  value={email}
                                  onChange={e => setEmail(e.target.value)}
                                  onClick={e => e.target.select()}
                              />
                          </div>

                          <div className="form-label mb-2">
                              <label className="form-label"> Password :</label>
                              <input
                                  type="password"
                                  placeholder="Password"
                                  name="password"
                                  className="form-control"
                                  value={password}
                                  onChange={e => setPassword(e.target.value)}
                                  onClick={e => e.target.select()}
                              />
                          </div>

                          <div className="form-label mb-2">
                              <label className="form-label"> Organization :</label>
                              <input
                                  type="text"
                                  placeholder="Organization"
                                  name="organization"
                                  className="form-control"
                                  value={organization}
                                  onChange={e => setOrganization(e.target.value)}
                                  onClick={e => e.target.select()}
                              />
                          </div>

                          <button type="submit" className="btn btn-primary" style={{marginTop:'5%'}}>Submit</button>
                      </form>
                  </div>
              </div>
    );
};

export default SignUp;