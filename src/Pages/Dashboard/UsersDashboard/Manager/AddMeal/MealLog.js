import React from 'react';
import useAuth from '../../../../../Hooks/useAuth';
import useTotalmealAdmin from '../../../../../Hooks/useTotalmealAdmin';
const MealLog = () => {
    const {user} = useAuth();
    const {mealsAdmin} = useTotalmealAdmin(user.email)
    return (
        <div className='mx-auto py-5'>
                <div className="add-container general-btn my-3 px-3 py-2 row justify-content-between align-items-center">
                    <p className='fw-bold col-3'>Date</p>
                    <p className='fw-bold text-center col-3'>Name</p>
                    <p className='fw-bold col-3 text-center'>Meal</p>
                    <p className='fw-bold col-3 text-end'>Delete</p>
                </div>
            {
                mealsAdmin.map(data => (
                    <div key={data._id} className="add-container my-3 px-3 py-2 row justify-content-between align-items-center">
                        <p className='fw-bold col-3'>{data.date}</p>
                        <p className='fw-bold text-center col-3'>{data.name}</p>
                        <p className='fw-bold col-3 text-end'>{data.meal}</p>
                        <button className='btn col-3 btn-remove'>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default MealLog;