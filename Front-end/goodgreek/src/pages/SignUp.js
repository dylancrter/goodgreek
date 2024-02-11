import React, { useState } from 'react';
import '../css/SignUp.css';

export const SignUp = () => {
  
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [organization, setOrganization] = useState('')
  
  const saveUser = (e) => {
      e.preventDefault();

      const user = {name, password, email, organization}

      console.log(user);
  }

  return (
      <div> 

          <div className = "container">
              <div className="row">
                  <div className = "card col-md-6 offset-md-3 offset-3">
                      <h2 className = "text-center"> Register </h2>
                      <div className =  "card-body">
                          <form>
                              <div className = "form-label mb-2"> 
                                  <label className = "form-label"> Name :</label>
                                  <input
                                  type = "text"
                                  placeholder = "Full Name"
                                  name = "name"
                                  className = "form-control"
                                  value = {name}
                                  onChange = {e => setName(e.target.value)}
                              >
                              </input>
                          </div>
                      
                          <div className = "form-label mb-2"> 
                              <label className = "form-label"> Email :</label>
                              <input
                                  type = "text"
                                  placeholder = "Email"
                                  name = "email"
                                  className = "form-control"
                                  value = {email}
                                  onChange = {e => setEmail(e.target.value)}
                              >
                              </input>
                          </div>

                          <div className = "form-label mb-2"> 
                              <label className = "form-label"> Password :</label>
                              <input
                                  type = "text"
                                  placeholder = "Password"
                                  name = "password"
                                  className = "form-control"
                                  value = {password}
                                  onChange = {e => setPassword(e.target.value)}
                              >
                              </input>
                          </div>

                          <div className = "form-label mb-2">
                              <label className = "form-label"> Organization :</label>
                              <input
                                  type = "text"
                                  placeholder = "Organization"
                                  name = "organization"
                                  className = "form-control"
                                  value = {organization}
                                  onChange = {e => setOrganization(e.target.value)}
                              >
                              </input>
                          </div>
                          
                      </form>

                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}

export default SignUp;