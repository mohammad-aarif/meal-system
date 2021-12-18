import { logRoles } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useMarket from '../../../../Hooks/useMarket';
import useUser from '../../../../Hooks/useUser';

const Network = () => {
    const {user} = useAuth()
    const [profile, setProfile] = useState({})
    const [market, setMarket] = useState([])
    useEffect(() => {
        fetch(`https://intense-inlet-54612.herokuapp.com/userdata/${user.email}`)
        .then(res => res.json())
        .then(data => setProfile(data.networkInfo.network))
    }, [user.email])
    useEffect(() => {
        fetch(`https://intense-inlet-54612.herokuapp.com/users/${profile}`)
        .then(res => res.json())
        .then(data => setMarket(data))
    }, [profile])
    return (
        <div className='width-35 mx-auto py-5'>
            <h4>Market List</h4>
                <div className="add-container general-btn my-3 px-3 py-2 row justify-content-between align-items-center">
                    <p className='fw-bold col-4'>Name</p>
                    <p className='fw-bold text-center col-4'>Total Meal</p>
                    <p className='fw-bold col-4 text-end'>Cost</p>
                    {/* <p className='fw-bold'>{data.money}</p> */}
                    {/* {user.networkInfo.network} */}
                </div>
            {
                market.map(data => (
                    <div className="add-container my-3 px-3 py-2 row justify-content-between align-items-center">
                        <p className='fw-bold col-4'>{data.name}</p>
                        <p className='fw-bold text-center col-4'>{data.meal}</p>
                        <p className='fw-bold col-4 text-end'>{data.money}</p>
                        {/* <p className='fw-bold'>{data.money}</p> */}
                        {/* {user.networkInfo.network} */}
                    </div>
                ))
            }
        </div>
    );
};

export default Network;