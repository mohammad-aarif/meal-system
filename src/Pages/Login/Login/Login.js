import { TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { profileAction } from '../../../app/Reducers/profileSlice';
import useAuth from '../../../Hooks/useAuth';
import useUser from '../../../Hooks/useUser'
import './login.css'
const Login = () => {
    const {googleSignIn, user, signInEmail} = useAuth();
    const [loginData, setLoginData] = useState({})
    const [profile, setProfile] = useState({})
    const {setIsLoading} = useAuth()
    const role = useSelector(state => state?.profile?.profileData?.networkInfo?.role)
    const dispatch = useDispatch()
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
    // const {profile} = useUser(user.email)
    dispatch(profileAction(profile))
    const redirect = useNavigate()
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://intense-inlet-54612.herokuapp.com/userdata/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setProfile(data)
            if(role === 'manager'){
                // redirect('/manager')
            }
            else{
                redirect ('/userdashboard')
            }
        })
        .finally(() => setIsLoading(false))
    }, [user.email, role, redirect, setIsLoading])
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