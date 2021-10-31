import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function Login() {
    return (
        <div>
            <form className="login-form">
                <ul style={{listStyleType: 'none'}}>
                    <li><input type="email" placeholder="Email" /></li>
                    <li><input type="password" placeholder="Password" /></li>
                    <li>
                        <Link to="/reset-password">Forgot Password? </Link>
                        <Link to="register">Sign Up?</Link>
                    </li>
                    <li><Button text='Sign In' /></li>
                </ul>
            </form>
        </div>
    );
}

export default Login;
