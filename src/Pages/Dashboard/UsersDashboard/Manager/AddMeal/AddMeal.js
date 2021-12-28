import { NativeSelect } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../../Hooks/useAuth';
import useNetMember from '../../../../../Hooks/useNetMember';
import useToast from '../../../../../Hooks/useToast';
import Loading from '../../../../Shared/Loading/Loading';
import { SnackbarProvider, useSnackbar } from 'notistack';

const AddMeal = () => {
    const { enqueueSnackbar } = useSnackbar();

    const {user, isLoading} = useAuth();
    const {netMember} = useNetMember(user.email);
    const [btnUpdate, setBtnUpdate] = useState([]);
    const {toast} = useToast();
    const todaysDate = new Date().toLocaleDateString();
    
    const handleToastSuccess = ( variant) => () => {
      enqueueSnackbar('Meal Added Succefully!', { variant });
    };
    const handleToastUpdate = ( variant) => () => {
      enqueueSnackbar('Meal Updated Successfully',{ variant });
    };
    const handleAddMeal = (e, email, name, date) => {
        console.log(e.target[0].value);
        const meals = e.target[0].value
        const data = {
            email,
            name,
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
        .then(res => res.json())
        .then(data => {
            if(data.upsertedId){
                handleToastSuccess('success')
                console.log(data.upsertedId);
            }
            else if(data.matchedCount){
                handleToastUpdate('info')
                // toast.fire({
                //     position: 'bottom-start',
                //     icon: 'success',
                //     iconColor: '#ffb500',
                //     color: '#ffb500',
                //     background: '#fcf3c0',
                //     title: 'Meal Updated Successfully'
                // })
                console.log(data.matchedCount);
            }
            console.log(data); 
    })

        fetch('http://localhost:3002/users/meal',{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(mealData)
        })
        e.preventDefault();
        }
        if(isLoading){
            return <Loading />
        }
        console.log(btnUpdate);
        
    return (
        <div className='mx-auto py-5'>
            <div className="add-container general-btn my-3 mx-1 text-center px-3 py-2 row justify-content-between align-items-center">
                Deposit Money
            </div>
                {
                    netMember.map(data => (
                        <div key={data._id} className="add-container my-3 px-3 d-flex justify-content-between align-items-center">
                            <p>{data.name}</p>
                                <form onSubmit={(e) => handleAddMeal(e, data.email, data.name, data.lastMealUpdate)}>
                                <NativeSelect
                                    className="my-3"
                                    defaultValue={data?.lastMealCount || 3}
                                    inputProps={{
                                    }}>
                                    <option value={0}>Off</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                    <option value={4}>Four</option>
                                    <option value={5}>Five</option>
                                </NativeSelect>
                                {(!btnUpdate.includes(data._id) && data.lastMealUpdate !== todaysDate) ? <input type="submit" onClick={() => setBtnUpdate([...btnUpdate, data._id])} className='btn px-5 ms-3 general-btn' value="Add" />:
                                <input type="submit" className='btn px-4 ms-3 remove-btn' value="Update" />}
                                </form>
                        </div>
                    ))
                }
        </div>
    );
};
const notistackIntigration = () => {
    return(
    <SnackbarProvider maxSnack={4}>
        <AddMeal />
    </SnackbarProvider>
    )
}

export default notistackIntigration;