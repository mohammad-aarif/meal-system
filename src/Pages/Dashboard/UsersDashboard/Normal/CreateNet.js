import { TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';

const CreateNet = () => {
    const {user, isLoading} = useAuth()
    const [netData, setNetData] = useState({})
    const takeNetData = e => {
        const key = e.target.name;
        const value = e.target.value;
        const newValue = {...netData}
        newValue[key] = value;
        setNetData(newValue)
    }
    const handleNetCreation = e =>{
        const data = {
            email: user.email,
            networkInfo: {
                ...netData,
                network: user.email,
                role: 'manager',
                networkMemberSince: new Date(),
                NetworkCreationDdate: new Date()
            }
            
            
        }
        fetch('https://intense-inlet-54612.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        console.log(data);
        e.preventDefault()
    }
    return (
        <div className='width-35 mx-auto py-5'>
                    <form onSubmit={handleNetCreation}>
                        <TextField
                        onBlur={takeNetData}
                        fullWidth 
                        label="Network Name"
                        name='networkName'
                        color="warning"
                        variant="standard"
                        />
                        <input type="submit" className='general-btn w-100 my-3' value="Create Network" />
                    </form>
        </div>
    );
};

export default CreateNet;