import { TextField } from '@mui/material';
import React, {useState} from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useNetMember from '../../../../Hooks/useNetMember';

const DepositMoney = () => {
    const {user} = useAuth();
    const {netMember} = useNetMember(user.email);
    const handleDepositMoney = (e, email) => {
        console.log(e.target[1].value);
        const deposit = e.target[1].value
        const data = {
            email,
            network: user.email,
            money : parseInt(deposit),
            date : new Date().toLocaleDateString()
        }
        const depositData = {
            email,
            money : parseInt(deposit)
        }
        fetch('https://intense-inlet-54612.herokuapp.com/deposit',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        fetch('https://intense-inlet-54612.herokuapp.com/users/deposit',{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(depositData)
        })
        console.log(data);
        e.preventDefault();
        }
    return (
        <div className='width-35 mx-auto py-5'>
            {
                netMember.map(data => (
                    <div className="add-container my-3 px-3 d-flex justify-content-between align-items-center">
                        <p>{data.name}</p>
                        <form key={data._id} onSubmit={(e) => handleDepositMoney(e, data.email)}>
                            <TextField 
                            className="mb-2"
                            label="Ammount"
                            name='money'
                            color="warning"
                            variant="standard"
                            />
                            <input type="submit" className='btn px-4 mt-2 ms-3 general-btn' value="Add" />
                        </form>
                    </div>
                ))
            }
        </div>
    );
};

export default DepositMoney;