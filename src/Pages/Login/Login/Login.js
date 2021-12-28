import { TextField } from '@mui/material';
import userEvent from '@testing-library/user-event';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './login.css'
const Login = () => {
    const {googleSignIn, user, signInEmail} = useAuth();
    const [loginData, setLoginData] = useState({})
    const takeLoginData = e => {
        const key = e.target.name;
        const value = e.target.value;
        const newValue = {...loginData}
        newValue[key] = value;
        setLoginData(newValue)
    }
    const handleLogin = e => {
        signInEmail(loginData.email, loginData.password)
        e.preventDefault()
    }
    const redirect = useNavigate()
    useEffect(() => {
        if(user.email){
            redirect('/userdashboard')
        }
    }, [user.email, redirect])
    return (
        <div className="login-root">
            <h3 className="text-center pt-4">Login</h3>
            <div className='login-container mx-auto py-3'>
                <form onSubmit={handleLogin}>
                            <TextField
                            className='my-3'
                            onBlur={takeLoginData}
                            name="email"
                            type="email"
                            fullWidth 
                            label="Email"
                            color="warning"
                            variant="standard"
                            />
                            <TextField
                            onBlur={takeLoginData} 
                            name="password" 
                            type="password"
                            fullWidth 
                            label="Password"
                            color="warning"
                            variant="standard"
                            />
                    <p>New User? <Link to="/register">Register Now</Link></p>
                            <input type="submit" className='general-btn w-100 my-3' value="Login" />
                    </form>
                <button className='btn w-100' onClick={googleSignIn}><FcGoogle/> Sign-in With Google</button>
            </div>
        </div>
    );
};

export default Login;