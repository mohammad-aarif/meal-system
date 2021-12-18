import { NativeSelect, TextField } from '@mui/material';
import React, {useState} from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useNetMember from '../../../../Hooks/useNetMember';
const AddMeal = () => {
    const {user} = useAuth();
    const {netMember} = useNetMember(user.email);
    const handleAddMeal = (e, email) => {
        console.log(e.target[0].value);
        const meals = e.target[0].value
        const data = {
            email,
            network: user.email,
            meal : parseInt(meals),
            date : new Date().toLocaleDateString()
        }
        const mealData = {
            email,
            meal : parseInt(meals),
            date : new Date().toLocaleDateString()
        }
        fetch('https://intense-inlet-54612.herokuapp.com/meals',{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        fetch('https://intense-inlet-54612.herokuapp.com/users/meal',{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(mealData)
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
                                <form onSubmit={(e) => handleAddMeal(e, data.email)}>
                                <NativeSelect
                                    className="my-3"
                                    defaultValue={3}
                                    inputProps={{
                                    }}>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                    <option value={4}>Four</option>
                                    <option value={5}>Five</option>
                                </NativeSelect>
                                <input type="submit" className='btn px-4 ms-3 general-btn' value="Add" />
                                </form>

                        </div>
                    ))
                }
        </div>
    );
};

export default AddMeal;