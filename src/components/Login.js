import React, { useState } from 'react';
import { saveToken } from '../utils/localStorage';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
        e.preventDefault();
        const response = fetch('http://178.128.217.110:8104/authentication', {
            method: 'post',
            body: { username, password },
        });
        const data = await response.json();
        saveToken(data.authorization);
    }

    return (
        <body id="login-page">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
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
        </body>
    );
}

export default Login;