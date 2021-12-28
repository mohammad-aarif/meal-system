import React from 'react';
import useAuth from '../../../../../Hooks/useAuth';
import useTotalmealAdmin from '../../../../../Hooks/useTotalmealAdmin';
const MealLog = () => {
    const {user} = useAuth();
    const {mealsAdmin} = useTotalmealAdmin(user.email)
    return (
        <div className='mx-auto py-5'>
                <div className="add-container general-btn my-3 px-3 py-2 row justify-content-between align-items-center">
                    <p className='fw-bold col-4'>Date</p>
                    <p className='fw-bold text-center col-4'>Name</p>
                    <p className='fw-bold col-4 text-end'>Meal</p>
                </div>
            {
                mealsAdmin.map(data => (
                    <div key={data._id} className="add-container my-3 px-3 py-2 row justify-content-between align-items-center">
                        <p className='fw-bold col-4'>{data.date}</p>
                        <p className='fw-bold text-center col-4'>{data.name}</p>
                        <p className='fw-bold col-4 text-end'>{data.meal}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default MealLog;