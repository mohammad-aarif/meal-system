import { TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import { FcGoogle } from "react-icons/fc"

const Register = () => {
    const {signUpEmail, googleSignIn} = useFirebase();
    const [registerValue, setRegisterValue] = useState({})
    const registerValueTake = (e) => {
        const newValue = {...registerValue};
        const key = e.target.name;
        const value = e.target.value;
        newValue[key] = value;
        setRegisterValue(newValue)
    }
    const handleRegister = (e) => {
        signUpEmail(registerValue.email, registerValue.password, registerValue.name)
        e.preventDefault()
    }
    return (
        <div className="login-root">
            <div className='login-container mx-auto py-5'>
                <form onSubmit={handleRegister}>
                            <TextField
                            onBlur={registerValueTake}
                            name="name"
                            type="text"
                            fullWidth 
                            label="Name"
                            color="warning"
                            variant="standard"
                            />
                            <TextField
                            className='my-3'
                            onBlur={registerValueTake}
                            name="email"
                            type="email"
                            fullWidth 
                            label="Email"
                            color="warning"
                            variant="standard"
                            />
                            <TextField
                            onBlur={registerValueTake} 
                            name="password" 
                            type="password"
                            fullWidth 
                            label="Password"
                            color="warning"
                            variant="standard"
                            />
                <p>Already Have an Account? <Link to="/login">Log in</Link></p>
                            <input type="submit" className='general-btn w-100 my-3' value="Register" />
                </form>
                <button className='btn w-100' onClick={googleSignIn}><FcGoogle/> Sign-in With Google</button>
            </div>
        </div>
    );
};

export default Register;