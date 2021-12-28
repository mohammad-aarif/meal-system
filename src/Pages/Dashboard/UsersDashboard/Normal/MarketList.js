import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Loading from '../../../Shared/Loading/Loading';

const MarketList = () => {
    const {user, isLoading} = useAuth()
    const [profile, setProfile] = useState({})
    const [market, setMarket] = useState([])
    useEffect(() => {
        fetch(`https://intense-inlet-54612.herokuapp.com/userdata/${user.email}`)
        .then(res => res.json())
        .then(data => setProfile(data.networkInfo.network))
    }, [user.email])
    useEffect(() => {
        fetch(`https://intense-inlet-54612.herokuapp.com/goods/${profile}`)
        .then(res => res.json())
        .then(data => setMarket(data))
    }, [profile])
    if(isLoading){
        return <Loading/>
    }
    return (
        <div className='width-35 mx-auto py-5'>
            <h4>Market List</h4>
            <div className="add-container general-btn my-3 px-3 py-2 row justify-content-between align-items-center">
                    <p className='fw-bold col-3'>Date</p>
                    <p className='fw-bold text-center col-3'>Name</p>
                    <p className='fw-bold col-3 text-center'>Descrption</p>
                    <p className='fw-bold col-3 text-end'>Cost</p>
                </div>
            {
                market.map(data => (
                    <div key={data._id} className="add-container my-3 px-3 py-2 row justify-content-between align-items-center">
                        <p className='fw-bold col-3 text-start'>{data.date}</p>
                        <p className='fw-bold col-3 text-center'>{data.whoDid}</p>
                        <p className='fw-bold col-3 text-center'>{data.goods}</p>
                        <p className='fw-bold col-3 text-end'>{data.money}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default MarketList;