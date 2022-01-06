import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { profileAction } from '../../../../app/Reducers/profileSlice';
import useAuth from '../../../../Hooks/useAuth';
import useUser from '../../../../Hooks/useUser';
import AllCalc from './AllCalc';
import CreateNet from './CreateNet';
import MarketList from './MarketList';
import NavUser from './NavUser';
import Network from './Network';
const UserDash = () => {
    const {user} = useAuth();
    const dispatch = useDispatch()
    const {profile} = useUser(user.email)
    dispatch(profileAction(profile))

    return (
        <div className='manager-container'>
            <div className="overlay">
                <NavUser />
            <Routes>
                <Route path='/' element={<AllCalc />} />
                <Route path='/home' element={<AllCalc />} />
                <Route path='/create' element={<CreateNet />} />
                <Route path='/network' element={<Network />} />
                <Route path='/goods' element={<MarketList />} />
            </Routes>
            </div>
        </div>
    );
};

export default UserDash;