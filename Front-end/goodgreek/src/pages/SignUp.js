import React, { useState } from 'react';
import '../css/SignUp.css';

export const SignUp = () => {
    
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrganization] = useState('');
    
    const saveUser = async (e) => {
        e.preventDefault();

        const user = { name, password, email, organization };

        try {
            const response = await fetch('/api/saveUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                console.log('User saved successfully');
            } else {
                console.log('Failed to save user');
            }
        } catch (error) {
            console.error('Error saving user:', error);
        }
    };

    return (
        <div> 
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-3">
                        <h2 className="text-center"> Register </h2>
                        <div className="card-body">
                            <form onSubmit={saveUser}>
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
                                                    
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;