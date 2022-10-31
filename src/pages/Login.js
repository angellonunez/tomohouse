import React, { useContext, useState } from 'react';
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import NavMenuLogin from '../components/NavMenuLogin';

function Login() {
    const [error, setError] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch({type: "LOGIN", payload:user})
            navigate('/')
        })
        .catch((error) => {
            setError(true);
        });
    }

    return (
        <div className='login'>
            <h1>Sign in to your account</h1>
            <p>If you want to test the app, username: test@test.com and password: test123</p>
            <form className='login-form' onSubmit={handleLogin}>
                <p>Email</p>
                <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)}></input>
                <p>Password</p>
                <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)}></input>
                <button type='submit'>Login</button>
                {error && <span>Wrong email or password!</span>}
            </form>
            <NavMenuLogin />
        </div>
    )
}

export default Login;