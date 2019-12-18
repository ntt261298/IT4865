import React, { useState } from 'react';
import { saveToken, saveRole } from '../utils/localStorage';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('http://178.128.217.110:8302/authentication', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (data['status'] === 'Failure') {
            setError(data['details']);
            return;
        }
        saveToken(data['authorization']);
        saveRole(data['role']);
        window.location.replace('http://localhost:3000/home');
    }

    return (
        <div id="login-page">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
                            {
                                error && (
                                  <div className="alert alert-danger">
                                      <a href="#" className="close" data-dismiss="alert" aria-label="close" onClick={() => setError('')}>&times;</a>
                                      { error }
                                  </div>
                                )
                            }
                            <form className="form-signin">
                            <div className="form-label-group">
                                <input
                                    type="text"
                                    id="inputUsername"
                                    className="form-control" placeholder="Username"
                                    required autofocus
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <label for="inputUsername">Username</label>
                            </div>

                            <div className="form-label-group">
                                <input
                                    type="password"
                                    id="inputPassword"
                                    className="form-control"
                                    placeholder="Password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label for="inputPassword">Password</label>
                            </div>

                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" for="customCheck1">Remember password</label>
                            </div>
                            <button
                                className="btn btn-lg btn-primary btn-block text-uppercase"
                                type="submit"
                                onClick={handleLogin}
                            >Sign in</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;