import React, { useEffect, useState } from 'react';
import {Route, Routes,  useNavigate } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import Loading from '../../../Shared/Loading/Loading';
import Deposit from './Deposit/Deposit';
import Manager from './Manager';
import NavbarDash from './NavbarDash';
import TotalInsight from './TotalInsight';
import MealDash from './AddMeal/MealDash'
import GoodsDash from './Goods/GoodsDash';
import { useSelector } from 'react-redux';
const ManagerDash =  () => {
    const {user, isLoading, setIsLoading} = useAuth();
    const role = useSelector(state => state.profile.profileData.networkInfo.role)
    const history = useNavigate()
    if (role !== 'manager'){
        history('/userdasboard')
    }
    console.log(role);
      
    return (
        <div className='manager-container'>
            <div className="overlay">
                <NavbarDash></NavbarDash> 
            <Routes>
                <Route path='/' element={<TotalInsight />} />
                <Route path='/manager' element={<TotalInsight />} />
                <Route path='/addmember' element={<Manager />} />
                <Route path='/addmeal' element={<MealDash />} />
                <Route path='/deposit' element={<Deposit />} />
                <Route path='/addgoods' element={<GoodsDash />} />
            </Routes>
            </div>
        </div>
    );
};

export default ManagerDash;